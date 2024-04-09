'use client'

import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
interface EditProfileModalProps {
    openModal: any;
    setOpenModal: (openModal: any) => void;
    user: any;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ openModal, setOpenModal, user }) => {
    const [loading, setLoading] = useState<any>(true);
    const [firstName, setFirstname] = useState<any>("");
    const [lastName, setLastname] = useState<any>("");
    const [userName, setUsername] = useState<any>("");
    const handleClose = () => {
        setOpenModal(false);
    }
    useEffect(() => {
        if (user) {
            setFirstname(user.firstname);
            setLastname(user.lastname);
            setUsername(user.username);
        }
        setLoading(false);
    }, [user])
    return (
        <dialog id="my_modal_1" className={`modal modal-${openModal ? 'open' : 'close'}`}>
            <div className={`modal-box ${loading ? 'p-4' : 'p-4'}`}>
                {loading ?
                    <div className="flex flex-row">
                        <h1 className="ml-auto">Loading .. </h1>
                        <span className="loading loading-ring loading-md ml-1 mr-auto"></span>
                    </div>
                    :
                    <>
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <div className="flex flex-row p-2">
                                    <h1 className="m-auto font-bold">Edit Profile</h1>
                                    <button className="btn btn-sm btn-neutral" onClick={handleClose}>x</button>
                                </div>
                                <div className="p-1">
                                    <label htmlFor="firstname" className="block text-black mb-2 my-5">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={firstName}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="grow border border-gray-600 rounded py-2 px-3 w-full input-sm"
                                        placeholder="First Name"
                                        required
                                    />
                                    <label htmlFor="lastname" className="block text-black mb-2 my-5">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={lastName}
                                        onChange={(e) => setLastname(e.target.value)}
                                        className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3 input-sm"
                                        placeholder="Last Name"
                                        required
                                    />
                                    <label htmlFor="username" className="block text-black mb-2 my-5">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={userName}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="grow border border-gray-600 rounded py-2 px-3 w-full mb-3 input-sm"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <button className="btn bg-[#0891b2] mt-5 text-white font-bold hover:bg-[#06b6d4]" >Edit Profile<AiOutlineEdit />{loading && <span className="loading loading-dots loading-md"></span>}</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </dialog>
    )
}

export default EditProfileModal