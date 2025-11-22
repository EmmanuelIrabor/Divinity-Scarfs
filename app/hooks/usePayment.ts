"use client";
import { useState } from "react";
import { initializePaystackPayment } from "@/lib/api/payments/paystack/paystack";
import { generateOrderId } from "@/lib/database/orders";
import CartTotal from "@/components/CartTotal";

export function usePayment({ formData, cartScarfs, calculateTotal }: any) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = calculateTotal ? calculateTotal() : CartTotal();

  const handleSuccessfulPayment = async (orderId: string) => {
    try {
      const orderData = {
        customer: formData,
        items: cartScarfs,
        total: total,
        orderId: orderId,
        orderDate: new Date().toISOString(),
      };

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };

  const handlePaystackPayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const orderId = generateOrderId();

      // Store order data BEFORE redirecting to Paystack
      await handleSuccessfulPayment(orderId);

      const paymentData = {
        email: formData.email,
        amount: total * 100,
        reference: orderId,
        callback_url: `${window.location.origin}/ThankYou`,
        metadata: {
          customer_name: `${formData.firstName} ${formData.lastName}`,
          order_id: orderId,
          items: cartScarfs.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          shipping_address: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            zip_code: formData.zipCode,
          },
        },
      };

      const paymentResult = await initializePaystackPayment(paymentData);

      window.location.href = paymentResult.authorization_url;

      return { success: true, data: paymentResult };
    } catch (err: any) {
      setError(err.message || "Paystack payment failed");

      return { success: false, message: err.message };
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    handlePaystackPayment,
    handleSuccessfulPayment,
    isProcessing,
    error,
    clearError: () => setError(null),
  };
}
