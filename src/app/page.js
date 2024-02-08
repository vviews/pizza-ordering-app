
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";


export default function Home() {
  return (
    <>
      
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaders SubHeader={'Our Story'} MainHeader={'About us'}/>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
          On our menu, imagination takes center stage. Feast your eyes on our latest pizza, pasta, salad, and dessert innovation
          </p>
          <p className="">
          {`Come to View's Pizza for the all-you-can eat experience or order now to bring the deliciousness home.`}
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders SubHeader={'Don\'t hesitate'} MainHeader={'Contact us'}/>
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+6600000000000">+66 000 0000 0000</a>
        </div>
      </section>
      
    </>
  );
}
