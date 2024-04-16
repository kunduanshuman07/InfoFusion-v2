'use client'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineUp } from "react-icons/ai"
import LearnHeader from '../components/LearnHeader'
import { useRouter } from 'next/navigation'
const Learn = () => {
  const router = useRouter();
  const [buttonState, setButtonState] = useState<any>('WEBD');
  const handleTopicClick = () => {
    router.push('/learn/react');
  }
  return (
    <div className='flex flex-col p-1'>
      <LearnHeader setButtonState={setButtonState} buttonState={buttonState} />
      <div className='grid mt-4 sm:grid-cols-4 gap-2 grid-cols-2'>
        <div className='flex flex-col p-2 shadow-md rounded-lg cursor-pointer bg-gray-500 text-white' onClick={handleTopicClick}>
          <div className='flex flex-col items-center m-auto'>
            <h1 className='text-xl font-bold'>ReactJS Summary</h1>
            <h1 className='text-xs text-slate-200 mt-2'>Created at: 12.04.2024</h1>
          </div>
          <div className='flex flex-row mt-4 m-auto'>
            <button className='btn btn-ghost btn-xs text-slate-200 font-bold text-xs hover:btn-ghost'><AiOutlineUp /> 23.4k</button>
            <div className="rating rating-xs mt-1 ml-1">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn