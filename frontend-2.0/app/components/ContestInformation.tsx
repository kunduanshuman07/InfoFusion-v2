'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext';
import { fetchCurrentQuiz } from '../apis/fetchCurrentQuiz';
import { useSession } from 'next-auth/react';
import { fetchUser } from '../apis/fetchUser';

interface ContestInformationProps {
  user: any;
  quizLoading: boolean;
  setQuizLoading: (quizLoading: boolean)=> void;
}

const ContestInformation: React.FC<ContestInformationProps> = ({ user, quizLoading, setQuizLoading }) => {
  const router = useRouter();
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
    <div className='sm:w-2/3 w-full mt-4 flex flex-col'>
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
          <a className='text-xs text-cyan-400 mt-2' href={descLink} target='_blank'>Read More</a>
          <div className='flex flex-col mt-5'>
            <button className='btn bg-cyan-800 text-white font-bold hover:bg-cyan-800 m-auto px-20'>200 users</button>
          </div>
        </>
      }
    </div>
  )
}

export default ContestInformation