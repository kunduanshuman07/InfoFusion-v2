'use client'

import { fetchFullScorecard } from "@/app/apis/fetchFullScorecard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

interface ScorecardProps {
    modalOpen: any;
    setModalOpen: (modalOpen: any) => void;
    quizId: any;
    userId: any;
}

const ScorecardsTable: React.FC<ScorecardProps> = ({ modalOpen, setModalOpen, quizId, userId }) => {
    const [loading, setLoading] = useState<any>(true);
    const [scorecardsData, setScorecardsdata] = useState<any>();
    useEffect(() => {
        const fetchScorecardData = async () => {
            const { status, data } = await fetchFullScorecard({ userId, quizId });
            setScorecardsdata(data?.data?.[0]);
            setLoading(false);
        }
        fetchScorecardData();
    }, [quizId, userId])
    const handleClose = () => {
        setModalOpen(false);
    }
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
            <div className="modal-box flex flex-col w-11/12 max-w-5xl">
                <div className="overflow-x-auto flex">
                    {
                        loading ?
                            <div className='flex flex-row mx-auto my-2 p-5'>
                                <h1 className='mr-2'>Loading</h1>
                                <span className="loading loading-spinner loading-sm"></span>
                            </div>
                            :
                            <table className="table">
                                <thead>
                                    <tr className="bg-cyan-800 text-white text-xs font-bold text-center">
                                        <th>#</th>
                                        <th>Question</th>
                                        <th>Correct Ans</th>
                                        <th>Your Ans</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scorecardsData?.correct_answers.map((ques: any, index: any) => (
                                        <tr className="text-xs text-center" key={index}>
                                            <td>{index + 1}</td>
                                            <td>{ques[0]}</td>
                                            <td>{ques[1]}</td>
                                            <td>{ques[2]}</td>
                                        </tr>
                                    ))}
                                    {scorecardsData?.incorrect_answers.map((ques: any, index: any) => (
                                        <tr className="text-xs text-center" key={index}>
                                            <td>{scorecardsData?.correct_answers?.length + index + 1}</td>
                                            <td>{ques[0]}</td>
                                            <td>{ques[1]}</td>
                                            <td>{ques[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    }
                </div>
                <div className="modal-action flex flex-row">
                    <div className="flex flex-row">
                        <button className="btn btn-sm ml-4" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default ScorecardsTable