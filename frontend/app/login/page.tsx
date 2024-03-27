import { FaArtstation } from "react-icons/fa";

const Login = () => {
    return (
        <div className='grid grid-cols-1'>
            <div className="shadow-md flex flex-col w-1/3 mx-auto rounded-lg bg-[#0c4a6e] mt-10 p-10">
                <h1 className="text-2xl font-bold text-white flex flex-row m-auto" ><FaArtstation className='my-auto mr-2' /> InfoFusion</h1>
                <label className="input input-bordered flex items-center gap-2 mt-20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow input-sm" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                    <input type="text" className="grow input-sm" placeholder="Password" />
                </label>
                <button className="btn btn-white mx-auto pl-10 pr-10 mt-10">Login</button>
                <div className="flex flex-row mt-5">
                    <a className="text-xs text-white mt-2 cursor-pointer" href="/register">New to IF? <span className="underline font-bold">Register</span></a>
                    <a className="text-xs text-[#7dd3fc] font-bold mt-2 cursor-pointer ml-auto">Forgot Password</a>
                </div>
            </div>
        </div>
    )
}

export default Login