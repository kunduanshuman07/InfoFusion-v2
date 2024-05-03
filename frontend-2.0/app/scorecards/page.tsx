'use client'

import { useEffect, useState } from "react";
import { fetchScorecards } from "../apis/fetchScorecards";
import { useSession } from "next-auth/react";
import { fetchUser } from "../apis/fetchUser";
import { formatDateAndTime } from "../utils/timeFormat";
import ScorecardsTable from "../components/ScorecardTable";

const Scorecards = () => {
    const [loading, setLoading] = useState<any>(true);
    const [scorecardData, setScorecardData] = useState<any>([]);
    const [scorecardModal, setScorecardModal] = useState<any>(false);
    const [quizId, setQuizId] = useState<any>();
    const { data } = useSession();
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            if (resp.status === 200) {
                setUser(resp.data.user);
            }
        };

        if (data && data.user && !user) {
            fetchUserData();
        }
    }, [data, user]);
    useEffect(() => {
        const fetchScorecardsData = async () => {
            const { status, data } = await fetchScorecards({ userId: user?.id });
            if (status === 200) {
                console.log(data);
                setScorecardData(data.data);
                setLoading(false);
            }
        };

        if (user) {
            fetchScorecardsData();
        }
    }, [user]);
    const handleScorecard = (quizId: any) => {
        setQuizId(quizId);
        setScorecardModal(true);
    }
    return (
        <div className="overflow-x-auto flex">
            {loading ?
                <div className='flex flex-row mx-auto my-2 p-5'>
                    <h1 className='mr-2'>Loading</h1>
                    <span className="loading loading-spinner loading-sm"></span>
                </div>
                :
                scorecardData.length===0?<div className='flex flex-row mx-auto my-2 p-5'>
                <h1 className='mr-2 text-cyan-800 font-bold'>Attempt a quiz to view scorecards!</h1>
            </div>:
                <table className="table">
                    <thead>
                        <tr className='bg-cyan-700 text-slate-200 text-center'>
                            <th>#</th>
                            <th>Date</th>
                            <th>Quiz</th>
                            <th>Score</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scorecardData?.map((scores: any, index: any) => (
                            <tr className={`text-center text-xs ${index===0?'bg-amber-100': ''}`} key={index}>
                                <td>{index+1}</td>
                                <td>{formatDateAndTime(scores?.submission_time)}</td>
                                <td>{scores?.quiz_title}</td>
                                <td>{scores?.score}</td>
                                <td><button className='text-cyan-400 font-bold' onClick={()=>handleScorecard(scores.quiz_id)}>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            {scorecardModal && <ScorecardsTable modalOpen={scorecardModal} setModalOpen={setScorecardModal} quizId={quizId} userId={user.id}/>}
        </div>
    )
}

export default Scorecards