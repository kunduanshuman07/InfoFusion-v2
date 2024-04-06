'use client'

import { useEffect, useState } from "react";
import { fetchQuiz } from "../server-actions/fetchQuizById";
interface PastQuizModalProps {
    openModal: any;
    setOpenModal: (openModal: any) => void;
    quizId: any;
    quizTitle: any;
}

const PastQuizModal: React.FC<PastQuizModalProps> = ({ openModal, setOpenModal, quizId, quizTitle }) => {
    console.log(quizTitle);
    const [loading, setLoading] = useState<any>(true);
    const [quizData, setQuizData] = useState<any>(false);

    const handleClose = () => {
        setOpenModal(false);
    }
    useEffect(() => {
        const fetchQuizData = async () => {
            const { status, data } = await fetchQuiz({ quizId });
            if (status == 200) {
                setQuizData(data.quizData);
                setLoading(false);
            }
        }
        fetchQuizData();
    }, [])
    return (
        <dialog id="my_modal_1" className={`modal modal-${openModal ? 'open' : 'close'}`}>
            <div className={`modal-box w-11/12 max-w-5xl ${loading?'p-4': 'p-0'}`}>
                {loading ?
                    <div className="flex flex-row">
                        <h1 className="ml-auto">Loading .. </h1>
                        <span className="loading loading-ring loading-md ml-1 mr-auto"></span>
                    </div>
                    :
                    <>
                        <div className="w-full">
                            <div className="overflow-x-auto">
                                <div className="flex flex-row p-2">
                                    <h1 className="m-auto font-bold">{quizTitle}</h1>
                                    <button className="btn btn-sm btn-neutral" onClick={handleClose}>x</button>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr className="bg-[#0891b2] text-white font-bold">
                                            <th>#</th>
                                            <th>Question</th>
                                            <th>Category</th>
                                            <th>Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizData?.map((question:any, index: any)=>(
                                            <tr key={index} className="text-xs">
                                            <th>{index+1}</th>
                                            <td>{question.title}</td>
                                            <td>{question.category}</td>
                                            <td>{question.correct_answer}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                }
            </div>
        </dialog>
    )
}

export default PastQuizModal