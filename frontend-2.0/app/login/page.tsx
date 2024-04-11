'use client'

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { FaArtstation } from "react-icons/fa"
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { fetchUser } from "../apis/fetchUser";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const {data} = useSession();
  const {setUser} = useUser();
  const router = useRouter();
  const handleLogin = async () => {
    setLoading(true);
    const resp = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    })
    if(resp?.ok){
      const userResp = await fetchUser({userId: data?.user?.email});
      setUser(userResp?.data?.user);
      router.push('/contests');
    }
  }
  return (
    <div className={`flex flex-col p-4 sm:shadow-md sm:border rounded-lg mx-auto my-10 sm:w-1/3 `}>
      <FaArtstation className="m-auto text-cyan-600" />
      <h1 className="m-auto text-xl text-cyan-600 font-bold">InfoFusion</h1>
      <input className="input input-sm input-bordered mt-4 text-xs" type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input className="input input-sm input-bordered mt-4 text-xs" type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button className="btn btn-sm mt-4 bg-cyan-600 hover:bg-cyan-500 text-white" onClick={handleLogin} disabled={loading}>Sign In {loading ? <span className="loading loading-spinner loading-xs"></span>: ''}</button>
      <div className="flex flex-row mt-4">
        <a href="" className="text-xs text-cyan-500 mr-10">Forgot Password?</a>
        <a href="/register" className="text-xs text-cyan-500 ml-auto">Sign Up</a>
      </div>
    </div>
  )
}

export default Login