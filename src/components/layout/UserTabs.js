"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({Isadmin}){
    const path = usePathname()
    return (
        <div className="flex gap-2 mx-auto justify-center tabs">
            <Link 
                className={path === '/profile' ? "active" : ""} 
                href={'/profile'
            }>
                Profile
                </Link>
            {Isadmin && (
                <>
                    <Link href={'/categories'} className={path === '/categories' ? "active" : ""} >Categories</Link>
                    <Link href={'/menu-items'} className={path === '/menu-items' ? "active" : ""} >Menu Items</Link>
                    <Link href={'/users'} className={path === '/users' ? "active" : ""}>Users</Link>
                </>
            )}
        </div>
    )
}