'use client'

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { FaArtstation } from "react-icons/fa"
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { registerUser } from "../apis/registerUser";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [cpassword, setCPassword] = useState<any>('');
  const [username, setUsername] = useState<any>('');
  const { data } = useSession();
  const { setUser } = useUser();
  const router = useRouter();
  const handleRegister = async () => {
    setLoading(true);
    if (cpassword !== password) {

    }
    else {
      const userResp = await registerUser({email, password, username});
      const resp = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      })
      if (resp?.ok) {
        setUser(userResp?.data?.user);
        router.push('/contests');
      }
    }

  }
  return (
    <div className={`flex flex-col p-4 sm:shadow-md sm:border rounded-lg mx-auto my-10 sm:w-1/3 w-full`}>
      <FaArtstation className="m-auto text-cyan-600" />
      <h1 className="m-auto text-xl text-cyan-600 font-bold">InfoFusion</h1>
      <input className="input input-sm input-bordered mt-4 text-xs" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="input input-sm input-bordered mt-4 text-xs" type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input className="input input-sm input-bordered mt-4 text-xs" type='text' placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} />
      <input className="input input-sm input-bordered mt-4 text-xs" type='text' placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <button className="btn btn-sm mt-4 bg-cyan-600 hover:bg-cyan-500 text-white" onClick={handleRegister} disabled={loading}>Sign Up {loading ? <span className="loading loading-spinner loading-xs"></span>: ''}</button>
      <div className="flex flex-row mt-4">
        <a href="/login" className="text-xs text-cyan-500 mx-auto">Sign In</a>
      </div>
    </div>
  )
}

export default Register