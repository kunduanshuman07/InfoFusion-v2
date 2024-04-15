'use client'

import { useEffect, useState } from "react"
import { FaArtstation } from "react-icons/fa";
import { updatePassword } from "../apis/updatePassword";
import ErrorToast from "../components/ErrorToast";
import { GoDotFill } from "react-icons/go";

const ForgotPassword = () => {
    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [cpassword, setCPassword] = useState<any>();
    const [errorMessage, setErrorMessage] = useState<any>();
    const [buttonloading, setButtonLoading] = useState<any>(false);
    const handlePasswordUpdate = async () => {
        setButtonLoading(true);
        setErrorMessage(null);
        const resp = await updatePassword({ userId: email, newPassword: password });
        if (resp.data.message === 'Error updating password !') {
            setErrorMessage('Error Updating Password');
            setButtonLoading(false);
        }
        else {
            setErrorMessage('Password Updated Successfully !');
            setButtonLoading(false);
            setEmail('');
            setPassword('');
            setCPassword('');
        }
    }
    return (
        <div className='w-full p-2 flex sm:flex-row flex-col sm:mt-20 mt-2'>
            {errorMessage && <ErrorToast text={errorMessage} type={errorMessage === 'Password Updated Successfully !' ? true : false} />}
            <div className='sm:w-1/3 w-full flex flex-col items-center'>
                <FaArtstation className="mx-auto text-cyan-600" />
                <h1 className="mx-auto text-xl text-cyan-600 font-bold">InfoFusion</h1>
                <div className="flex mt-4">
                    <GoDotFill className="my-auto mr-1" />
                    <p className=" text-xs text-cyan-800">Your password should not be common</p>
                </div>
                <div className="flex mt-2">
                    <GoDotFill className="my-auto mr-1" />
                    <p className=" text-xs text-cyan-800">It should consist a minimum of 6 letters</p>
                </div>
                <div className="flex mt-2">
                    <GoDotFill className="my-auto mr-1" />
                    <p className=" text-xs text-cyan-800">It should contain an Uppercase letter</p>
                </div>
                <div className="flex mt-2">
                    <GoDotFill className="my-auto mr-1" />
                    <p className=" text-xs text-cyan-800">It should consist a Lowercase letter</p>
                </div>
                <div className="flex mt-2">
                    <GoDotFill className="my-auto mr-1" />
                    <p className=" text-xs text-cyan-800">It should have a number and a special character</p>
                </div>
            </div>
            <div className='sm:w-2/3 w-full flex flex-col items-center shadow-md p-4 rounded-lg'>
                <input className="input input-sm input-bordered sm:mt-10 mt-6  text-xs w-1/2" value={email} type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                <input className="input input-sm input-bordered mt-4  text-xs w-1/2" value={password} type="password" placeholder="Enter New Password" onChange={(e) => setPassword(e.target.value)} />
                <input className="input input-sm input-bordered mt-4 text-xs w-1/2" value={cpassword} type='text' placeholder="ConfirmPassword" onChange={(e) => setCPassword(e.target.value)} />
                <button className="btn btn-sm mt-4 bg-cyan-600 hover:bg-cyan-500 text-white" onClick={handlePasswordUpdate} disabled={buttonloading || !email || !password || !cpassword || password !== cpassword}>Update Password {buttonloading ? <span className="loading loading-spinner loading-xs"></span> : ''}</button>
                <a href="/login" className="mt-2 text-xs text-cyan-400 font-bold">Login</a>
            </div>
        </div>
    )
}

export default ForgotPassword