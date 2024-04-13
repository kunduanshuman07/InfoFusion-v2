'use client'
import { GiDiamondTrophy } from "react-icons/gi";

interface ProfileProps{
  username: any;
  email: any;
}

const ProfileHeader:React.FC<ProfileProps> = ({username, email}) => {
  return (
    <div className='w-full bg-cyan-700 flex sm:flex-row flex-col items-center p-4'>
      <div className="avatar online placeholder">
        <div className="bg-base-200 text-neutral rounded-full w-16">
          <span className="text-xl">K</span>
        </div>
      </div>
      <h1 className="text-white font-bold sm:ml-4 mt-4 sm:text-xl sm:my-auto">{username}</h1>
      <p className="text-xs text-base-200 sm:ml-4 mt-1 sm:my-auto">{email}</p>
    </div>
  )
}

export default ProfileHeader