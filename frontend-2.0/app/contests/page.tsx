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
import { useRouter } from 'next/navigation';
const Contests = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState<any>(true);
  const [buttonLoading, setButtonLoading] = useState<any>(false);
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
  const handleEnterContest = () => {
    setButtonLoading(true);
    const id = '123';
    router.push(`/contests/${id}`);
  }
  return (
    <div className='flex flex-col'>
      {loading ?
        <div className='flex flex-row mx-auto my-2 p-5'>
          <h1 className='mr-2'>Loading</h1>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
        :
        <>
          <ContestHeader />
          <div className='p-4 mt-2'>
            <button className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200 m-auto'><FaChevronLeft className='my-auto mx-2' /> OnGoing Quiz <FaChevronRight className='my-auto mx-2' /></button>
            <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-row p-4 sm:w-1/3 w-full'>
              <div className='flex flex-col'>
                <Image src={TechImage3} alt='Tech' width={450} style={{ maxHeight: "150px", borderRadius: "10px" }} className='m-auto' />
                <h1 className='mt-6 font-bold'>{presentQuiz?.quizTitle}</h1>
                <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
                <button className='btn btn-sm mr-auto mt-2 btn-neutral px-10' onClick={handleEnterContest}>Enter {buttonLoading ? <span className="loading loading-spinner loading-xs"></span> : ''}</button>
              </div>
            </div>
            <button className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200 m-auto'><FaChevronLeft className='my-auto mx-2' /> Upcoming Quizzes <FaChevronRight className='my-auto mx-2' /></button>
            <div className='sm:grid sm:grid-cols-4 mt-2 sm:mx-auto mx-auto'>
              {pastQuiz?.map((quiz: any, index: any) => (
                <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-col p-4' style={{ width: "250px" }} key={index}>
                  <Image src={index % 2 === 0 ? TechImage : TechImage2} alt='Tech' width={250} style={{ maxHeight: "150px", borderRadius: "10px" }} />
                  <h1 className='mt-2 font-bold'>{quiz.title}</h1>
                  <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
                  <button className='btn btn-neutral mt-2 mr-auto btn-sm'>Register</button>
                </div>
              ))}
            </div>
            <button className='btn btn-sm bg-slate-200 text-neutral flex mt-4 hover:bg-slate-200 m-auto'><FaChevronLeft className='my-auto mx-2' /> Past Quizzes <FaChevronRight className='my-auto mx-2' /></button>
            <div className='sm:grid sm:grid-cols-4 mt-2 sm:mx-auto mx-auto'>
              {pastQuiz?.map((quiz: any, index: any) => (
                <div className='shadow-md rounded-lg mt-2 sm:mr-auto mx-auto flex flex-col p-4' style={{ width: "250px" }} key={index}>
                  <Image src={index % 2 === 0 ? TechImage4 : TechImage5} alt='Tech' width={250} style={{ maxHeight: "150px", borderRadius: "10px" }} />
                  <h1 className='mt-2 font-bold'>{quiz.title}</h1>
                  <p className='mt-1 text-xs'>Ends in 12:05:65 hrs</p>
                  <button className='btn btn-neutral mt-2 mr-auto btn-sm'>View</button>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Contests