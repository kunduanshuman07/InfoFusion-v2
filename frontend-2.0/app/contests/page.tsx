'use client'
import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ContestHeader from '../components/ContestHeader';
import TechImage from "../assets/Tech.jpg";
import TechImage2 from "../assets/Tech2.jpg";
import TechImage3 from "../assets/Tech3.jpg";
import TechImage4 from "../assets/Tech4.jpg";
import TechImage5 from "../assets/Tech5.jpg";
import Image from 'next/image';
import { fetchCurrentQuiz } from '../apis/fetchCurrentQuiz';
import { fetchPastQuiz } from '../apis/fetchPastQuiz';
const Contests = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState<any>(true);
  const [presentQuiz, setPresentQuiz] = useState<any>();
  const [pastQuiz, setPastQuiz] = useState<any>();
  useEffect(() => {
    const fetchCurrentQuizzes = async () => {
      const quizResp = await fetchCurrentQuiz();
      setPresentQuiz(quizResp.data);
    }
    const fetchPastQuizzes = async () => {
      const quizResp = await fetchPastQuiz();
      setPastQuiz(quizResp.data.data);
    }
    fetchCurrentQuizzes();
    fetchPastQuizzes();
    setLoading(false);
  }, [])
  return (
    <div className='flex flex-col'>
      <ContestHeader />
      <div className='p-4 mt-2'>
        <h1 className='btn btn-sm bg-slate-200 text-neutral flex mx-auto hover:bg-slate-200'><FaChevronLeft className='my-auto mx-2' /> Present Quiz <FaChevronRight className='my-auto mx-2' /></h1>
        <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-row p-4 sm:w-1/2 w-full'>
          <div className='flex flex-col sm:mr-auto mr-5'>
            <Image src={TechImage3} alt='Tech' width={250} style={{ maxHeight: "150px", borderRadius: "10px" }} />
            <h1 className='mt-6 font-bold'>{presentQuiz?.quizTitle}</h1>
            <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
          </div>
          <div className='flex flex-col ml-auto bg-cyan-800 rounded-lg items-center sm:p-10 p-2 my-auto py-5'>
            <h1 className='mt-2 text-white sm:text-sm text-xs'>Participants: 200</h1>
            <h1 className='mt-4 text-white text-xs'>Sponsor: InfoFusion</h1>
            <p className='mt-4 text-white font-bold bg-amber-500 rounded-lg px-4 sm:text-sm text-xs'>Prize: 200$</p>
            <button className='btn mt-4 btn-sm px-4'>Enter</button>
          </div>
        </div>
        <h1 className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200'><FaChevronLeft className='my-auto mx-2' /> Upcoming Quizzes <FaChevronRight className='my-auto mx-2' /></h1>
        <div className='sm:grid sm:grid-cols-4 mt-2 sm:mx-auto mx-auto'>
          {pastQuiz?.map((quiz: any, index: any) => (
            <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-col p-4' style={{ width: "250px" }} key={index}>
              <Image src={index % 2 === 0 ? TechImage : TechImage2} alt='Tech' width={250} style={{ maxHeight: "150px", borderRadius: "10px" }} />
              <h1 className='mt-2 font-bold'>{quiz.title}</h1>
              <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
              <button className='btn btn-neutral mt-2 mr-auto btn-sm'>Enter</button>
            </div>
          ))}
        </div>
        <h1 className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200'><FaChevronLeft className='my-auto mx-2' /> Past Quizzes <FaChevronRight className='my-auto mx-2' /></h1>
        <div className='sm:grid sm:grid-cols-4 mt-2 sm:mx-auto mx-auto'>
          {pastQuiz?.map((quiz: any, index: any) => (
            <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-col p-4' style={{ width: "250px" }} key={index}>
              <Image src={index % 2 === 0 ? TechImage4 : TechImage5} alt='Tech' width={250} style={{ maxHeight: "150px", borderRadius: "10px" }} />
              <h1 className='mt-2 font-bold'>{quiz.title}</h1>
              <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
              <button className='btn btn-neutral mt-2 mr-auto btn-sm'>Enter</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contests