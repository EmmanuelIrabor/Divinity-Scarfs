"use client";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ui/ShopNow";
export default function contact() {
  return (
    <div
      className="min-h-screen w-full"
      data-barba="container"
      data-barba-namespace="contact"
    >
      <Navbar />

      <div>
        <h1 className="text-center font-bold text-black  mid-text pt-0 mt-20 xl:mt-20">
          CONTACT US
        </h1>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <div className="flex flex-row gap-5 xl:gap-20">
          <div>
            <div className="mt-2">
              <p className="text-black text-xs xl:text-lg">+00(0)000000</p>
              <p className="text-black text-xs xl:text-lg mt-2">
                contact@divinityscarf.com
              </p>
            </div>
          </div>

          <div>
            <div className="mt-2">
              <p className="text-black text-xs xl:text-lg">
                Divinityscarf@instagram.com
              </p>
              <p className="text-black text-xs xl:text-lg mt-2">
                Divinityscarf@x.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 xl:mt-35">
        <ShopNow />
      </div>
    </div>
  );
}
