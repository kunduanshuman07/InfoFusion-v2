'use client'
import { FaArtstation } from "react-icons/fa"
import { FaIntercom } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaBlogSolid } from "react-icons/lia";
import { TbCategoryPlus } from "react-icons/tb";
import { useEffect, useState } from "react";
const UserLayout = () => {
    const [isActive, setIsactive] = useState<any>('Home');
    useEffect(() => {
        const currentPath = window.location.pathname;
        setIsactive(currentPath === '/contests' ? 'Contest' : currentPath === '/categories' ? 'Categories' : currentPath === '/learn' ? 'Learn' : currentPath === '/dashboard' ? 'Dashboard' : currentPath === '/profile' ? 'Profile' : 'Home')
        console.log(currentPath);
    }, [])
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-0">
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-sm text-[#0891b2] font-bold cursor-pointer"><FaArtstation className="ml-auto" /></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal text-xs">
                            <li><a className={`${isActive === 'Contest' ? 'active' : ''}`} href="/contests">Contests</a></li>
                            <li><a className={`${isActive === 'Categories' ? 'active' : ''}`} href="/categories">Categories</a></li>
                            <li><a className={`${isActive === 'Learn' ? 'active' : ''}`} href="/learn">Learn</a></li>
                            <li><a className={`${isActive === 'Dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</a></li>
                            <li><a className={`${isActive === 'Profile' ? 'active' : ''}`} href="/profile">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40 min-h-full bg-base-200">
                    <li><a className={`${isActive === 'Contest' ? 'active mt-3' : ' mt-3'}`} href="/contests"><FaIntercom/> Contests</a></li>
                    <li><a className={`${isActive === 'Categories' ? 'active mt-3' : ' mt-3'}`} href="/categories"><TbCategoryPlus/> Categories</a></li>
                    <li><a className={`${isActive === 'Learn' ? 'active mt-3' : ' mt-3'}`} href="/learn"><LiaBlogSolid/> Learn</a></li>
                    <li><a className={`${isActive === 'Dashboard' ? 'active mt-3' : ' mt-3'}`} href="/dashboard"><MdDashboard/> Dashboard</a></li>
                    <li><a className={`${isActive === 'Profile' ? 'active mt-3' : ' mt-3'}`} href="/profile"><CgProfile/> Profile</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserLayout