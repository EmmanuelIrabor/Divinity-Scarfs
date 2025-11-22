import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
    PAYSTACK_BASE_URL: process.env.PAYSTACK_BASE_URL,

    PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
    PAYPAL_BASE_URL: process.env.PAYPAL_BASE_URL,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,

    EMAIL_USER: process.env.EMAIL_USERL,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  },
};

export default nextConfig;
