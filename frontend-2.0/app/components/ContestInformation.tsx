'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext';
import { fetchCurrentQuiz } from '../apis/fetchCurrentQuiz';

const ContestInformation = () => {
  const router = useRouter();
  const { user } = useUser();
  const [quizPopup, setQuizPopup] = useState<any>(false);
  const [quizData, setQuizData] = useState<any>();
  const [quizTitle, setQuizTitle] = useState<any>();
  const [quizIndex, setQuizIndex] = useState<any>();
  const [quizDesc, setQuizDesc] = useState<any>();
  const [descLink, setQuizDescLink] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    const fetchQuizData = async () => {
      const { data } = await fetchCurrentQuiz();
      setQuizTitle(data.quizTitle);
      setQuizIndex(data.quizIndex);
      setQuizData(data.quizData);
      setQuizDesc(data.quizDesc);
      setQuizDescLink(data.descLink);
      setLoading(false);
    }
    if (user) {
      fetchQuizData();
    }
  }, [user])

  return (
    <div className='sm:w-2/3 w-full mt-4 flex flex-col'>
      <h1 className='text-xl'>Welcome to The Daily Tech Quiz #{quizIndex}</h1>
      <p className='text-xs text-slate-400 mt-4'>This quiz is sponsered by InfoFusion.</p>
      <p className='bg-slate-300 p-2 rounded-lg mt-5'>{quizDesc}</p>
      <a className='text-xs text-cyan-400 mt-2' href={descLink}>Read More</a>
      <div className='flex flex-col mt-5'>
        <button className='btn bg-cyan-800 text-white font-bold hover:bg-cyan-800 m-auto px-20'>Participants: 200</button>
        <button className='btn bg-cyan-800 text-white font-bold hover:bg-cyan-800 m-auto mt-4 px-20'>Total Prize: 200$</button>
      </div>
      
    </div>
  )
}

export default ContestInformation