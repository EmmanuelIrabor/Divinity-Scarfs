"use client";
import Input from "@/components/ui/Input";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputSelect from "@/components/ui/InputSelect";
import { useState, useEffect } from "react";
import { getCartItems } from "@/lib/Cart";
import scarfsData from "@/app/data/Scarfs.json";
import { usePayment } from "@/app/hooks/usePayment";
import Loader from "@/components/ui/loader";
import Link from "next/link";

interface CartScarf {
  id: number;
  name: string;
  description: string;
  price: number;
  dimension: string;
  creator: string;
  year: number;
  material: string;
  image: string;
  quantity: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  country: string;
  state: string;
  city: string;
}

interface CheckoutStorageData {
  id: string;
  formData: FormData;
  cartScarfs: CartScarf[];
  total: number;
  timestamp: number;
}

export default function Checkout() {
  const router = useRouter();
  const [cartScarfs, setCartScarfs] = useState<CartScarf[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkoutId, setCheckoutId] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    country: "",
    state: "",
    city: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const generateCheckoutId = (): string => {
    return `checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const saveToLocalStorage = (): void => {
    if (!isFormValid || cartScarfs.length === 0) return;

    const checkoutData: CheckoutStorageData = {
      id: checkoutId,
      formData,
      cartScarfs,
      total: calculateTotal(),
      timestamp: Date.now(),
    };

    // Store as a single object instead of nested objects
    localStorage.setItem("checkout", JSON.stringify(checkoutData));
  };

  const loadFromLocalStorage = (): void => {
    const storedCheckout = localStorage.getItem("checkout");
    if (storedCheckout) {
      try {
        const checkoutData: CheckoutStorageData = JSON.parse(storedCheckout);
        setCheckoutId(checkoutData.id);
        setFormData(checkoutData.formData);
        setCartScarfs(checkoutData.cartScarfs);
      } catch (error) {
        console.error("Error loading checkout from localStorage:", error);
      }
    }
  };

  const calculateTotal = (): number => {
    return cartScarfs.reduce(
      (total, scarf) => total + scarf.price * scarf.quantity,
      0
    );
  };

  const { handlePaystackPayment, isProcessing, error, clearError } = usePayment(
    {
      formData,
      cartScarfs,
      calculateTotal,
    }
  );

  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [formData, error, clearError]);

  useEffect(() => {
    const loadCartItems = () => {
      const cartItems = getCartItems();
      const scarfsWithDetails: CartScarf[] = [];

      cartItems.forEach((cartItem) => {
        const scarfDetails = scarfsData.scarfs.find(
          (scarf) => scarf.id === cartItem.scarf_id
        );
        if (scarfDetails) {
          scarfsWithDetails.push({
            ...scarfDetails,
            quantity: cartItem.quantity,
          });
        }
      });

      setCartScarfs(scarfsWithDetails);
      setLoading(false);
    };

    loadCartItems();

    // Try to load existing checkout first, generate new ID if none exists
    const storedCheckout = localStorage.getItem("checkout");
    if (storedCheckout) {
      loadFromLocalStorage();
    } else {
      setCheckoutId(generateCheckoutId());
    }

    const handleCartUpdate = () => {
      loadCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  useEffect(() => {
    const isValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.zipCode.trim() !== "" &&
      formData.country.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.city.trim() !== "";

    setIsFormValid(isValid);
  }, [formData]);

  useEffect(() => {
    if (isFormValid && cartScarfs.length > 0 && checkoutId) {
      saveToLocalStorage();
    }
  }, [formData, cartScarfs, isFormValid, checkoutId]);

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = (method: string) => {
    if (!isFormValid) return;
    saveToLocalStorage();
  };

  // Optional: Add a function to clear the checkout if needed
  const clearCheckout = (): void => {
    localStorage.removeItem("checkout");
    setCheckoutId(generateCheckoutId());
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      country: "",
      state: "",
      city: "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-black">
          <Loader />
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full px-8"
      data-barba="container"
      data-barba-namespace="checkout"
    >
      <div className="flex flex-col md:gap-25 md:flex-row lg:justify-between mt-5">
        <div className="flex flex-col">
          <button
            className="blank-btn--black unset"
            onClick={() => router.push("/Cart")}
          >
            <div className="flex items-center gap-1 font-bold text-xl text-black">
              <CaretLeft size={15} />
              BACK TO CART
            </div>
          </button>
          <p className="text-xs text-charcoal mx-4">
            Fill in your delivery details
          </p>
          <div className="mt-5">
            <div className="double-inputs--checkout flex flex-col md:flex-row lg:items-center gap-5">
              <Input
                label="First Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
              />
              <Input
                label="Last Name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
              />
            </div>
            <div className="double-inputs--checkout flex flex-col md:flex-row lg:items-center gap-5 mt-5">
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
              />
              <Input
                label="Phone Number"
                name="phone"
                required
                value={formData.phone}
                onChange={(value) => handleInputChange("phone", value)}
              />
            </div>

            <div className="double-inputs--checkout flex flex-col md:flex-row lg:items-center gap-5 mt-5">
              <Input
                label="Address"
                name="address"
                required
                value={formData.address}
                onChange={(value) => handleInputChange("address", value)}
              />
              <Input
                label="Zip Code"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={(value) => handleInputChange("zipCode", value)}
              />
            </div>

            <div className="flex flex-row flex-wrap gap-2 mt-5 items-center">
              <InputSelect
                label="Country"
                name="country"
                value={formData.country}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    country: value,
                    state: "",
                    city: "",
                  }));
                }}
                type="country"
                required
              />

              <InputSelect
                label="State"
                name="state"
                value={formData.state}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    state: value,
                    city: "",
                  }));
                }}
                type="state"
                countryCode={formData.country}
                required
                disabled={!formData.country}
              />

              <InputSelect
                label="City"
                name="city"
                value={formData.city}
                onChange={(value) => handleInputChange("city", value)}
                type="city"
                countryCode={formData.country}
                stateCode={formData.state}
                required
                disabled={!formData.state}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 lg:mt-5">
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">ITEMS(S)</h1>
          </div>

          {cartScarfs.map((scarf) => (
            <div
              key={scarf.id}
              className="flex flex-col items-center lg:items-end mt-5 mb-10 text-center lg:text-right"
            >
              <p className="text-black text-center comforter -mt-4">
                {scarf.name} x {scarf.quantity}
              </p>
              <img
                src={scarf.image}
                alt={scarf.name}
                width={120}
                height={120}
                className="mt-2"
              />
            </div>
          ))}

          <div className="flex flex-col items-center lg:items-end -mt-10 mb-10 text-center lg:text-right">
            <p className="text-black mt-5 text-lg text-xs">
              Total: ${calculateTotal()}
            </p>
            <img
              src="/images/stars.png"
              alt="Rating"
              width={100}
              height={50}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 justify-center mb-10 mt-5 lg:mt-20">
        <Link
          href={"/PaypalCheckout"}
          className={`w-full lg:w-auto px-10 lg:px-6 py-3 lg:py-2 text-sm lg:text-base ${
            isFormValid
              ? "primary-btn"
              : "primary-btn opacity-50 pointer-events-none"
          }`}
          onClick={() => handlePayment("paypal")}
        >
          <div className="flex items-center justify-center gap-2">
            PAY WITH PAYPAL{" "}
            <Image
              src={"/images/paypal.png"}
              alt="logo"
              width={10}
              height={10}
            />
          </div>
        </Link>

        <button
          className={`w-full lg:w-auto px-10 lg:px-6 py-3 lg:py-2 text-sm lg:text-base ${
            isFormValid
              ? "secondary-btn"
              : "secondary-btn opacity-50 pointer-events-none"
          }`}
          onClick={() => {
            saveToLocalStorage();
            handlePaystackPayment();
          }}
          disabled={!isFormValid}
        >
          <div className="flex items-center justify-center gap-2">
            PAY WITH PAYSTACK{" "}
            <Image
              src={"/images/paystack.png"}
              alt="logo"
              width={10}
              height={10}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
