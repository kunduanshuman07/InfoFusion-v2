'use client'
import { useState } from 'react'
import CommunityHeader from '../components/CommunityHeader'
import {AiOutlineEye, AiOutlineUp} from "react-icons/ai"
const Community = () => {
  const [buttonState, setButtonState] = useState<any>('Interview');
  return (
    <div className='flex flex-col p-1'>
      <h1 className='text-center font-bold text-error text-sm'>This page is in development stage.</h1>
      <CommunityHeader buttonState={buttonState} setButtonState={setButtonState}/>
      <div className='grid mt-4 grid-cols-1 shadow-md rounded-lg'>
        <div className='flex sm:flex-row flex-col p-2' style={{ borderTop: "1px solid #cbd5e1", borderBottom: "1px solid #cbd5e1" }}>
          <div className='flex flex-col'>
            <h1 className='text-xs font-bold'>Google SDE Interview Questions</h1>
            <h1 className='text-xs text-slate-400 mt-2'>Created at: 12.04.2024</h1>
          </div>
          <div className='grid grid-cols-2 gap-2 sm:ml-auto sm:my-auto my-4'>
            <button className='btn btn-ghost btn-xs text-slate-400 font-bold text-xs hover:btn-ghost'><AiOutlineUp/> 23.4k</button>
            <button className='btn btn-ghost btn-xs text-slate-400 font-bold text-xs hover:btn-ghost'><AiOutlineEye/> 100k</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community