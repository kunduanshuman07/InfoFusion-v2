'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaArtstation } from "react-icons/fa";
const UserLayout = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const handleSignout = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    }
    return (
        <div className={`drawer `}>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost hover:btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-cyan-900 inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-cyan-700 font-bold">
                        <a className="flex cursor-pointer" href="/home"><FaArtstation className="my-auto mr-2" /> InfoFusion</a>
                    </div>
                    <div className="flex-none hidden lg:block ">
                        <ul className="menu menu-horizontal text-xs text-cyan-700 bg-white">
                            <li className="text-cyan-700 font-bold"><a href="/quizzes">Quiz</a></li>
                            <li className="text-cyan-700 font-bold"><a href="/dashboard">Dashboard</a></li>
                            <li className="text-cyan-700 font-bold"><a href="/hackathons">Hackathons</a></li>
                            <li className="text-cyan-700 font-bold"><a href="/community">Community</a></li>
                            <li>
                                <ul className={`dropdown-menu ${session ? '' : 'hidden'}`}>
                                    <li className="relative group">
                                        <div className="flex flex-col">
                                            <span className="font-bold">Account</span>
                                            <ul className="submenu absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-6 py-2 px-2 w-28 mr-10">
                                                <li><a href="/profile" className="block text-xs text-cyan-700 font-bold hover:rounded-lg">Profile</a></li>
                                                <li><a onClick={handleSignout} className="block text-xs text-cyan-700 font-bold hover:rounded-lg">Sign Out</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-52 min-h-full bg-base-200">
                    <li className="mt-3 text-cyan-900 font-bold"><a href="/quizzes">Quiz</a></li>
                    <li className="mt-3 text-cyan-900 font-bold"><a href="/dashboard">Dashboard</a></li>
                    <li className="mt-3 text-cyan-900 font-bold"><a href="/hackathons">Hackathons</a></li>
                    <li className="mt-3 text-cyan-900 font-bold"><a href="/community">Community</a></li>
                    <li className="mt-3 text-cyan-900 font-bold"><a onClick={handleSignout}>Sign Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default UserLayout