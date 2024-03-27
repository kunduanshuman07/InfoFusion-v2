import React from 'react'

const QuizPopUpContent = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-center text-xl'>Quiz Marking</h1>
            <h1 className="text-xs mt-2 text-gray-400 font-bold m-auto mt-4"><span className="">Questions: 10</span><span className="ml-3">Maxmimum Marks: 100</span><span className="ml-3">Time: 5 minutes</span></h1>
            <h1 className='font-bold mt-4 text-sm'>Difficulty & Weightage</h1>
            <div className='flex flex-row m-auto mt-2'>
                <button className='btn btn-xs btn-success text-white'>Easy - 0.5</button>
                <button className='btn btn-xs ml-2 btn-secondary'>Medium - 0.75</button>
                <button className='btn btn-xs ml-2 btn-primary'>Hard - 1</button>
                <button className='btn btn-xs ml-2 bg-[#e11d48] text-white hover:bg-[#e11d48]'>Misc - 1.25</button>
            </div>
            <h1 className='font-bold mt-4 text-sm'>Weighted Marking?</h1>
            <p className='mt-2 text-xs text-gray-500 font-bold'>(Easy) 0.5 x 3 + (Medium) 0.75 x 3 + (Hard) 1.0 x 2 + (Misc) 1.25 x 2</p>
            <h1 className='font-bold mt-4 text-sm'>Total Score?</h1>
            <p className='mt-2 text-xs text-gray-500 font-bold'>Weighted Score + Average Time left on correct answers</p>
        </div>
    )
}

export default QuizPopUpContent