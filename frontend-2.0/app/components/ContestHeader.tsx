'use client'
import { GiDiamondTrophy } from "react-icons/gi";
const ContestHeader = () => {
  return (
    <div className='w-full bg-cyan-700 flex flex-col items-center p-4'>
        <GiDiamondTrophy className="text-5xl text-white"/>
        <h1 className="text-white font-bold mt-4">InfoFusion Quizzes</h1>
        <p className="text-xs text-base-200 mt-1">New quiz everyday from the tech world !</p>
    </div>
  )
}

export default ContestHeader