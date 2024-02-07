import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything <br/> is better <br/> with a&nbsp;
                    <span className="text-primary ">
                        Pizza
                    </span> 
                </h1>
                <p className="my-6 text-gray-500 twxt-sm">
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in your life
                </p>
                <div className="flex gap-4 text-sm ">
                    <Link href={'/menu'} className="w-full bg-primary uppercase text-white px-4 py-2 rounded-full flex gap-2 items-center justify-center">
                        Order now
                        <Right/>
                    </Link>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold border-0">
                        Learn more
                        <Right/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza-hero.png'} fill style={{objectFit:'contain'}} alt="pizza"/>

            </div>
        </section>
    )
}