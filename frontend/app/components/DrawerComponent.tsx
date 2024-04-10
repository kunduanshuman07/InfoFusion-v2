'use client'
import { MdQuiz } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { GiRamProfile } from "react-icons/gi";
const DrawerComponent = () => {
    const router = useRouter();
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const handleLogout = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        router.push('/');
    }
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn text-[#0891b2] bg-white border-none hover:bg-[#e0f2fe] drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content">
                    <li className=" text-md mt-3"><a href='/quiz'><MdQuiz className="mr-3" /> Quiz</a></li>
                    <li className=" text-md mt-3"><a href='/dashboard'><MdDashboard className="mr-3" /> Dashboard</a></li>
                    <li className=" text-md mt-3"><a href='/leaderboard'><MdLeaderboard className="mr-3" /> Leaderboard</a></li>
                    <li className=" text-md mt-3"><a href='/dashboard/scorecards'><FaSheetPlastic className="mr-3" /> Scorecards</a></li>
                    {screenWidth<1000 && <li className=" text-md mt-3"><a href='/profile'><GiRamProfile className="mr-3" /> Profile</a></li>}
                    <li className=" text-md mt-auto"><a href='/'><MdSupportAgent className="mr-3" /> Support</a></li>
                    <li className=" text-md mt-4" onClick={handleLogout}><a><IoLogOut className="mr-3" /> Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerComponent