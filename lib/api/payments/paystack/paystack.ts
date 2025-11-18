interface PaystackPaymentData {
  email: string;
  amount: number;
  reference: string;
  callback_url?: string;
  metadata?: {
    customer_name: string;
    order_id: string;
    items: any[];
  };
}

interface PaystackResponse {
  status: boolean;
  message: string;
  data?: any;
}

export async function initializePaystackPayment(
  paymentData: PaystackPaymentData
) {
  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: PaystackResponse = await response.json();

    if (!data) {
      throw new Error("No response received from Paystack");
    }

    if (data.status === false) {
      throw new Error(data.message || "Paystack payment initialization failed");
    }

    if (!data.data) {
      throw new Error("No data received from Paystack");
    }

    if (!data.data.authorization_url) {
      throw new Error("No authorization URL received from Paystack");
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Network Error")) {
        throw new Error("Network error: Unable to connect to Paystack");
      }
      if (error.message.includes("401")) {
        throw new Error("Invalid Paystack API key");
      }
      if (error.message.includes("400")) {
        throw new Error("Invalid payment data sent to Paystack");
      }
    }

    throw error;
  }
}
