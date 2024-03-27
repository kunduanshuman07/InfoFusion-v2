'use client'
import PopupModal from "@/app/components/PopupModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md"
import { RiTimerFlashFill } from "react-icons/ri";


const QuizStart = () => {
  const router = useRouter();
  const [popupModal, setPopupModal] = useState<any>(false);
  const handleSubmitQuiz = () => {
    router.push('/');
  }
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-1 bg-[#0c4a6e] h-12'>
        <div className='flex flex-row'>
          <h1 className='text-white font-bold mt-auto mb-auto ml-5'>Quiz: #12</h1>
          <h1 className='text-white font-bold m-auto'>The Indian History</h1>
          <IoMdClose className="mt-auto mb-auto mr-5 cursor-pointer bg-white rounded-full" onClick={()=>setPopupModal(true)}/>
        </div>
      </div>
      <div className='grid grid-cols-1 bg-[#e0f2fe]'>
        <div className='flex flex-col p-10'>
          <h1 className="font-bold text-[#0c4a6e] text-center text-xl">Q. Who is the prime minister of India? <span className="ml-1 bg-[#be185d] text-white font-bold text-xs pl-2 pr-2 rounded-lg">Easy</span></h1>
          <div className="flex flex-col m-auto mt-10 mb-auto">
            <div className="flex flex-row mt-4 bg-white rounded-lg p-2 pl-10 pr-10">
              <input type="radio" name="radio-2" className="radio checked:bg-[#0c4a6e]" />
              <p className="text-[#0c4a6e] ml-2">Narendra Modi</p>
            </div>
            <div className="flex flex-row mt-4 bg-white rounded-lg p-2 pl-10 pr-10">
              <input type="radio" name="radio-2" className="radio checked:bg-[#0c4a6e]" />
              <p className="text-[#0c4a6e] ml-2">Narendra Modi</p>
            </div>
            <div className="flex flex-row mt-4 bg-white rounded-lg p-2 pl-10 pr-10">
              <input type="radio" name="radio-2" className="radio checked:bg-[#0c4a6e]" />
              <p className="text-[#0c4a6e] ml-2">Narendra Modi</p>
            </div>
            <div className="flex flex-row mt-4 bg-white rounded-lg p-2 pl-10 pr-10">
              <input type="radio" name="radio-2" className="radio checked:bg-[#0c4a6e]" />
              <p className="text-[#0c4a6e] ml-2">Narendra Modi</p>
            </div>
          </div>
          <div className="flex flex-row ml-auto mr-auto mt-5">
            <button className="btn mr-20 bg-[#2dd4bf] text-white font-bold hover:bg-[#2dd4bf] btn-sm"><MdNavigateBefore /> Prev</button>
            <button className="btn ml-20 bg-[#164e63] text-white font-bold hover:bg-[#164e63] btn-sm">Next <MdNavigateNext /></button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        <div className='flex flex-row'>
          <div className="mt-5 ml-10 p-4 bg-[#fffbeb] rounded-lg flex flex-row">
            <progress className="progress progress-warning w-56 m-auto" value="90" max="100"></progress>
            <h1 className="text-xs ml-5 font-bold text-[#0c4a6e]">Q 2 of 10</h1>
          </div>
          <button className="btn text-[#0c4a6e] mr-auto ml-10 mt-5"><RiTimerFlashFill/> 12:00 minutes remaining</button>
          <button className="btn btn-success mr-10 text-white ml-auto ml-10 mt-5" onClick={()=>setPopupModal(true)}>Submit Quiz</button>
        </div>
      </div>
      {popupModal && <PopupModal openModal={popupModal} setOpenModal={setPopupModal} actionTextOne={'End Quiz'} actionTextTwo={'Cancel'} content={<h1 className="text-center font-bold">Are you sure you want to end the Quiz?</h1>} actionFunc={handleSubmitQuiz}/>}
    </div>
  )
}

export default QuizStart