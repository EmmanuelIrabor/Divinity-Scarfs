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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            necessitatibus illum ex officiis? Similique qui est cum fugit, iusto
            mollitia aliquam aspernatur eligendi perferendis ipsam, amet,
            laudantium rem inventore corporis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aliquam necessitatibus illum ex
            officiis? Similique qui est cum fugit, iusto mollitia aliquam
            aspernatur eligendi perferendis ipsam, amet, laudantium rem
            inventore corporis. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aliquam necessitatibus illum ex officiis?
            Similique qui est cum fugit, iusto mollitia aliquam aspernatur
            eligendi perferendis ipsam, amet, laudantium rem inventore corporis.
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
