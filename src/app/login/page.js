"use client"
import Image from "next/image";
import { useState } from "react";
import {signIn} from "next-auth/react";

export default function LoginPage(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loginProgress , setLoginProgress ] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setLoginProgress(true)

        // const response = await fetch('/api/login', {
        //     body: JSON.stringify({email, password}),
        //     headers: {'Content-Type': 'application/json'},
        //     method: 'POST',
        // })
        // if(response.ok){

        // }else{

        // }

        signIn('credentials', {email, password, callbackUrl: '/'})
        setLoginProgress(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4 font-semibold">
                Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loginProgress}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loginProgress}
                />
                <button type="submit" disabled={loginProgress}>Login</button>
                <div className="my-4 text-center text-gray-500">
                or login with provider
                </div>
                <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})} className="flex items-center gap-4 justify-center">
                <Image src={"/google.png"} width={24} height={24} />
                Login with google
                </button>
            </form>
        </section>
    )
}