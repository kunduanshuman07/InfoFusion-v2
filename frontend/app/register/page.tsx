'use client'
import React, { useState } from 'react'
import { FaArtstation } from "react-icons/fa";
import { registerUser } from '../server-actions/registerUser';
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react";
const AuthCompRegister = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [firstname, setfirstname] = useState<string>('');
    const [lastname, setlastname] = useState<string>('');
    const [username, setusername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const handleRegister = async () => {
        setLoading(true);
        const { status, data } = await registerUser({ firstname, lastname, email, username, password });
        if (status === 200) {
            const res = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false,
            })
            if (!res?.ok) {
                setLoading(false);
            }
            router.push('/quiz');
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-base-200'>
            <div className='card w-96 bg-base-100 shadow-xl p-5'>
                <button className="btn bg-[#f8fafc] font-bold text-center text-[#0891b2] hover:bg-[#f8fafc]">
                    <FaArtstation />
                    InfoFusion</button>
                <div className='card-body'>
                    <div className="p-2">
                        <label htmlFor="firstname" className="block text-black text-xs mb-1">First Name *</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-2 input-xs"
                            placeholder="First name"
                            required
                            value={firstname}
                            onChange={(e) => setfirstname(e.target.value)}
                        />
                        <label htmlFor="lastname" className="block text-black text-xs mb-1">Last Name *</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-2 input-xs"
                            placeholder="Last name"
                            required
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                        />
                        <label htmlFor="email" className="block text-black text-xs mb-1">Email *</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-2 input-xs"
                            placeholder="Enter you email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="username" className="block text-black text-xs mb-1">Username *</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-2 input-xs"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                        <label htmlFor="password" className="block text-black text-xs mb-1">Create new Password *</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="grow border border-gray-600 rounded py-2 px-3 w-full mb-2 input-xs"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <button className='btn bg-[#0891b2] mt-5 font-bold text-white' onClick={handleRegister}>Register {loading && <span className="loading loading-dots loading-md"></span>}</button>
                    <a href='/login' className='text-center underline text-xs font-bold mt-4'>Existing user? Login</a>
                </div>
            </div>
        </div>
    )
}

export default AuthCompRegister