'use client'
import { AiFillFileAdd } from "react-icons/ai"


const CommunityHeader = () => {
  return (
    <div className='flex flex-row mt-1 p-1'>
        <input className="input input-xs input-bordered mr-1" placeholder="Search Topics" />
        <a className="btn btn-neutral btn-outline btn-xs mr-auto my-auto" href="/community/create-post">New Post<AiFillFileAdd /></a>
    </div>
  )
}

export default CommunityHeader