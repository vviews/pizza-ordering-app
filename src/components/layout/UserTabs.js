import Link from "next/link";

export default function UserTabs({Isadmin}){
    return (
        <div className="flex gap-2 mx-auto justify-center tabs">
            <Link className="active" href={'/profile'}>Profile</Link>
            {Isadmin && (
                <>
                    <Link href={'/categories'}>Categories</Link>
                    <Link href={'/menu-items'}>Menu Items</Link>
                    <Link href={'/users'}>Users</Link>
                </>
            )}
        </div>
    )
}