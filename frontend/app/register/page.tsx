'use client'
import { FaArtstation } from "react-icons/fa";
import NameSvg from "../assets-svgs/NameSvg.svg";
import EmailSvg from "../assets-svgs/EmailSvg.svg";
import PasswordSvg from "../assets-svgs/PasswordSvg.svg";
import Image from "next/image";
import { useState } from "react";
import { registerUser } from "../server-actions/registerUser";
import { useRouter } from "next/navigation";
import { useLoading } from "../context/LoadingContext";
import { loginUser } from "../server-actions/loginUser";
const Register = () => {
    const router = useRouter();
    const {loading, startLoading, stopLoading} = useLoading();
    const [firstname, setFirstName]  = useState<any>();
    const [lastname, setLastname] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [username, setUsername] = useState<any>();
    const [password, setPassword] = useState<any>();
    const handleRegister = async() => {
        startLoading();
        const {status, data} = await registerUser({firstname, lastname, email, username, password});
        if(status===200){   
            await loginUser({username, password});
            router.push('/');
            stopLoading();
        }
    }
    return (
        <div className='grid grid-cols-1'>
            <div className="shadow-md flex flex-col w-1/3 mx-auto rounded-lg bg-[#0c4a6e] mt-10 px-10 py-20 pt-5 pb-5">
                <h1 className="text-2xl font-bold text-white flex flex-row m-auto" ><FaArtstation className='my-auto mr-2' /> InfoFusion</h1>
                <label className="input input-sm input-bordered flex items-center gap-2 mt-10">
                    <Image src={NameSvg} alt="FirstName" />
                    <input type="text" className="grow input-sm" placeholder="First Name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                </label>
                <label className="input input-sm input-bordered flex items-center gap-2 mt-5">
                    <Image src={NameSvg} alt="LastName" />
                    <input type="text" className="grow input-sm" placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                </label>
                <label className="input input-sm input-bordered flex items-center gap-2 mt-5">
                    <Image src={EmailSvg} alt="Email" />
                    <input type="text" className="grow input-sm" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label className="input input-sm input-bordered flex items-center gap-2 mt-5">
                    <Image src={NameSvg} alt="Username" />
                    <input type="text" className="grow input-sm" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </label>
                <label className="input input-sm input-bordered flex items-center gap-2 mt-5">
                    <Image src={PasswordSvg} alt="Password" />
                    <input type="text" className="grow input-sm" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button className="btn btn-white mx-auto pl-10 pr-10 mt-10" onClick={handleRegister}>Register {loading && <span className="loading loading-dots loading-md"></span>}</button>
                <div className="flex flex-row">
                    <a className="text-xs text-white mt-2 mx-auto cursor-pointer" href="/login">Existing User? <span className="underline font-bold">Login</span></a>
                </div>
            </div>
        </div>
    )
}

export default Register