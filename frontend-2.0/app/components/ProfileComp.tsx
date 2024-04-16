'use client'
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import DeleteAccount from "./DeleteAccount";
import { deleteAccount } from "../apis/deleteAccount";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { signOut } from "next-auth/react";

interface ProfileProps {
  user: any;
  errorMessage: any;
  setErrorMessage: (errorMessage: any) => void;
}
const ProfileComp: React.FC<ProfileProps> = ({ user, errorMessage, setErrorMessage }) => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const handleSignout = async () => {
    setLoading(true);
    await signOut({ redirect: false });
    router.push('/login');
  }
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
      <div className="flex flex-row">
        <a className="btn bg-cyan-50 mt-2 text-cyan-800 hover:bg-cyan-50 btn-sm px-6 mr-2" href="/profile"><GiPlagueDoctorProfile /> Profile </a>
        <button className="btn bg-cyan-50 mt-2 text-cyan-800 hover:bg-cyan-50 btn-sm px6" onClick={handleSignout}>SignOut <FaSignOutAlt /> {loading && <span className="loading loading-spinner text-cyan-800"></span>}</button>
      </div>
      <div className="mt-2 flex flex-col w-full" style={{ borderTop: "5px solid #94a3b8" }}>
        <h1 className="font-bold text-sm mt-2 flex text-slate-500"><GoDotFill className="my-auto mr-2 text-error" /> Skills</h1>
        <div className="grid grid-cols-3 flex flex-col py-1 px-2">
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">{user?.skill_one}</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">{user?.skill_two}</h1>
          <h1 className="px-4 py-1 rounded-lg text-xs bg-slate-200 mr-auto mt-1">{user?.skill_three}</h1>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="font-bold text-sm mt-2 flex text-slate-500"><GoDotFill className="my-auto mr-2 text-info" />Community Stats</h1>
          <div className="grid grid-cols-2 gap-5 mt-2">
            <a className="btn btn-xs mt-1 text-xs btn-primary">Upvotes 0</a>
            <a className="btn btn-xs mt-1 text-xs btn-accent text-white">Replies 0</a>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="collapse collapse-arrow shadow-md rounded-lg mt-4">
            <input type="checkbox" />
            <h1 className="collapse-title text-sm flex flex-row">Quiz History</h1>
            <div className="collapse-content flex flex-col">
            <a href="/scorecards" className="text-cyan-400 text-xs font-bold hover:underline mt-1 cursor-pointer">My Scorecards</a>
              <a className="text-cyan-400 text-xs font-bold hover:underline mt-1 cursor-pointer">My Quizzes</a>
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
      {deleteModal && <DeleteAccount errorMessage={errorMessage} modalOpen={deleteModal} setModalOpen={setDeleteModal} actFunc={handleDeleteAcc} setErrorMessage={setErrorMessage} />}
    </div>
  )
}

export default ProfileComp