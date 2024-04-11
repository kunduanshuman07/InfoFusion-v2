'use client'
import { GoDotFill } from "react-icons/go";

const ContestPrizes = () => {
  return (
    <div className='sm:w-1/3 w-full shadow-md rounded-lg p-5 mt-4 sm:ml-2 ml-0 flex flex-col'>
      <h1 className='text-xl font-bold text-amber-500'>Prize</h1>
      <div className='flex flex-row mt-2 text-xs p-2' style={{borderBottom: "1px solid #e2e8f0"}}>
        <h1 className='font-bold'>1st</h1>
        <h1 className='ml-auto'>50$</h1>
      </div>
      <div className='flex flex-row mt-2 text-xs p-2'  style={{borderBottom: "1px solid #e2e8f0"}}>
        <h1 className='font-bold'>2nd</h1>
        <h1 className='ml-auto'>20$</h1>
      </div>
      <div className='flex flex-row mt-2 text-xs p-2'  style={{borderBottom: "1px solid #e2e8f0"}}>
        <h1 className='font-bold'>3rd</h1>
        <h1 className='ml-auto'>10$</h1>
      </div>
      <div className='flex flex-row mt-2 text-xs p-2'  style={{borderBottom: "1px solid #e2e8f0"}}>
        <h1 className='font-bold'>4th - 10th</h1>
        <h1 className='ml-auto'>5$</h1>
      </div>
      <h1 className='text-sm font-bold mt-5'>Guidelines</h1>
      <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2"/> 10 minutes 10 questions</p>
      <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2"/> Equal weightage and negative marking</p>
      <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2"/> Donot switch tabs between quiz</p>
      <button className='btn btn-neutral mt-5'>Start Quiz</button>
    </div>
  )
}

export default ContestPrizes