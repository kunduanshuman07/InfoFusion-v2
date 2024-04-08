'use client'
import { useState, useEffect } from "react";
import { FaArtstation } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { fetchUser } from "../server-actions/fetchUser";
import { useRouter } from "next/navigation";
const HomeNavbar = () => {
    const [loggedin, setLoggedin] = useState<any>(false);
    const [loading, setLoading] = useState<any>(true);
    const [user, setUser] = useState<any>();
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userString = window.localStorage.getItem("User");
            const user = userString ? JSON.parse(userString) : null;
            if (user != null) {
                setUser(user);
                setLoggedin(true);
                setLoading(false);
            }
            else {
                router.push('/login');
            }
        }
        else {
            router.push('/login');
        }
    }, [])
    return (
        <div className="navbar bg-base-100" style={{ maxHeight: "10px" }}>
            <div className="flex-1">
                <a className="ml-4 text-2xl text-[#0891b2]"><FaArtstation /></a>
            </div>
            <div className="flex-none">
                {loggedin ?
                    <h1 className="text-[#0891b2] font-bold">Hi, {user?.firstname}!</h1>
                    :
                    loading ?
                        <span className="loading loading-ring loading-md"></span>
                        :
                        <>
                            <a className='bg-[#0e7490] btn btn-sm text-white font-bold m-auto p-2 pl-8 pr-8 cursor-pointer rounded-lg hover:bg-[#06b6d4]' href="/login">Login <IoLogIn /></a>
                            <a className='bg-[#0e7490] btn btn-sm ml-5 text-white font-bold m-auto p-2 pl-8 pr-8 cursor-pointer rounded-lg hover:bg-[#06b6d4]' href="/register">Register <SiGnuprivacyguard /></a>
                        </>
                }
            </div>
        </div>
    )
}

export default HomeNavbar