'use client'
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import DeleteAccount from "./DeleteAccount";
import { deleteAccount } from "../apis/deleteAccount";
import { useRouter } from "next/navigation";
interface ProfileProps {
  user: any;
  errorMessage: any;
  setErrorMessage: (errorMessage: any) => void;
}
const ProfileComp: React.FC<ProfileProps> = ({ user, errorMessage, setErrorMessage }) => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const [updateModal, setUpdateModal] = useState<any>(false);
  const handleDeleteAcc = async () => {
    setErrorMessage(null);
    const { status, data } = await deleteAccount({ userId: user?.id });
    if (data?.message === 'Error deleting account !') {
      setErrorMessage('Error deleting account !');
    }
    else {
      router.push('/login');
    }
  }
  return (
    <div className="sm:w-1/3 w-full shadow-md p-2 rounded-lg sm:mt-0 mt-4 flex flex-col items-center">
      <div className="bg-cyan-600 text-neutral-content rounded-full w-12 flex items-center">
        <h1 className="text-xl p-2 m-auto">{user?.username[0]}</h1>
      </div>
      <h1 className="text-sm font-bold mt-2">{user?.username}</h1>
      <h1 className="text-xs mt-1">{user?.email}</h1>
      <a className="btn bg-cyan-50 mt-2 text-cyan-800 hover:bg-cyan-50 btn-sm px-10" href="/profile">Profile</a>
      <div className="mt-2 flex flex-col w-full" style={{ borderTop: "5px solid #94a3b8" }}>
        <h1 className="font-bold text-sm mt-2 flex text-slate-500"><GoDotFill className="my-auto mr-2 text-error" /> Skills</h1>
        <div className="grid grid-cols-3 flex flex-col py-1 px-2">
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">React Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">Node Js</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">Express Js</h1>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="font-bold text-sm mt-2 flex text-slate-500"><GoDotFill className="my-auto mr-2 text-info" />Community Stats</h1>
          <div className="grid grid-cols-2 gap-5 mt-2">
            <a className="btn btn-xs mt-1 text-xs btn-primary">Likes 40</a>
            <a className="btn btn-xs mt-1 text-xs btn-accent text-white">Comments 50</a>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="collapse collapse-arrow shadow-md rounded-lg">
            <input type="checkbox" />
            <h1 className="collapse-title mt-auto mb-auto text-sm">More on Quizzes</h1>
            <div className="collapse-content flex flex-col">
              <a href="/scorecards" className="text-[#38bdf8] text-xs font-bold hover:underline mt-2">Scorecards</a>
              <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-1">Weightage System</a>
            </div>
          </div>
          <div className="collapse collapse-arrow shadow-md rounded-lg mt-4">
            <input type="checkbox" />
            <h1 className="collapse-title text-sm flex flex-row">Account Settings</h1>
            <div className="collapse-content flex flex-col">
              <a href="/password" className="text-[#0891b2] text-xs font-bold hover:underline mt-2">Change Password</a>
              <a className="text-[#dc2626] text-xs font-bold hover:underline mt-1 cursor-pointer" onClick={() => setDeleteModal(true)}>Delete Account</a>
            </div>
          </div>
        </div>
      </div>
      {deleteModal && <DeleteAccount errorMessage={errorMessage} modalOpen={deleteModal} setModalOpen={setDeleteModal} actFunc={handleDeleteAcc} setErrorMessage={setErrorMessage}/>}
    </div>
  )
}

export default ProfileComp