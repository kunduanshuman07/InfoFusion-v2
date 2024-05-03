'use client'
import { useEffect, useState } from 'react'
import { fetchCurrentQuiz } from '../apis/fetchCurrentQuiz';

interface ContestInformationProps {
  user: any;
  quizLoading: boolean;
  setQuizLoading: (quizLoading: boolean)=> void;
}

const ContestInformation: React.FC<ContestInformationProps> = ({ user, quizLoading, setQuizLoading }) => {
  const [quizData, setQuizData] = useState<any>();
  const [quizTitle, setQuizTitle] = useState<any>();
  const [quizDesc, setQuizDesc] = useState<any>();
  const [descLink, setQuizDescLink] = useState<any>();

  useEffect(() => {
    const fetchQuizData = async () => {
      const { data } = await fetchCurrentQuiz();
      setQuizTitle(data.quizTitle);
      setQuizData(data.quizData);
      setQuizDesc(data.quizDesc);
      setQuizDescLink(data.descLink);
      setQuizLoading(false);
    }
    if (user) {
      fetchQuizData();
    }
  }, [user])
  return (
    <div className='w-full mt-4 flex flex-col'>
      {quizLoading ?
        <div className='flex flex-row mx-auto my-2'>
          <h1 className='mr-2'>Loading</h1>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
        :
        <>
          <h1 className='text-xl'>Welcome to The Daily Tech Quiz #{quizTitle}</h1>
          <p className='text-xs text-slate-400 mt-4'>This quiz is being conducted by InfoFusion.</p>
          <p className='bg-slate-500 text-white p-5 rounded-lg mt-5 text-sm'>{quizDesc}</p>
          <a className='text-xs text-cyan-500 font-bold hover:underline mt-2' href={descLink} target='_blank'>Read More</a>
        </>
      }
    </div>
  )
}

export default ContestInformation