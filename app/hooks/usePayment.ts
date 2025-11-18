"use client";
import { useState } from "react";
import { initializePaystackPayment } from "@/lib/api/payments/paystack/paystack";
// import { sendOrderConfirmationEmails } from "@/lib/email/order-confirmation";
import { saveOrderToFile, generateOrderId } from "@/lib/database/orders";
// import { clearCart } from "@/lib/Cart";

interface UsePaymentProps {
  formData: any;
  cartScarfs: any[];
  calculateTotal: () => number;
}

interface PaymentResult {
  success: boolean;
  message?: string;
  data?: any;
}
export function usePayment({
  formData,
  cartScarfs,
  calculateTotal,
}: UsePaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePaystackPayment = async (): Promise<PaymentResult> => {
    setIsProcessing(true);
    setError(null);

    try {
      const orderId = generateOrderId();

      const paymentData = {
        email: formData.email,
        amount: calculateTotal() * 100,
        reference: orderId,
        callback_url: `${window.location.origin}/ThankYou`,
        metadata: {
          customer_name: `${formData.firstName} ${formData.lastName}`,
          order_id: orderId,
          items: cartScarfs,
        },
      };

      const paymentResult = await initializePaystackPayment(paymentData);

      // Redirect to Paystack
      window.location.href = paymentResult.authorization_url;

      return { success: true, data: paymentResult };
    } catch (err: any) {
      setError(err.message || "Paystack payment failed");
      return { success: false, message: err.message };
    } finally {
      setIsProcessing(false);
    }
  };

  //   const handlePaymentSuccess = async (
  //     orderDetails: any
  //   ): Promise<PaymentResult> => {
  //     try {
  //       // 1. Send emails
  //       //   await sendOrderConfirmationEmails(orderDetails);

  //       // 2. Save to file
  //       //   await saveOrderToFile(orderDetails);

  //       // 3. Clear cart
  //       clearCart();

  //       // 4. Redirect to success page
  //       router.push("/ThankYou");

  //       return { success: true };
  //     } catch (err: any) {
  //       setError(err.message || "Order processing failed");
  //       return { success: false, message: err.message };
  //     }
  //   };

  //   const processWebhookPayment = async (
  //     paymentData: any
  //   ): Promise<PaymentResult> => {
  //     try {
  //       const orderDetails = {
  //         id: paymentData.reference || paymentData.id,
  //         timestamp: new Date().toISOString(),
  //         customer: {
  //           name: `${formData.firstName} ${formData.lastName}`,
  //           email: formData.email,
  //         },
  //         items: cartScarfs,
  //         total: calculateTotal(),
  //         paymentMethod: paymentData.channel || "paypal",
  //         paymentStatus: "completed",
  //         shippingAddress: {
  //           address: formData.address,
  //           city: formData.city,
  //           state: formData.state,
  //           country: formData.country,
  //           zipCode: formData.zipCode,
  //         },
  //       };

  //       return await handlePaymentSuccess(orderDetails);
  //     } catch (err: any) {
  //       setError(err.message || "Webhook processing failed");
  //       return { success: false, message: err.message };
  //     }
  //   };

  return {
    handlePaystackPayment,
    // handlePaymentSuccess,
    // processWebhookPayment,
    isProcessing,
    error,
    clearError: () => setError(null),
  };
}
