import Navbar from "@/components/Navbar";

import BackgroundAbout from "@/components/Background-About";

export default function About() {
  return (
    <>
      {/* <BackgroundAbout /> */}

      <div
        className="min-h-screen w-full"
        data-barba="container"
        data-barba-namespace="about"
      >
        <Navbar />

        <div className="mt-25 xl:mt-10">
          <h1 className="text-center text-black comforter text-[4rem] xl:text-[5rem]">
            Divinity Scarfs
          </h1>
          <p className="text-center text-xs text-black mt-5 px-5 xl:px-40">
            The Divinity Foulard Collection is a collectors piece where Fine
            Arts meets Craftsmanship. Can be worn as a chic neck scarf/tie, hair
            accessory, head tie band,handbag accessory, hat decoration, waist
            band The Foulard Collection features Neo pop styled Illustrations
            inspired by the Theme of Divinity and most importantly by the
            Artist’s__ Irabor Michael__ Experiences on visiting Rome Italy. Very
            inpired by the churches and Basiclia’s found in a historic city such
            as Rome, Italy. A masterpiece of Neo pop contemporary design and
            craftsmanship and to be cherished like a work of art.
          </p>
        </div>

        <div className="fixed bottom-20"></div>
        <div className="flex justify-center items-center px-8 mt-10">
          <img src="/images/crest.png" alt="" width={50} height={50} />
        </div>
      </div>
    </>
  );
}
