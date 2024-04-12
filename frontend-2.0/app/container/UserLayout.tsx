'use client'
import { FaArtstation, FaSignInAlt } from "react-icons/fa"
import { FaIntercom } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const UserLayout = () => {
    const router = useRouter();
    const { data } = useSession();
    const handleSignout = async () => {
        await signOut();
        router.push('/login');
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-0">
                <div className="w-full navbar" style={{ borderBottom: "1px solid #e2e8f0" }}>
                    {data && <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>}
                    <a className="flex-1 px-2 mx-2 text-sm text-[#0891b2] font-bold cursor-pointer" href="/"><FaArtstation className="ml-auto" /></a>
                    {data ?
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-xs">
                                <li><a href="/contests">Quiz</a></li>
                                <li><a href="/learn">Learn</a></li>
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li><a onClick={handleSignout}><FaSignOutAlt />SignOut</a></li>
                            </ul>
                        </div>
                        :
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal text-xs">
                                <li><a href="/login"><FaSignInAlt />SignIn</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                {data ?
                    <ul className="menu p-4 w-40 min-h-full bg-base-200">
                        <li><a className='mt-3' href="/contests"><FaIntercom /> Quiz</a></li>
                        <li><a className='mt-3' href="/learn"><LiaBlogSolid /> Learn</a></li>
                        <li><a className='mt-3' href="/dashboard"><MdDashboard /> Dashboard</a></li>
                        <li><a className='mt-3' onClick={handleSignout}><FaSignOutAlt />SignOut</a></li>
                    </ul> :
                    <ul className="menu p-4 w-40 min-h-full bg-base-200">
                        <li><a className='mt-3' href="/login"><FaSignInAlt />SignIn</a></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default UserLayout