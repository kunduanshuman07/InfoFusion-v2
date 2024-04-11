'use client'

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
    </div>
  )
}

export default ProfileComp