'use client'

import { fetchFullScorecard } from "@/app/apis/fetchFullScorecard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

const ScorecardsTable = () => {
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState<any>(true);
    const [scorecardsData, setScorecardsdata] = useState<any>();
    useEffect(() => {
        const fetchScorecardData = async () => {
            const [userId, quizId] = id.split('%2B');
            const { status, data } = await fetchFullScorecard({ userId, quizId });
            setScorecardsdata(data?.data[0]);
            setLoading(false);
        }
        fetchScorecardData();
    }, [id])
    return (
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
                                <th>Your Ans</th>
                                <th>Correct Ans</th>
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
    )
}

export default ScorecardsTable