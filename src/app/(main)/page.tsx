import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import TopicsTab from "../components/TopicsTab/TopicsTab";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="2xl:w-[1600px] w-[100%] mx-auto flex">
      <TopicsTab />
      <section className="relative w-[100%] z-0">
         <section
          className="flex flex-col items-center min-h-[100px] h-[95vh] z-[-100] relative w-[100%] mt-[47px] pt-[13rem] md:min-h-[1000px]"
        >
          <Image
            src="/images/iron_title.svg" 
            alt="main title image"
            width={400} 
            height={400} 
            priority 
            className="w-max-[400px] max-h-[400px] xl:w-[30%] lg:w-[35%] w-[40%] fadeInLeft"
          />

          <h1 className="lg:text-[6.5rem] lg:m-[5rem] md:text-[4rem] sm:text-[3rem] text-[2.2rem] font-[700] mt-[5rem] mb-[2.5rem] dark:text-white text-black" data-testid="home-title">
            IronCodeMan
          </h1>
          <h1 className="fadeInLeft sm:text-[2rem]">A Reference for Programmers</h1>
          <h1 className="fadeInLeft sm:text-[1.5rem]">Select topic or language</h1>
        </section>
      </section>
    </main>
    </>
  );
}
