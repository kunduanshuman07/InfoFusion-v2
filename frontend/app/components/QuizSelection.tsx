'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiInformatica } from "react-icons/si";
import { FaHourglassStart } from "react-icons/fa";
import { SiPastebin } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import PopupModal from "./PopupModal";
import QuizPopUpContent from "./QuizPopUpContent";
import { fetchCurrentQuiz } from "../server-actions/fetchCurrentQuiz";
import { fetchQuizEnability } from "../server-actions/fetchQuizEnability";

interface QuizProps{
  user: any;
}

const QuizSelection:React.FC<QuizProps> = ({user}) => {
  const router = useRouter();
  const [quizPopup, setQuizPopup] = useState<any>(false);
  const [quizData, setQuizData] = useState<any>();
  const [quizTitle, setQuizTitle] = useState<any>();
  const [quizIndex, setQuizIndex] = useState<any>();
  const [quizDesc, setQuizDesc] = useState<any>();
  const [descLink, setQuizDescLink] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  const [quizAccess, setQuizAccess] = useState<any>();
  useEffect(() => {
    const fetchQuizData = async () => {
      const { data } = await fetchCurrentQuiz();
      const resp = await fetchQuizEnability({ userId: user.id, quizId: data.quizId });
      setQuizTitle(data.quizTitle);
      setQuizIndex(data.quizIndex);
      setQuizData(data.quizData);
      setQuizDesc(data.quizDesc);
      setQuizDescLink(data.descLink);
      if (resp.status == 200) {
        setQuizAccess(resp.data.value);
        setLoading(false);
      }
    }
    if(user){
      fetchQuizData();
    }
  }, [user])
  const handleQuizPopUp = () => {
    setQuizPopup(true);
  }
  const handleStartQuiz = () => {
    router.push(`/quiz/${quizIndex}`)
  }
  return (
    <div className="p-2 shadow-md rounded-lg flex flex-col">
      {loading ?
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-16 w-28"></div>
          <div className="skeleton h-16 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-2 w-full"></div>
        </div>
        :
        <>
          <h1 className="flex flex-row text-center text-xl font-bold text-[#0891b2] m-auto pl-10 pr-10 rounded-lg"><SiInformatica className='m-auto mr-2' />{quizTitle}</h1>
          <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Date: 19.02.2024</span></h1>
          <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Quiz #{quizIndex}</span></h1>
          <h1 className="text-md mt-5">Description</h1>
          <p className="text-xs bg-gray-100 rounded-lg p-2 mt-2">{quizDesc}<a className="text-xs text-[#0ea5e9] ml-1" href={descLink} target="_blank">Read more</a></p>
          <h1 className="text-xs mt-2 text-gray-400 font-bold"><span className="">Questions: 10</span><span className="ml-3">Maxmimum Marks: 100</span><span className="ml-3">Time: 5 minutes</span></h1>
          <h1 className="mt-5">Tags</h1>
          <div className="flex flex-row mt-2 mb-3">
            <button className="btn btn-xs bg-[#0891b2] text-white font-bold">#InfoFusion</button>
            <button className="btn btn-xs ml-2 bg-[#0891b2] text-white font-bold">#History</button>
            <button className="btn btn-xs ml-2 bg-[#0891b2] text-white font-bold">#Social Studies</button>
            <h1 className="italic text-error text-xs text-center ml-auto">Quiz ends in 12:00</h1>
          </div>
          <button className="btn bg-[#0891b2] m-auto mt-2 mb-1 text-white hover:btn-neutral mt-4 btn-sm" onClick={handleQuizPopUp} disabled={!quizAccess}><FaHourglassStart /> Start Quiz</button>
          {!quizAccess && <p className="text-xs text-center mt-1 text-error font-bold">{`You have attempted Today's Quiz`}</p>}
          <div className="flex flex-row">
            <a className="btn text-xs m-auto btn-xs text-[#0891b2] bg-[#ecfeff] pl-10 pr-10 hover:bg-[#e0f2fe] mt-2" href="/pastquizzes"><SiPastebin /> Past Quizzes</a>
            <a className="btn text-xs m-auto btn-xs text-[#0891b2] bg-[#ecfeff] pl-10 pr-10 hover:bg-[#e0f2fe] mt-2" href="/dashboard"><MdDashboard /> Dashboard</a>
          </div>
          {quizPopup && <PopupModal openModal={quizPopup} setOpenModal={setQuizPopup} actionTextOne={'Go for it !'} actionTextTwo={'Cancel'} actionFunc={handleStartQuiz} content={<QuizPopUpContent />} />}
        </>}
    </div>
  )
}

export default QuizSelection