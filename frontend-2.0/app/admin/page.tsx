'use client'

import { useEffect, useState } from "react"
import { adminFetch } from "../apis/adminfetch";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Admin = () => {
  const [allUsers, setAllUsers] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    const fetchUsersData = async () => {
      const { status, data } = await adminFetch();
      if (status == 200) {
        setAllUsers(data.users);
        setLoading(false);
      }
    }
    fetchUsersData();
  }, [])
  return (
    <div className="flex flex-col">
      <div className="flex sm:flex-row flex-col">
        <button className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200 mx-2'><FaChevronLeft className='my-auto mx-2' /> All Users <FaChevronRight className='my-auto mx-2' /></button>
        <input className="input input-bordered input-sm input-info mt-4 sm:ml-auto" placeholder="Search User" />
        <a href="/admin/addquiz" className="btn bg-cyan-600 btn-sm hover:bg-cyan-500 mt-4 text-white font-bold sm:ml-2">Add New Quiz</a>
      </div>
      <div className="overflow-x-auto mt-2">
        <table className="table">
          <thead>
            <tr className="text-xs text-center bg-cyan-800 text-white font-bold">
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user: any, index: any) => (
              <tr className="text-xs text-center" key={index}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td> <a className='font-bold text-xs text-cyan-400'>View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin