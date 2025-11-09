import BackgroundTwo from "@/components/BackgroundTwo";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ui/ShopNow";

export default function More() {
  return (
    <>
      <BackgroundTwo />

      <div
        className="min-h-screen w-full"
        data-barba="container"
        data-barba-namespace="more"
      >
        {" "}
        <Navbar isDark />
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-0 lg:px-6 mt-25 gap-10">
          {/* Left Section */}
          <div className="flex flex-row lg:flex-col lg:items-start lg:w-1/3 flex-wrap gap-0 text-center lg:text-left">
            <button className="blank-btn--white underline">
              Privacy Policy
            </button>
            <button className="blank-btn--white">Terms & Conditions</button>
            <button className="blank-btn--white">Socials</button>
            <button className="blank-btn--white">News-Letter</button>
          </div>

          {/* Center Scarf Image */}
          <div className="w-full lg:w-1/3 flex justify-center order-3 lg:order-2 lg:-mt-10">
            <img
              src="/images/scarf_one.png"
              alt=""
              width={200}
              height={200}
              className="mt-10 lg:mt-0"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 px-5 lg:px-0 text-center lg:text-right order-2 lg:order-3">
            <div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                nam optio modi pariatur beatae saepe fuga enim cupiditate.
                Explicabo hic adipisci deserunt dolore, earum nostrum nisi
                debitis soluta minima sed. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum nam optio modi.
              </p>
            </div>
            {/* <div>
              <p className="text-xs">Divinityscarf@instagram.com</p>
              <p className="text-xs">Divinityscarf@x.com</p>
            </div> */}

            {/* <div className="flex flex-col gap-2">
              <p className="text-xs text-left">
                Subscribe to News Letter to get the latest updates
              </p>
              <input
                className="border border-white outline-none px-3 py-2 mt-2"
                type="text"
                name=""
                id=""
                placeholder="EMAIL"
              />
              <button className="secondary-btn">SUBSCRIBE</button>
            </div> */}
          </div>
        </div>
        <div className="xl:fixed xl:bottom-0 xl:left-0 xl:right-0  xl:flex xl:justify-end">
          <ShopNow isDark />
        </div>
      </div>
    </>
  );
}
