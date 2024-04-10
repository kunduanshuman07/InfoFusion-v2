'use client'
import { useState } from "react";
import { FaArtstation } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const AuthCompLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const router=useRouter()
    const handleLogin = async() => {
        setLoading(true);
        const res = await signIn("credentials", {
            email: email, 
            password: password,
            redirect: false,
        })
        console.log(res);
        if(!res?.ok){
            setLoading(false);
            setErrorMsg('Invalid Credentials. Please try again!')
        }
        else{
            router.push('/')
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg-base-200'>
            <div className='card w-96 bg-base-100 shadow-xl p-5'>
                <button className="btn bg-[#f8fafc] font-bold text-center text-[#0891b2] mt-5 hover:bg-[#f8fafc]">
                    <FaArtstation />
                    InfoFusion</button>
                <div className='card-body'>
                    <div className="p-2">
                        <label htmlFor="email" className="block text-black mb-2 my-2">Email *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full"
                            placeholder="Enter you email address"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="block text-black mb-2 my-5">Password *</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <h1 className="text-error font-bold text-center mt-2 text-xs">{errorMsg}</h1>
                    <button className='btn bg-[#0891b2] mt-2 text-white font-bold' onClick={handleLogin}>Login {loading&&<span className="loading loading-dots loading-md"></span>}</button>
                    <a href='/register' className='text-center underline text-xs font-bold mt-4'>New user? Register</a>
                </div>
            </div>
        </div>
    )
}

export default AuthCompLogin