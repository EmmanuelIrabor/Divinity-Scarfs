"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID as string;

export default function PayPalButton({ amount }: { amount: string }) {
  const router = useRouter();

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.PAYPAL_CLIENT_ID!,
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: "USD",
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                },
                items: [
                  {
                    name: "Purchase",
                    description: "Your purchase description",
                    quantity: "1",
                    unit_amount: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                ],
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            try {
              await actions.order.capture();

              router.push("/ThankYou");
            } catch (err) {
              router.push("/PaymentFailed");
            }
          }
        }}
        onError={() => {
          router.push("/PaymentFailed");
        }}
        onCancel={() => {}}
      />
    </PayPalScriptProvider>
  );
}
