"use client";
import Navbar from "@/components/Navbar";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useRouter } from "next/navigation";
import ShopNow from "@/components/ui/ShopNow";
export default function Collection() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-full"
      data-barba="container"
      data-barba-namespace="shop"
    >
      <Navbar />

      <h1 className="text-center font-bold text-black  mid-text pt-32 xl:pt-0  xl:-mt-0">
        COLLECTION
      </h1>

      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center max-w-6xl mx-auto px-6 mt-5 mb-10">
        <div className="flex flex-col">
          <h5 className="font-bold text-black text-xl">Paris Roque Scarf</h5>
          <p className="text-black pr-10 xl:pr-120">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea
            sunt distinctio minima, eum neque, ut cupiditate corrupti nihil
            provident nam mollitia sequi fugiat deserunt minus? Iste sunt vero
            reprehenderit.
          </p>
          <h6 className="font-bold text-black text-xl">80 x 80</h6>
          <h6 className="text-black barcode">
            Paris Roque Scarf 80x80 handwash
          </h6>

          <div className="hidden xl:flex flex-row gap-1">
            <button className="blank-btn p-0 m-0">
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                Next <ArrowCircleRight weight="bold" />
              </div>
            </button>
            <button className="blank-btn p-0 m-0 mx-0 my-0 px-0 py-0 ">
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <ArrowCircleLeft weight="bold" /> Previous
              </div>
            </button>
          </div>
        </div>

        <div className="mt-0 xl:-mt-10  xl:mx-0 flex flex-row items-end justify-between xl:block">
          <img
            className="w-[200px] xl:w-[600px] xl:w-[600px] 2xl:w-[400px] -mx-8 xl:mx-0"
            src="/images/scarf_one.png"
            alt=""
          />

          <div className="xl:hidden flex flex-col gap-0 justify-self-end">
            <button className="blank-btn p-0 m-0">
              <div className="flex items-center gap-1 p-0 m-0 -mx-6 -my-10">
                Next <ArrowCircleRight weight="bold" />
              </div>
            </button>
            <button className="blank-btn p-0 m-0 mx-0 my-0 px-0 py-0 ">
              <div className="flex items-center gap-1 p-0 m-0 -mx-6 -my-10">
                <ArrowCircleLeft weight="bold" /> Previous
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <ShopNow />
    </div>
  );
}
