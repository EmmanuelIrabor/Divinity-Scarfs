// lib/sendEmail.ts or utils/sendEmail.ts

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  creator: string;
  material: string;
  dimension: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

interface Checkout {
  id: string;
  cartScarfs: CartItem[];
  formData: FormData;
  total: number;
  timestamp: number;
}

export async function sendEmail(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // Get checkout from localStorage
    const checkoutStr = localStorage.getItem("checkout");

    if (!checkoutStr) {
      throw new Error("No checkout found in localStorage");
    }

    const checkout: Checkout = JSON.parse(checkoutStr);

    if (!checkout.formData?.email) {
      throw new Error("No email address found in checkout");
    }

    const { formData, cartScarfs, total, id, timestamp } = checkout;

    // Build email content
    const itemsList = cartScarfs
      .map(
        (item) =>
          `<li style="margin-bottom: 15px;">
            <strong>${item.name}</strong> by ${item.creator}<br/>
            Quantity: ${item.quantity} | Price: $${item.price}<br/>
            Material: ${item.material} | Size: ${item.dimension}
          </li>`
      )
      .join("");

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Order Confirmation</h2>
        <p>Hi ${formData.firstName} ${formData.lastName},</p>
        <p>Thank you for your order! Here are your order details:</p>
        
        <h3 style="color: #555; margin-top: 30px;">Items Ordered:</h3>
        <ul style="list-style: none; padding: 0;">
          ${itemsList}
        </ul>
        
        <div style="border-top: 2px solid #eee; margin-top: 20px; padding-top: 20px;">
          <p style="font-size: 18px;"><strong>Total: $${total}</strong></p>
        </div>
        
        <h3 style="color: #555; margin-top: 30px;">Shipping Address:</h3>
        <p>
          ${formData.address}<br/>
          ${formData.city}, ${formData.state} ${formData.zipCode}<br/>
          ${formData.country}<br/>
          Phone: ${formData.phone}
        </p>
        
        <p style="margin-top: 30px; color: #666;">
          Order ID: ${id}<br/>
          Date: ${new Date(timestamp).toLocaleDateString()}
        </p>
      </div>
    `;

    // Send email via API
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: formData.email,
        subject: `Order Confirmation - ${id}`,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
