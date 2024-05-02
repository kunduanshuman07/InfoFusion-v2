'use client'
import { AiFillFileAdd } from "react-icons/ai"


const CommunityHeader = () => {
  return (
    <div className='flex flex-row mt-1 p-1'>
        <input className="input input-xs input-bordered mr-1" placeholder="Search using Tags" />
        <a className="btn btn-neutral btn-outline btn-xs mr-auto my-auto" href="/community/createpost">New Post<AiFillFileAdd /></a>
    </div>
  )
}

export default CommunityHeader