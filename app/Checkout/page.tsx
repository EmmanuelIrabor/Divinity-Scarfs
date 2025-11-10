"use client";
import Input from "@/components/ui/Input";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Checkout() {
  const router = useRouter();
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
            <div className="double-inputs--checkout flex flex-row items-center gap-5">
              <Input label="First Name" name="firstName" />
              <Input label="Last Name" name="lastName" />
            </div>
            <div className="double-inputs--checkout flex flex-row items-center gap-5 mt-5">
              <Input label="Email" name="email" />
              <Input label="PhoneNumber" name="phone number" />
            </div>

            <div className="double-inputs--checkout flex flex-row items-center gap-5 mt-5">
              <Input label="Address" name="address" />
              <Input label="Zip Code" name="zipcode" />
            </div>

            <div className="flex flex-row gap-2 mt-5 items-center">
              <div className="mx-2 mt-5 flex flex-col w-39">
                <label className="text-black text-xs mb-2">Country</label>
                <select className="input-field" name="Country" id="">
                  <option value="">Nigeria</option>
                </select>
              </div>
              <div className="mx-2 mt-5 flex flex-col w-39">
                <label className="text-black text-xs mb-2">State</label>
                <select className="input-field" name="State" id="">
                  <option value="">Lagos</option>
                </select>
              </div>
              <div className="mx-2 mt-5 flex flex-col w-39">
                <label className="text-black text-xs mb-2">City</label>
                <select className="input-field" name="City" id="">
                  <option value="">Ikeja</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 lg:mt-5">
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">ITEMS(S)</h1>
            <p className="text-black comforter">1 Paris Roque Scarf</p>
          </div>

          <div className="flex flex-col items-center lg:items-end mt-10 mb-10 text-center lg:text-right">
            <img src="/images/scarf_twox.png" alt="" width={120} height={120} />
            <p className="text-black mt-5">Total: $490</p>
            <img
              src="/images/stars.png"
              alt=""
              width={100}
              height={50}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 justify-center mb-10 mt-20">
        <button className="primary-btn w-full lg:w-auto px-10 lg:px-6 py-3 lg:py-2 text-sm lg:text-base">
          <div className="flex items-center justify-center gap-2">
            PAY WITH PAYPAL{" "}
            <Image
              src={"/images/paypal.png"}
              alt="logo"
              width={10}
              height={10}
            />
          </div>
        </button>
        <button className="alt-btn w-full lg:w-auto px-10 lg:px-6 py-3 lg:py-2 text-sm lg:text-base">
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
