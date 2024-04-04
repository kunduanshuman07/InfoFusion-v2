'use client'
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
const DashboardDrawer = () => {
    const [loading, setLoading] = useState<any>(true);
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchUser = () => {
            const userString = window.localStorage.getItem("User");
            const user = userString ? JSON.parse(userString) : null;
            setUser(user);
            setLoading(false);
        }
        fetchUser();
    }, [])
    return (
        <div className='flex flex-col pl-2'>
            {loading ?
                <div className="flex flex-col gap-4 w-full rounded-lg m-auto shadow-md p-2">
                    <div className="flex gap-4 items-center">
                        <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-8 w-20"></div>
                            <div className="skeleton h-8 w-28"></div>
                        </div>
                    </div>
                    <div className="skeleton h-32 w-full"></div>
                </div>
                :
                <>
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
                            <input type="checkbox" />
                            <h1 className="collapse-title mt-auto mb-auto text-sm">More on Quizzes</h1>
                            <div className="collapse-content flex flex-col">
                                <a href="/dashboard/scorecards" className="text-[#38bdf8] text-xs font-bold hover:underline mt-2">Scorecards</a>
                                <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-1">Upcoming Quizzes</a>
                                <a href="" className="text-[#38bdf8] text-xs font-bold hover:underline mt-1">Weightage System</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-96 mt-5">
                        <div className="collapse collapse-arrow shadow-md rounded-lg">
                            <input type="checkbox" />
                            <h1 className="collapse-title text-sm flex flex-row">Account Settings</h1>
                            <div className="collapse-content flex flex-col">
                                <a href="" className="text-[#0891b2] text-xs font-bold hover:underline mt-2">Change Password</a>
                                <a href="" className="text-[#dc2626] text-xs font-bold hover:underline mt-1">Delete Account</a>
                            </div>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default DashboardDrawer;
