'use client'
import { FaArtstation } from "react-icons/fa";
import Image from "next/image";
import NameSvg from "../assets-svgs/NameSvg.svg";
import PasswordSvg from "../assets-svgs/PasswordSvg.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
const Login = () => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const router = useRouter();
    const [loading, setLoading] = useState<any>(false);
    const [username, setUsername] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [loginError, setLoginError] = useState<any>('');
    const handleLogin = async () => {
        setLoading(true);
        const res = await signIn("credentials", {
            email: username,
            password: password,
            redirect: false,
        })
        if (!res?.ok) {
            setLoading(false);
            setLoginError('Invalid Credentials. Please try again!')
        }
        else {
            router.push('/quiz')
        }
    }
    return (
        <div className='grid grid-cols-1 p-5'>
            {loginError !== '' &&
                screenWidth > 1000 ?
                <div role="alert" className="alert alert-error w-1/3 m-auto mt-2 flex flex-row">
                    <span className="text-white font-bold mx-auto">{loginError} !</span>
                </div>
                :
                loginError !== '' &&
                <div className="toast toast-top toast-center">
                    <div className="alert alert-error">
                        <span className="text-xs text-white">Check your credentials and try again.</span>
                    </div>
                </div>
            }
            {screenWidth > 1000 ?
                <div className="shadow-md flex flex-col w-1/3 mx-auto rounded-lg bg-[#0e7490] mt-10 p-10">
                    <h1 className="text-2xl font-bold text-white flex flex-row m-auto" ><FaArtstation className='my-auto mr-2' /> InfoFusion</h1>
                    <label className="input input-bordered flex items-center gap-2 mt-20">
                        <Image src={NameSvg} alt="Username" />
                        <input type="text" className="grow input-sm" placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-5">
                        <Image src={PasswordSvg} alt="Password" />
                        <input type="text" className="grow input-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className="btn btn-white mx-auto pl-10 pr-10 mt-10" onClick={handleLogin}>Login {loading && <span className="loading loading-dots loading-md"></span>}</button>
                    <div className="flex flex-row mt-5">
                        <a className="text-xs text-white mt-2 cursor-pointer" href="/register">New to IF? <span className="underline font-bold">Register</span></a>
                        <a className="text-xs text-[#cffafe] font-bold mt-2 cursor-pointer ml-auto">Forgot Password</a>
                    </div>
                </div>
                :
                <div className="shadow-md flex flex-col w-full m-auto rounded-lg bg-[#0e7490] p-10">
                    <h1 className="text-2xl font-bold text-white flex flex-row m-auto" ><FaArtstation className='my-auto mr-2' /> InfoFusion</h1>
                    <label className="input input-bordered flex items-center gap-2 mt-20">
                        <Image src={NameSvg} alt="Username" />
                        <input type="text" className="grow input-sm" placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-5">
                        <Image src={PasswordSvg} alt="Password" />
                        <input type="text" className="grow input-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className="btn btn-white mx-auto pl-10 pr-10 mt-10" onClick={handleLogin}>Login {loading && <span className="loading loading-dots loading-md"></span>}</button>
                    <div className="flex flex-row mt-5">
                        <a className="text-xs text-white mt-2 cursor-pointer" href="/register">New to IF? <span className="underline font-bold">Register</span></a>
                        <a className="text-xs text-[#cffafe] font-bold mt-2 cursor-pointer ml-auto">Forgot Password</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login