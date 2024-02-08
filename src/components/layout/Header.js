"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../AppContext";
import  ShoppingCart  from "@/components/icons/ShoppingCart"


export default function Header() {
    const session = useSession()
    const status = session.status;
    const userData = session?.data?.user;
    let userName = userData?.name || userData?.email;
    const {cartProducts} = useContext(CartContext)
    if (userName && userName.includes(" ")){
        userName = userName.split(" ")[0];
    }

    return (
        <header className="flex items-center justify-between">
            <nav className="flex gap-8 text-gray-500 font-semibold items-center">
                <Link className="text-primary font-semibold text-2xl" href="/">{`VIEW's PIZZA`}</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/contact-us'}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                { status === 'authenticated' && (
                    <>
                        <Link href={'/profile'} className="whitespace-nowrap">Hello, {userName}</Link>
                        <button
                        onClick={() => signOut()} 
                        className="bg-primary text-white px-8 py-2 rounded-full">
                            Logout
                        </button>
                    </>
                )}
                { status !== 'authenticated' && (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href={'/register'} className="bg-primary text-white px-8 py-2 rounded-full">Register</Link>
                    </>
                )

                }
                { cartProducts?.length > 0 && (
                    <Link href={'/cart'}
                    className="relative"
                    >
                        <ShoppingCart/>
                        <span className="absolute -top-2 -right-4 bg-primary text-white text-sm p-1 rounded-full leading-3">{cartProducts.length}</span>
                    </Link>
                )}
            </nav>
      </header>
    )
}