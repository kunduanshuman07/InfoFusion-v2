'use client'
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import EditProfileModal from "../components/EditProfileModal";
import { useSession } from "next-auth/react";
import { fetchUser } from "../server-actions/fetchUser";
import UserLayout from "../container/UserLayout";

const Profile = () => {
    const { data } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [modalOpen, setOpenModal] = useState<any>(false);
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            if (resp.status === 200) {
                setUser(resp.data.user);
                setLoading(false);
            }
        }
        if (data != null) {
            fetchUserData();
        }
    }, [data])
    return (
        <div className='flex flex-col'>
            <UserLayout/>
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
                <div className="p-4 flex flex-col">
                    <div className="w-full bg-neutral text-white shadow-md rounded-lg">
                        <div className="card-body">
                            <h2 className="card-title">{user?.firstname} {user?.lastname}</h2>
                            <p className='text-xs'>@{user?.username} | {user?.email}</p>
                            <div className="card-actions justify-end mt-2">
                                <button className="btn btn-accent btn-sm text-white font-bold hover:bg-[#06b6d4]" onClick={() => setOpenModal(true)}><MdEdit className="mr-2" />Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 mt-5 ml-auto">
                        <div className="collapse collapse-arrow shadow-md rounded-lg">
                            <input type="checkbox" />
                            <h1 className="collapse-title text-sm flex flex-row">Account Settings</h1>
                            <div className="collapse-content flex flex-col">
                                <a href="" className="text-[#0891b2] text-xs font-bold hover:underline mt-2">Change Password</a>
                                <a href="" className="text-[#dc2626] text-xs font-bold hover:underline mt-1">Delete Account</a>
                            </div>
                        </div>
                    </div>
                </div>}
            {modalOpen && <EditProfileModal openModal={modalOpen} setOpenModal={setOpenModal} user={user}/>}
        </div>
    )
}

export default Profile;
