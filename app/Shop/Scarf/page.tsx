"use client";
import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
// import CartIndicator from "@/components/ui/CartIndicator";
import { useRouter } from "next/navigation";
import { CaretLeft, ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
export default function ScarfPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen w-full"
      data-barba="container"
      data-barba-namespace="shop-scarf"
    >
      <Navbar />

      <div className="hidden xl:block">
        <div className="flex flex-col lg:flex-row w-full px-8 gap-10 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start flex-1">
            <button
              className="blank-btn p-0 m-0 mb-10"
              onClick={() => router.push("/Shop")}
            >
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <CaretLeft weight="bold" /> Back to Shop
              </div>
            </button>

            <p className="comforter text-black text-[3rem] text-center lg:text-left">
              Paris Roque Scarf
            </p>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">CREATOR</p>
                <p className="text-black">Michael Irabor</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">YEAR</p>
                <p className="text-black">2025</p>
              </div>
            </div>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">DIMENSIONS</p>
                <p className="text-black">80 x 80</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">MATERIAL</p>
                <p className="text-black">Satin</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <img
              className="w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px]"
              src="/images/scarf_three.png"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-start mt-20 flex-1 max-w-sm">
            <p className="text-black text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              adipisci, quasi dolores praesentium itaque cumque ad cum neque
              asperiores id exercitationem molestiae laborum enim deleniti
              facilis explicabo magnam eligendi velit.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-8 mt-20 ">
          <div className="flex flex-row gap-5">
            <button className="primary-btn">ADD TO CART</button>
            <button className="alt-btn">PURCHASE</button>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-black text-xl">$490</p>
            <img src="/images/stars.png" alt="" width={130} height={130} />
          </div>
        </div>
      </div>

      <div className="block xl:hidden px-6 py-15">
        <div className="flex flex-col items-center">
          <button
            className="blank-btn p-0 m-0"
            onClick={() => router.push("/Shop")}
          >
            <div className="flex items-center gap-1 p-0 m-0 -mx-6">
              <CaretLeft weight="bold" /> Back to Shop
            </div>
          </button>
          <p className="comforter text-black text-[2rem] text-center">
            Paris Roque Scarf
          </p>
          <img
            className="w-[300px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px] -mt-10"
            src="/images/scarf_three.png"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-10 items-end -mt-5">
          <div>
            <p className="text-lg text-black font-bold">$490</p>

            <div>
              <p className="text-black text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                consectetur nobis modi architecto? Beatae libero in autem error
                quae iusto assumenda ipsam possimus ratione iure fugit dicta,
                porro eligendi obcaecati.
              </p>
            </div>

            {/* <div>
              <div className="flex flex-row gap-20 mt-10">
                <div className="flex flex-col">
                  <p className="text-charcoal">CREATOR</p>
                  <p className="text-black">Michael Irabor</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-charcoal">YEAR</p>
                  <p className="text-black">2025</p>
                </div>
              </div>

              <div className="flex flex-row gap-20 mt-5">
                <div className="flex flex-col">
                  <p className="text-charcoal">DIMENSIONS</p>
                  <p className="text-black">80 x 80</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-charcoal">MATERIAL</p>
                  <p className="text-black">Satin</p>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <button className="blank-btn px-5">
              {" "}
              <ArrowCircleRight size={18} />
              {/* <ArrowCircleLeft size={18} /> */}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <img src="/images/stars.png" alt="" width={100} height={100} />
        </div>

        <div className="flex flex-col gap-2 w-full mt-5">
          <button className="primary-btn h-15">ADD TO CART</button>
          <button className="alt-btn h-15">PURCHASE</button>
        </div>
      </div>

      <div className="hidden xl:flex justify-end px-8 mt-5">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          CART ( 0 )
        </button>
      </div>

      <div className="xl:hidden fixed bottom-0 left-1/2 -translate-x-1/2">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          CART ( 0 )
        </button>
      </div>

      {/* <CartIndicator /> */}
    </div>
  );
}
