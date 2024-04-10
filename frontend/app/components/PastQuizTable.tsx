'use client'
import { TbFilterSearch } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { formatDateAndTime } from "../utils/timeFormat";
import { fetchPastQuiz } from "../server-actions/fetchPastQuiz";
import PastQuizModal from "./PastQuizAccess";
const PastQuizTable = () => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const [loading, setLoading] = useState<any>(true);
    const [pastquizzes, setPastQuizzes] = useState<any>([]);
    const [modalOpen, setModalOpen] = useState<any>(false);
    const [quizId, setQuizId] = useState<any>();
    const [quizTitle, setQuizTitle] = useState<any>();
    useEffect(() => {
        const fetchPastQuizzes = async () => {
            const { status, data } = await fetchPastQuiz();
            if (status == 200) {
                setPastQuizzes(data.data);
                setLoading(false);
                console.log(data.data);
            }
        }
        fetchPastQuizzes();
    }, [])
    const handleView = (quizId:any, quizTitle: any) => {
        console.log(quizTitle);
        setQuizTitle(quizTitle);
        setQuizId(quizId);
        setModalOpen(true);
    }
    return (
        <div className="flex flex-col p-2">
            {loading ?
                <div className="flex flex-col gap-4 w-full mt-5">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-16 w-full"></div>
                    <div className="skeleton h-16 w-full"></div>
                    <div className="skeleton h-8 w-full"></div>
                    <div className="skeleton h-8 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-2 w-full"></div>
                </div>
                :
                <>
                    <div className="flex flex-row">
                        <button className="btn bg-[#0284c7] text-white font-bold hover:bg-[#0e7490] ml-5 mt-5">Date Filter <TbFilterSearch /></button>
                    </div>
                    <div className="mt-5">
                        <div className={`grid ${screenWidth<1000?'grid-cols-1':'grid-cols-3'}`}>
                            {pastquizzes?.map((quiz: any, index: any) => (
                                <div className="shadow-md p-4 flex flex-col rounded-lg m-2" key={index}>
                                    <h1 className="text-sm font-bold text-[#075985] text-center">Quiz #{quiz.quiz_index} : {quiz.title}</h1>
                                    <h1 className="text-xs font-bold text-[#94a3b8] mt-1 text-center">{formatDateAndTime(quiz.created_at)}</h1>
                                    <a className="btn m-auto btn-xs font-bold btn-neutral text-white mt-5" onClick={()=>handleView(quiz.id, quiz.title)}><FaEye /> View</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {modalOpen && <PastQuizModal openModal={modalOpen} setOpenModal={setModalOpen} quizId={quizId} quizTitle={quizTitle}/>}
                </>
            }
        </div>
    )
}

export default PastQuizTable