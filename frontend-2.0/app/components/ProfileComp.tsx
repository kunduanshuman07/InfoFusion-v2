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
  dashboard: any;
}
const ProfileComp: React.FC<ProfileProps> = ({ user, errorMessage, setErrorMessage, dashboard }) => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const handleDeleteAcc = async () => {
    setErrorMessage(null);
    const { data } = await deleteAccount({ userId: user?.id });
    if (data?.message === 'Error deleting account !') {
      setErrorMessage('Error deleting account !');
    }
    else {
      router.push('/login');
    }
  }
  return (
    <div className="sm:w-1/3 w-full p-2 rounded-lg sm:mt-0 mt-4 flex flex-col items-center">
      <div className="bg-cyan-600 text-neutral-content rounded-full w-12 flex items-center">
        <h1 className="text-xl p-2 m-auto">{user?.username[0]}</h1>
      </div>
      <h1 className="text-sm font-bold mt-2">{user?.username}</h1>
      <h1 className="text-xs mt-1">{user?.email}</h1>
      <a className="btn btn-sm bg-cyan-300 text-cyan-700 hover:bg-cyan-200 px-10 font-bold mt-2" href="/profile">Profile</a>
      <div className="mt-2 flex flex-col w-full" style={{ borderTop: "5px solid #94a3b8" }}>
        <div className="flex sm:flex-row flex-col w-full mt-2">
          <div className="w-full shadow-md flex flex-col items-center p-5 rounded-lg">
            <div className="flex flex-col w-1/2 items-center">
              <h1 className="text-xs font-bold">Accuracy</h1>
            </div>
            <div className="flex flex-col sm:w-1/2 w-full items-center mt-2">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h1 className="text-xs font-bold text-slate-400 mr-auto">Easy</h1>
                  <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.easy}/{dashboard?.quiz_count * 3}</h1>
                </div>
                <progress className="progress progress-success sm:w-72 w-72" value={dashboard?.easy} max={dashboard?.quiz_count * 3}></progress>
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex flex-row">
                  <h1 className="text-xs font-bold text-slate-400 mr-auto">Medium</h1>
                  <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.med}/{dashboard?.quiz_count * 3}</h1>
                </div>
                <progress className="progress progress-info w-72" value={dashboard?.med} max={dashboard?.quiz_count * 3}></progress>
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex flex-row">
                  <h1 className="text-xs font-bold text-slate-400 mr-auto">Hard</h1>
                  <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.hard}/{dashboard?.quiz_count * 2}</h1>
                </div>
                <progress className="progress progress-warning w-72" value={dashboard?.hard} max={dashboard?.quiz_count * 2}></progress>
              </div>
              <div className="flex flex-col mt-2">
                <div className="flex flex-row">
                  <h1 className="text-xs font-bold text-slate-400 mr-auto">Misc</h1>
                  <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.misc}/{dashboard?.quiz_count * 2}</h1>
                </div>
                <progress className="progress progress-error w-72" value={dashboard?.misc} max={dashboard?.quiz_count * 2}></progress>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="shadow-md rounded-lg mt-4 p-4 flex flex-col">
            <a href="/scorecards" className="text-cyan-400 text-xs font-bold hover:underline mt-1 cursor-pointer">My Scorecards</a>
            <a className="text-cyan-400 text-xs font-bold hover:underline mt-1 cursor-pointer" href="/myquizzes">My Quizzes</a>
          </div>
          <div className="shadow-md rounded-lg mt-4 p-4 flex flex-col sm:flex hidden">
              <a href="/password" className="text-[#0891b2] text-xs font-bold hover:underline mt-2">Change Password</a>
              <a className="text-[#dc2626] text-xs font-bold hover:underline mt-1 cursor-pointer" onClick={() => setDeleteModal(true)}>Delete Account</a>
            </div>
        </div>
      </div>
      {deleteModal && <DeleteAccount errorMessage={errorMessage} modalOpen={deleteModal} setModalOpen={setDeleteModal} actFunc={handleDeleteAcc} setErrorMessage={setErrorMessage} />}
    </div>
  )
}

export default ProfileComp