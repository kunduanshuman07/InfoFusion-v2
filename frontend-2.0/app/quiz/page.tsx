'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { fetchUser } from "../apis/fetchUser";
import { fetchCurrentQuiz } from "../apis/fetchCurrentQuiz";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import MyTimer from "../components/QuizTimer";
import { RiTimerFlashFill } from "react-icons/ri";
const QuizPage = () => {
    const { data } = useSession();
    const router = useRouter();
    const seconds = 600;
    const expriyTime = new Date(Date.now() + seconds * 1000);
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<any>(true);
    const [quizData, setQuizData] = useState<any>([]);
    const [quizIndex, setQuizIndex] = useState<any>("");
    const [quizTitle, setQuizTitle] = useState<any>("");
    const [quizId, setQuizId] = useState<any>();
    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const [selectedOptions, setSelectedOptions] = useState<any>(Array.from({ length: 10 }, () => null));

    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            if (resp.status === 200) {
                setUser(resp.data.user);
            }
        }
        const fetchQuizData = async () => {
            const { data } = await fetchCurrentQuiz();
            setQuizId(data.quizId);
            setQuizData(data.quizData);
            setQuizIndex(data.quizIndex);
            setQuizTitle(data.quizTitle);
            setLoading(false);
        }
        if (data != null) {
            fetchUserData();
            fetchQuizData();
        }
    }, [data])
    const handleOptionChange = (option: any) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentIndex] = option;
        setSelectedOptions(updatedSelectedOptions);
    };
    const handleTimerEnding = () => {
        router.push('/contests');
    }
    return (
        <div className='p-1' style={{ background: 'linear-gradient(45deg, #155e75, #06b6d4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {loading ?
                <div className='flex flex-row mx-auto my-2 p-5'>
                    <h1 className='mr-2 text-white'>Loading</h1>
                    <span className="loading loading-spinner loading-sm text-white"></span>
                </div>
                :
                <>
                    <div role="tablist" className="tabs tabs-lifted sm:tabs-sm tabs-xs mt-2 shadow-md p-2 bg-white rounded-lg">
                        {quizData?.map((x: any, index: any) => (
                            <a role="tab" className={`tab ${index === currentIndex ? 'tab-active [--tab-bg:#0e7490] text-white font-bold text-xs' : ''}`} key={index} onClick={() => setCurrentIndex(index)}>{index + 1}</a>
                        ))}
                    </div>
                    <div className="flex flex-row">
                    <RiTimerFlashFill className="m-auto mt-3 text-white"/><MyTimer expiryTimestamp={expriyTime} handleTimerEnding={handleTimerEnding} />
                    </div>
                    <div className="flex flex-col sm:p-10 p-5 shadow-md rounded-lg mt-2 items-center" style={{ border: "2px solid #22d3ee" }}>
                        <h1 className="text-white font-bold sm:text-xl m-auto">{quizData?.[currentIndex]?.title}</h1>
                        <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 mt-3 p-5">
                            {quizData?.[currentIndex]?.options.map((option: any, index: any) => (
                                <div className="shadow-md rounded-lg p-4 flex flex-row bg-white" key={index}>
                                    <input
                                        type="checkbox"
                                        id={`option-${index}`}
                                        checked={selectedOptions[currentIndex] === option}
                                        onChange={() => handleOptionChange(option)}
                                        className="checkbox checkbox-neutral"
                                    />
                                    <label htmlFor={''} className="sm:text-sm text-xs ml-2 text-cyan-500 font-bold m-auto">{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <button className="sm:mt-5 mt-2 btn btn-warning text-white px-2 sm:btn-sm btn-xs" onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>Prev <FaAngleLeft /></button>
                        <button className="sm:mt-5 mt-2 btn btn-accent text-white px-2 sm:btn-sm btn-xs">Submit</button>
                        <button className="sm:mt-5 mt-2 btn btn-info text-white px-2 sm:btn-sm btn-xs" onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === 9}>Next <FaAngleRight /></button>
                    </div>
                </>
            }
        </div>
    )
}

export default QuizPage