'use client'

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaArtstation } from "react-icons/fa"
import { useRouter } from "next/navigation";
import { registerUser } from "../apis/registerUser";
import ErrorToast from "../components/ErrorToast";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [cpassword, setCPassword] = useState<any>('');
  const [username, setUsername] = useState<any>('');
  const [errorMessage, setErrorMessage] = useState<any>();
  const router = useRouter();
  const handleRegister = async () => {
    setLoading(true);
    setErrorMessage(null);
    if (cpassword !== password) {
      setErrorMessage('Password mismatch !');
      setLoading(false);
    }
    else {
      const userResp = await registerUser({ email, password, username });
      if (userResp.data.message === "Uniqueness") {
        setErrorMessage('Duplicate Email or Username !');
        setLoading(false);
      }
      else {
        const resp = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        })
        if (resp?.ok) {
          router.push('/quizzes');
        }
      }

    }

  }
  return (
    <div className='flex flex-row w-full'>
      <div className='flex flex-col sm:w-1/3 w-full p-4 sm:mx-5 mx-auto' >
        {errorMessage && <ErrorToast text={errorMessage} />}
        <h1 className="text-2xl text-cyan-700">Welcome !</h1>
        <h1 className="text-xs mt-2">Register your account.</h1>
        <h1 className="text-xs ml-1 mt-5">Email</h1>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="someone@gmail.com" type="text" onChange={(e) => setEmail(e.target.value)} />
        <h1 className="text-xs ml-1 mt-2">Password</h1>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="●●●●●●●●" type="password" onChange={(e) => setPassword(e.target.value)} />
        <h1 className="text-xs ml-1 mt-2">Confirm Password</h1>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="Re-enter your password" type="text" onChange={(e) => setCPassword(e.target.value)} />
        <h1 className="text-xs ml-1 mt-2">Username</h1>
        <input className="input input-sm input-bordered mt-2 text-xs" placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} />
        <button className="btn bg-cyan-700 text-white mt-6 btn-sm" disabled={loading} onClick={handleRegister}>Sign In {loading && <span className="loading loading-dots loading-sm loading-white"></span>}</button>
        <a href="login" className="text-xs m-auto mt-2">{`Already have an account?`}<span className="ml-1 underline">Sign In Now</span></a>
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

export default Register