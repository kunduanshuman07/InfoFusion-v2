'use client'
import { FaArtstation } from "react-icons/fa"
import { FaIntercom } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";
import NextBreadcrumb from "../components/NextBreadCrumb";
import { CgCommunity } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchUser } from "../apis/fetchUser";
const UserLayout = () => {
    const {data} = useSession();
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchUserData = async () => {
          const resp = await fetchUser({ userId: data?.user?.email });
          if (resp.status === 200) {
            setUser(resp.data.user);
          }
        }
        if (data != null) {
          fetchUserData();
        }
      }, [data])
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-0">
                <div className="w-full navbar" style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <NextBreadcrumb
                        homeElement={'InfoFusion'}
                        separator={<span> | </span>}
                        activeClasses='text-cyan-800 sm:text-sm text-xs m-auto'
                        containerClasses='flex py-2 bg-white'
                        listClasses='sm:text-sm text-xs hover:underline mx-2 font-bold m-auto'
                        capitalizeLinks
                    />
                    <a className="flex-1 px-2 mx-2 text-sm text-[#0891b2] font-bold cursor-pointer" href="/"><FaArtstation className="ml-auto" /></a>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal text-xs">
                            <li><a href="/quizzes">Quiz</a></li>
                            <li><a href="/learn">Learn</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/hackathons">Hackathons</a></li>
                            <li><a href="/community">Community</a></li>
                            {user?.role==='admin' && <li><a href="/admin"><RiAdminFill/> Admin</a></li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40 min-h-full bg-base-200">
                    <li><a className='mt-3' href="/quizzes"><FaIntercom /> Quiz</a></li>
                    <li><a className='mt-3' href="/learn"><LiaBlogSolid /> Learn</a></li>
                    <li><a className='mt-3' href="/dashboard"><MdDashboard /> Dashboard</a></li>
                    <li><a className='mt-3' href="/hackathons"><FaLaptopCode /> Hackathons</a></li>
                    <li><a className='mt-3' href="/community"><CgCommunity/> Community</a></li>
                    {user?.role==='admin' && <li><a className='mt-3' href="/admin"><RiAdminFill/> Admin</a></li>}
                </ul>
            </div>
        </div>
    )
}

export default UserLayout