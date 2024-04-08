'use client'

import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { GrStatusWarningSmall } from "react-icons/gr";

interface StatButtonProps {
    contentOne: any;
    contentTwo: any;
    contentThree: any;
}

const StatButtons:React.FC<StatButtonProps> = ({contentOne, contentTwo, contentThree}) => {
    return (
        <div className='flex flex-row mt-10'>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#0284c7] text-white'><FaMedium /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Questions solved</p>
                    <h1 className='text-left text-xl font-bold'>{contentOne}</h1>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#f59e0b] text-white'><MdDoNotDisturbOnTotalSilence /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Correct Answers</p>
                    <h1 className='text-left text-xl font-bold'>{contentTwo}</h1>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#2dd4bf] text-white'><FaHardHat /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Highest Score</p>
                    <h1 className='text-left text-xl font-bold'>{contentThree}</h1>
                </div>
            </div>
        </div>
    )
}

export default StatButtons