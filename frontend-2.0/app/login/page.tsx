'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArtstation } from "react-icons/fa"
import ErrorToast from "../components/ErrorToast";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>(false);
  const [loginError, setLoginError] = useState<any>('');
  const handleLogin = async () => {
    setLoginError(false);
    setLoading(true);
    const resp = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    })
    if (resp?.ok) {
      router.push('/quizzes');
    }
    else {
      setLoginError(true);
      setLoading(false);
    }
  }
  return (
    <div className='flex flex-row w-full'>
      <div className='flex flex-col sm:w-1/3 w-full mt-2 p-4 sm:mx-5 mx-auto' >
        {loginError && <ErrorToast text={"Invalid Credentials ! Please try again."} />}
        <h1 className="text-2xl text-cyan-700">Welcome Back</h1>
        <h1 className="text-xs mt-2">Sign in to your account.</h1>
        <h1 className="text-xs ml-1 mt-10">Email</h1>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="someone@gmail.com" type="text" onChange={(e) => setEmail(e.target.value)} />
        <div className="flex ml-1 mt-4">
          <h1 className="text-xs">Password</h1>
          <a className="ml-auto text-xs" href="">Forgot Password?</a>
        </div>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="●●●●●●●●" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn bg-cyan-600 text-white mt-6 btn-sm" disabled={loading} onClick={handleLogin}>Sign In {loading && <span className="loading loading-dots loading-sm loading-white"></span>}</button>
        <a href="/register" className="text-xs m-auto mt-10">{`Don't have an account?`}<span className="ml-1 underline">Sign Up Now</span></a>
        <p className="text-xs mt-10 mx-auto test-slate-300">{`By continuing, you agree to InfoFusion's Terms of Service and Privacy Policy, and to receive periodic emails with updates.`}</p>
      </div>
      <div className='w-2/3 flex flex-col hidden sm:block'>
        <div className="flex flex-col mx-auto mt-20 items-center">
          <FaArtstation className="text-6xl text-cyan-600" />
          <h1 className="mx-auto mt-5 text-xl font-bold text-cyan-600">Create your own standards of being a developer.</h1>
          <ul className="steps mt-10">
            <li className="step text-sm text-cyan-600 font-bold" data-content="">Quiz</li>
            <li className="step text-sm text-cyan-600 font-bold" data-content="">Learn</li>
            <li className="step text-sm text-cyan-600 font-bold" data-content="">Track</li>
            <li className="step text-sm text-cyan-600 font-bold" data-content="">Contribute</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login