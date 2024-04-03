import React from 'react'

const QuizPopUpContent = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-center'>Read before starting the quiz</h1>
            <div className='flex flex-col mt-3'>
                <ul>
                    <li><p className='text-xs font-bold text-[#94a3b8]'>1. There will be a total of 10 Questions.</p></li>
                    <li className='mt-2'><p className='text-xs font-bold text-[#94a3b8]'>2. You will be given a maximum of 10 minutes to complete the quiz.</p></li>
                    <li className='mt-2'><p className='text-xs font-bold text-[#94a3b8]'>3. Questions have been categorized into Easy, Medium, Hard and Misc.</p></li>
                    <li className='mt-2 flex flex-col'><p className='text-xs font-bold text-[#94a3b8]'>4. Every category has its own different weightage as below:
                        <ul className='ml-5'>
                            <li className='mt-2'>Easy: 1.25</li>
                            <li className='mt-2'>Hard: 1.50</li>
                            <li className='mt-2'>Medium: 1.75</li>
                            <li className='mt-2'>Misc: 2.0</li>
                        </ul>
                    </p></li>
                    <li className='mt-2'><p className='text-xs font-bold text-[#94a3b8]'>4. Every question has 1 mark for a correct answer and 0 mark for incorrect answer or an unattempted question. Incorrect answers have no impact on the total mark but has exact negative impact on weighted score.</p></li>
                    <li className='mt-2'><p className='text-xs font-bold text-[#94a3b8]'>5. The final score will be a cumulative of weighted score, total marks and some external undisclosable factors which affects your rating, rank and stats.</p></li>
                    <li className='mt-2'><p className='text-xs font-bold text-[#94a3b8]'>6. Ending a quiz in between will result in submitting the quiz.</p></li>
                </ul>
            </div>

        </div>
    )
}

export default QuizPopUpContent