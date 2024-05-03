'use client'
import { GoDotFill } from "react-icons/go";

interface ContestPrizesProps {
  quizLoading: boolean;
  enability: boolean;
}

const ContestPrizes: React.FC<ContestPrizesProps> = ({ quizLoading, enability }) => {
  return (
    <>
      {
        !quizLoading ?
          <div className='w-full shadow-md rounded-lg p-5 mt-4 sm:ml-2 ml-0 flex flex-col'>
            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col sm:w-1/2 w-full sm:mr-5 mr-0">
                <h1 className='text-xl font-bold text-amber-500'>Question Division</h1>
                <div className='flex flex-row mt-2 text-xs p-2' style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <h1 className='font-bold'>Easy</h1>
                  <h1 className='ml-auto'>3</h1>
                </div>
                <div className='flex flex-row mt-2 text-xs p-2' style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <h1 className='font-bold'>Medium</h1>
                  <h1 className='ml-auto'>3</h1>
                </div>
                <div className='flex flex-row mt-2 text-xs p-2' style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <h1 className='font-bold'>Hard</h1>
                  <h1 className='ml-auto'>2</h1>
                </div>
                <div className='flex flex-row mt-2 text-xs p-2' style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <h1 className='font-bold'>Miscelleneous</h1>
                  <h1 className='ml-auto'>2</h1>
                </div>
              </div>
              <div className="flex flex-col sm:w-1/2 w-full sm:mt-0 mt-4">
                <h1 className='text-xl font-bold text-amber-500'>Guidelines</h1>
                <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2" /> 10 minutes 10 questions</p>
                <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2" /> You cannot re attempt after submitting the quiz once</p>
                <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2" /> {`You won't learn if you cheat`}</p>
                <p className='text-xs mt-2 flex'><GoDotFill className="my-auto mr-2" /> {`Refrain from discussing quiz content until after the quiz period ends.`}</p>
              </div>
            </div>
            {enability ? <a className='btn btn-neutral mt-5' href="/quiz" >Start Quiz</a> : <h1 className="mt-5 text-xs text-error text-center font-bold">You have attempted Daily Quiz.</h1>}
          </div> : <></>
      }
    </>
  )
}

export default ContestPrizes