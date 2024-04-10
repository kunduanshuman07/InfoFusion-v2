'use client'
import PopupModal from "@/app/components/PopupModal";
import MyTimer from "@/app/components/QuizTimer";
import { fetchCurrentQuiz } from "@/app/server-actions/fetchCurrentQuiz";
import { fetchUser } from "@/app/server-actions/fetchUser";
import { submitQuiz } from "@/app/server-actions/submitQuiz";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { RiTimerFlashFill } from "react-icons/ri";

const QuizStart = () => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
  const {data} = useSession();
  const router = useRouter();
  const seconds = 600;
  const timeStamp = new Date(Date.now() + seconds * 1000);
  const [popupModal, setPopupModal] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);
  const [quizData, setQuizData] = useState<any>([]);
  const [quizIndex, setQuizIndex] = useState<any>("");
  const [quizTitle, setQuizTitle] = useState<any>("");
  const [quizId, setQuizId] = useState<any>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<any>(0);
  const [selectedOptions, setSelectedOptions] = useState<any>(Array.from({ length: 10 }, () => null));
  const [user, setUser] = useState<any>();
  useEffect(()=>{
    const fetchUserData = async() => {
      const resp = await fetchUser({userId: data?.user?.email});
      if(resp.status===200){
        setUser(resp.data.user); 
      }
    }
    if(data!=null){
      fetchUserData();
    }
  },[data])
  useEffect(() => {
    const fetchQuizData = async () => {
      const { data } = await fetchCurrentQuiz();
          setQuizId(data.quizId);
          setQuizData(data.quizData);
          setQuizIndex(data.quizIndex);
          setQuizTitle(data.quizTitle);
          setLoading(false);
    }
    fetchQuizData();
  }, [])

  const handleTimerEnding = () => {
    router.push('/quiz');
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
  const handleSubmitQuiz = async () => {
    const { status, data } = await submitQuiz({ quizId: quizId, userId: user.id, quizData, selectedOptions, quizTitle, quizIndex, username: user.username });
    if (status == 200) {
      router.push(`/dashboard/scorecards`)
    }
  }

  const handleOptionChange = (option: any) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <div className='flex flex-col'>
      {loading ? <div className="flex flex-col gap-4 w-full p-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-28 w-full"></div>
        <div className="skeleton h-28 w-full"></div>
        <div className="skeleton h-28 w-full"></div>
      </div>
        :
        <>
          <div className='grid grid-cols-1 bg-[#0c4a6e] h-12'>
            <div className='flex flex-row'>
              <h1 className='text-white font-bold mt-auto mb-auto ml-5'>Quiz: #{quizIndex}</h1>
              <h1 className='text-white font-bold m-auto'>{quizTitle}</h1>
              <IoMdClose className="mt-auto mb-auto mr-5 cursor-pointer bg-white rounded-full" onClick={() => setPopupModal(true)} />
            </div>
          </div>
          <div className='grid grid-cols-1 bg-[#e0f2fe]'>
            <div className='flex flex-col p-10'>
              <h1 className="font-bold text-[#0c4a6e] text-center text-xl">Q. {quizData?.[currentQuestionIndex]?.title} <span className="ml-1 bg-[#be185d] text-white font-bold text-xs pl-2 pr-2 rounded-lg">{quizData?.[currentQuestionIndex]?.category}</span></h1>
              <div className="flex flex-col m-auto mt-10 mb-auto">
                {quizData?.[currentQuestionIndex]?.options.map((option: any, index: any) => (
                  <div key={index} className="flex flex-row mt-4 bg-white rounded-lg p-2 pl-10 pr-10">
                    <input
                      type="checkbox"
                      id={`option-${index}`}
                      checked={selectedOptions[currentQuestionIndex] === option}
                      onChange={() => handleOptionChange(option)}
                      className="checkbox checked:bg-[#0c4a6e]"
                    />
                    <label htmlFor={`option-${index}`} className="text-[#0c4a6e] ml-2">{option}</label>
                  </div>
                ))}
              </div>
              <div className="flex flex-row ml-auto mr-auto mt-5">
                <button className="btn mr-20 bg-[#2dd4bf] text-white font-bold hover:bg-[#2dd4bf] btn-sm" onClick={handlePrevQuestion} disabled={currentQuestionIndex < 1}>
                  <MdNavigateBefore /> Prev
                </button>
                <button className="btn ml-20 bg-[#164e63] text-white font-bold hover:bg-[#164e63] btn-sm" onClick={handleNextQuestion} disabled={currentQuestionIndex > quizData.length - 2}>
                  Next <MdNavigateNext />
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 p-2'>
            <div className={ `grid ${screenWidth<1000?'grid-cols-1': 'grid-cols-3'}`}>
              <div className={ `mt-1 p-4 bg-[#fffbeb] rounded-lg flex flex-row ${screenWidth<1000? '': 'ml-10'}`}>
                <progress className="progress progress-warning w-56 m-auto" value={currentQuestionIndex + 1} max="10"></progress>
                <h1 className="text-xs ml-5 font-bold text-[#0c4a6e]">Q {currentQuestionIndex + 1} of 10</h1>
              </div>
              <button className={`btn text-[#0c4a6e] mt-1 ${screenWidth<1000? 'm-auto': 'mr-auto ml-10 mt-3'}`}>
                <RiTimerFlashFill /> <MyTimer expiryTimestamp={timeStamp} handleTimerEnding={handleTimerEnding} />
              </button>
              <button className={`btn btn-success text-white mt-1 ${screenWidth<1000? '': 'ml-auto mr-10'}`} onClick={() => setPopupModal(true)}>
                Submit Quiz
              </button>
            </div>
          </div>
        </>
      }
      {popupModal && (
        <PopupModal
          openModal={popupModal}
          setOpenModal={setPopupModal}
          actionTextOne={'End Quiz'}
          actionTextTwo={'Cancel'}
          content={<h1 className="text-center font-bold">Are you sure you want to end the Quiz?</h1>}
          actionFunc={handleSubmitQuiz}
        />
      )}
    </div>
  );
};

export default QuizStart;
