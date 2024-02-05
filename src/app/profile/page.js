'use client'
import { useSession } from "next-auth/react"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from "@/components/layout/UserTabs"

export default function ProfilePage(){
    const session = useSession()
    const [userName , setUserName] = useState("")
    const [phone , setPhone] = useState("")
    const [streetAddress , setStreetAddress] = useState("")
    const [postalCode , setPostalCode] = useState("")
    const [city , setCity] = useState("")
    const [country , setCountry] = useState("")
    const [admin , Isadmin] = useState(false)
    const [profileFetch, IsProfileFetch ]=useState(false)
    const {status} = session;
    const userImage = session?.data?.user?.image;

    useEffect(() => {
        if (status === 'authenticated'){
            setUserName(session?.data?.user?.name)
            fetch('/api/profile')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPhone(data.phone)
                setStreetAddress(data.streetAddress)
                setPostalCode(data.postalCode)
                setCity(data.city)
                setCountry(data.country)
                Isadmin(data.admin)
                IsProfileFetch(true)
            })
        }
    },[session,status])

    if (status === 'loading' || !profileFetch){
        return 'Loading...'
    }

    if (status === 'unauthenticated'){
        return redirect('/login')
    }

    async function handleProfileInfoUpdate(e) {
        e.preventDefault();

        const savingPromise = new Promise (async (resolve, reject) => {
            const response  = await fetch('/api/profile', {
                method: "PUT",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({
                    name: userName,
                    streetAddress,
                    phone,
                    city,
                    postalCode,
                    country
                })
            })
            
            if (response.ok){
                resolve()
            }else{
                reject()
            }
            
        })

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error'
        })
    }

    return(
        <section className="mt-8">
            <UserTabs Isadmin={admin}/>
            <div className="max-w-md mx-auto mt-4">
                <div className="flex gap-2">
                    <div>
                        <div className="p-4 rounded-lg relative">
                            <Image className="rounded-lg w-full h-full mb-1" src={userImage} width={300} height={300} alt='avatar'/>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <label>Fistname Lastname</label>
                        <input type="text" placeholder="First and last name" value={userName} onChange={(ev) => setUserName(ev.target.value)}/>
                        <label>Email</label>
                        <input type="email" disabled={true} value={session?.data?.user?.email}/>
                        <label>Phone number</label>
                        <input type="tel" placeholder="Phone number" value={phone} onChange={(ev) => setPhone(ev.target.value)}/>
                        <label>Address</label>
                        <input type="text" placeholder="Street address" value={streetAddress} onChange={(ev) => setStreetAddress(ev.target.value)}/>
                        <div className="flex gap-x-4">
                            <div>
                                <label>City</label>
                                <input  type="text" placeholder="City" value={city} onChange={(ev) => setCity(ev.target.value)}/>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input  type="text" placeholder="Postal Code" value={postalCode} onChange={(ev) => setPostalCode(ev.target.value)}/>
                            </div>
                        </div>
                        <label>Country</label>
                        <input type="text" placeholder="Country" value={country} onChange={(ev) => setCountry(ev.target.value)}/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    )
}