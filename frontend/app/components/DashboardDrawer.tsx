'use client'
import { MdEdit } from "react-icons/md";
import { useUser } from "../context/UserContext";
const DashboardDrawer = () => {
    const {user} = useUser();
    return (
        <div className='flex flex-col pl-2'>
            <div className="w-96 bg-neutral text-white shadow-md rounded-lg">
                <div className="card-body">
                    <h2 className="card-title">{user?.firstname} {user?.lastname}</h2>
                    <p className='text-xs'>@{user?.username} | {user?.email}</p>
                    <div className="card-actions justify-end mt-2">
                        <button className="btn btn-accent btn-sm text-white font-bold hover:bg-[#06b6d4]"><MdEdit className="mr-2" />Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className="w-96 mt-5">
                <div className="collapse collapse-arrow shadow-md rounded-lg">
                    <input type="checkbox"/>
                    <h1 className="collapse-title mt-auto mb-auto text-sm">More on Quizzes</h1>
                    <div className="collapse-content flex flex-col">
                        <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-2">Scorecards</a>
                        <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-1">Upcoming Quizzes</a>
                        <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-1">Weightage System</a>
                    </div>
                </div>
            </div>
            <div className="w-96 mt-5">
                <div className="collapse collapse-arrow shadow-md rounded-lg">
                    <input type="checkbox"/>
                    <h1 className="collapse-title text-sm flex flex-row">Account Settings</h1>
                    <div className="collapse-content flex flex-col">
                        <a href="" className="text-[#0891b2] text-xs font-bold hover:underline mt-2">Change Password</a>
                        <a href="" className="text-[#dc2626] text-xs font-bold hover:underline mt-1">Delete Account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardDrawer;
