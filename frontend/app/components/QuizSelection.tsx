'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SiInformatica } from "react-icons/si";
import { FaHourglassStart } from "react-icons/fa";
import { SiPastebin } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import PopupModal from "./PopupModal";
import QuizPopUpContent from "./QuizPopUpContent";
const QuizSelection = () => {
  const router = useRouter();
  const [quizPopup, setQuizPopup] = useState<any>(false);
  const handleQuizPopUp = () => {
    setQuizPopup(true);
  }
  const handleStartQuiz = () => {
    const id = '123';
    router.push(`/quiz/${id}`)
  }
  return (
    <div className="p-2 shadow-md rounded-lg flex flex-col">
      <h1 className="flex flex-row text-center text-xl font-bold text-[#1e3a8a] m-auto pl-10 pr-10 rounded-lg"><SiInformatica className='m-auto' /> The Indian History</h1>
      <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Date: 19.02.2024</span></h1>
      <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Quiz #2</span></h1>
      <h1 className="text-md mt-5">Description</h1>
      <p className="text-xs bg-gray-100 rounded-lg p-2 mt-2">Welcome to the Indian History Quiz! How well do you know the rich and diverse history of India? Test your knowledge with this quiz that spans the ancient civilizations, medieval kingdoms, colonial periods, and the struggle for independence. From the Indus Valley Civilization to the Mughal Empire, and from the British Raj to the freedom movement led by Mahatma Gandhi, this quiz will take you on a journey through the milestones of the Indian past.<a className="text-xs text-[#0ea5e9] ml-1" href="/quiz">Read more</a></p>
      <h1 className="text-xs mt-2 text-gray-400 font-bold"><span className="">Questions: 10</span><span className="ml-3">Maxmimum Marks: 100</span><span className="ml-3">Time: 5 minutes</span></h1>
      <h1 className="mt-5">Tags</h1>
      <div className="flex flex-row mt-2 mb-3">
        <button className="btn btn-xs bg-[#475569] text-white font-bold">#InfoFusion</button>
        <button className="btn btn-xs ml-2 bg-[#475569] text-white font-bold">#History</button>
        <button className="btn btn-xs ml-2 bg-[#475569] text-white font-bold">#Social Studies</button>
        <h1 className="italic text-error text-xs text-center ml-auto">Quiz ends in 12:00</h1>
      </div>
      <button className="btn bg-[#0c4a6e] m-auto mt-2 mb-1 text-white hover:btn-neutral mt-4" onClick={handleQuizPopUp}><FaHourglassStart/> Start Quiz</button>
      <div className="flex flex-row">
        <button className="btn text-xs m-auto btn-xs text-[#0ea5e9] bg-[#e0f2fe] pl-10 pr-10 hover:bg-[#e0f2fe] mt-4"><SiPastebin/> Attempt past Quizzes</button>
        <button className="btn text-xs m-auto btn-xs text-[#0ea5e9] bg-[#e0f2fe] pl-10 pr-10 hover:bg-[#e0f2fe] mt-4"><MdDashboard/> Your Dashboard</button>
      </div>
      {quizPopup && <PopupModal openModal={quizPopup} setOpenModal={setQuizPopup} actionTextOne={'Go for it !'} actionTextTwo={'Cancel'} actionFunc={handleStartQuiz} content={<QuizPopUpContent />} />}
    </div>
  )
}

export default QuizSelection