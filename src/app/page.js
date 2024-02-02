
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";
import Image from "next/image";


export default function Home() {
  return (
    <>
      
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeader SubHeader={'Our Story'} MainHeader={'About us'}/>
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare velit quis ipsum congue fermentum. Vivamus nec imperdiet dolor. Ut et placerat magna. 
          </p>
          <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare velit quis ipsum congue fermentum. Vivamus nec imperdiet dolor. Ut et placerat magna. 
          </p>
          <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare velit quis ipsum congue 
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeader SubHeader={'Don\'t hesitate'} MainHeader={'Contact us'}/>
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+6600000000000">+66 000 0000 0000</a>
        </div>
      </section>
      
    </>
  );
}
