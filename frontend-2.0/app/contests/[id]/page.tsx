'use client'
import ContestInformation from '@/app/components/ContestInformation'
import ContestPrizes from '@/app/components/ContestPrizes'
import { FaCaretLeft } from "react-icons/fa";

const ContestPage = () => {
    return (
        <div className='flex flex-col w-full p-10'>
            <a href='/contests' className='text-xs bold text-cyan-500 flex font-bold'><FaCaretLeft className='my-auto'/> Back to Quiz</a>
            <div className='flex sm:flex-row flex-col'>
                <ContestInformation />
                <ContestPrizes />
            </div>
        </div>
    )
}

export default ContestPage