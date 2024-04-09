'use client'
import { useState, useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Image from 'next/image'
import HomePageImage from "../assets-svgs/HomePageImg1.jpg";
import HomeCarousel from '../components/HomeCarousel';
import { BsAlignStart } from "react-icons/bs";
import { useSession } from 'next-auth/react';
import { fetchUser } from '../server-actions/fetchUser';
const Home = () => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [loggedin, setLoggedin] = useState<any>(false);
    const [getStarted, setGetstarted] = useState<any>('/');
    const { data } = useSession();
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
    useEffect(() => {
        if (user) {
            setLoggedin(true);
            setGetstarted('/quiz');
        }
        else {
            setGetstarted('/login');
        }
    }, [user])
    return (
        <div className='flex flex-col'>
            <HomeNavbar user={user} />
            {screenWidth > 800 ?
                <div className='grid grid-cols-2 w-full p-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col mb-4'>
                            <h1 className='text-5xl text-[#0891b2] ml-auto mr-auto font-bold'>InfoFusion</h1>
                            <p className='text-sm text-center text-[#06b6d4] mt-1'>Where Knowledge Meets Innovation in Tech Learning.</p>
                        </div>
                        <HomeCarousel />
                        <div className='m-auto mt-6'>
                            <ul className="steps text-white bg-[#ecfeff] p-2 rounded-lg shadow-md">
                                <li className="step text-[#0891b2] font-bold">Quiz</li>
                                <li className="step text-[#0891b2] font-bold">Blogs</li>
                                <li className="step text-[#0891b2] font-bold">Depth</li>
                                <li className="step text-[#0891b2] font-bold">Community</li>
                                <li className="step text-[#0891b2] font-bold">Learn</li>
                                <li className="step text-[#0891b2] font-bold">Excel</li>
                            </ul>
                        </div>
                        <a className='bg-[#06b6d4] btn text-white font-bold m-auto p-2 pl-8 pr-8 cursor-pointer rounded-lg mt-4 hover:bg-[#0891b2]' href={getStarted}>Get Started <BsAlignStart /></a>
                    </div>
                    <div className='flex'>
                        <Image src={HomePageImage} alt='InfoFusion' width={500} height={400} className='m-auto rounded-lg border border-[#06b6d4] border-5' />
                    </div>
                </div> :
                <div className='grid grid-cols-1 w-full p-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col mb-4'>
                            <h1 className='text-5xl text-[#0891b2] ml-auto mr-auto font-bold'>InfoFusion</h1>
                            <p className='text-sm text-center text-[#06b6d4] mt-1'>Where Knowledge Meets Innovation in Tech Learning.</p>
                        </div>
                        <div className='flex mb-2'>
                            <Image src={HomePageImage} alt='InfoFusion' width={200} height={200} className='m-auto rounded-lg border border-[#06b6d4] border-5' />
                        </div>
                        <HomeCarousel />
                        <div className='m-auto mt-6'>
                            <ul className="steps text-white bg-[#ecfeff] p-2 rounded-lg shadow-md">
                                <li className="step text-[#0891b2] font-bold text-xs">Quiz</li>
                                <li className="step text-[#0891b2] font-bold text-xs">Blogs</li>
                                <li className="step text-[#0891b2] font-bold text-xs">Depth</li>
                                <li className="step text-[#0891b2] font-bold text-xs">Community</li>
                                <li className="step text-[#0891b2] font-bold text-xs">Learn</li>
                                <li className="step text-[#0891b2] font-bold text-xs">Excel</li>
                            </ul>
                        </div>
                        <a className='bg-[#06b6d4] btn text-white font-bold m-auto p-2 pl-8 pr-8 cursor-pointer rounded-lg mt-4 hover:bg-[#0891b2]' href={getStarted}>Get Started <BsAlignStart /></a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home