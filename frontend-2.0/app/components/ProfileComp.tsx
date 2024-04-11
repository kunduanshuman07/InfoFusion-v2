'use client'
import { GoDotFill } from "react-icons/go";
interface ProfileProps {
  user: any;
}
const ProfileComp: React.FC<ProfileProps> = ({ user }) => {

  return (
    <div className="sm:w-1/3 w-full shadow-md p-2 rounded-lg sm:mt-0 mt-4 flex flex-col items-center">
      <div className="avatar placeholder">
        <div className="bg-cyan-600 text-neutral-content rounded-full w-12">
          <span className="text-xl">D</span>
        </div>
      </div>
      <h1 className="text-sm font-bold mt-2">{user?.username}</h1>
      <h1 className="text-xs mt-1">{user?.email}</h1>
      <button className="btn bg-cyan-50 mt-2 text-cyan-800 hover:bg-cyan-50 btn-sm px-10">Edit Profile</button>
      <div className="mt-2 flex flex-col w-full" style={{borderTop: "5px solid #94a3b8"}}>
        <h1 className="font-bold text-sm mt-2">Skills</h1>
        <h1 className="font-bold text-xs mt-4 flex flex-row"><GoDotFill className="my-auto mr-2 text-error"/>Advanced</h1>
        <div className="grid grid-cols-3 flex flex-col py-1 px-2">
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
        </div>
        <h1 className="font-bold text-xs mt-4 flex flex-row"><GoDotFill className="my-auto mr-2 text-warning"/>Intermediate</h1>
        <div className="grid grid-cols-3 flex flex-col py-1 px-2">
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
        </div>
        <h1 className="font-bold text-xs mt-4 flex flex-row"><GoDotFill className="my-auto mr-2 text-info"/>Fundamental</h1>
        <div className="grid grid-cols-3 flex flex-col py-1 px-2">
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileComp