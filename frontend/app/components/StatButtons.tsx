import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { GrStatusWarningSmall } from "react-icons/gr";

const StatButtons = () => {
    return (
        <div className='flex flex-row mt-10'>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#0284c7] text-white'><FaMedium /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Questions solved</p>
                    <h1 className='text-left text-xl font-bold'>143</h1>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#f59e0b] text-white'><MdDoNotDisturbOnTotalSilence /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Correct Answers</p>
                    <h1 className='text-left text-xl font-bold'>112</h1>
                </div>
            </div>
            <div className='flex flex-row p-2 shadow-md m-auto rounded-lg'>
                <button className='btn btn-sm m-2 bg-[#2dd4bf] text-white'><FaHardHat /></button>
                <div className='flex flex-col m-auto'>
                    <p className='text-xs'>Time Elapsed</p>
                    <h1 className='text-left text-xl font-bold'>50 mins</h1>
                </div>
            </div>
        </div>
    )
}

export default StatButtons