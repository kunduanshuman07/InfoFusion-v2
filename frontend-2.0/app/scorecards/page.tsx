'use client'

import { useEffect, useState } from "react";
import { fetchScorecards } from "../apis/fetchScorecards";
import { useSession } from "next-auth/react";
import { fetchUser } from "../apis/fetchUser";
import { formatDateAndTime } from "../utils/timeFormat";

const Scorecards = () => {
    const [loading, setLoading] = useState<any>(true);
    const [scorecardData, setScorecardData] = useState<any>([]);
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
    const formatIdForViewScore = (userId: string, quizId: string) => {
        const id = `${userId}+${quizId}`;
        return id;
    }
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
    return (
        <div className="overflow-x-auto flex">
            {loading ?
                <div className='flex flex-row mx-auto my-2 p-5'>
                    <h1 className='mr-2'>Loading</h1>
                    <span className="loading loading-spinner loading-sm"></span>
                </div>
                :
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
                                <td><a href={`/scorecards/${formatIdForViewScore(user?.id, scores.quiz_id)}`} className='text-cyan-400 font-bold' target="_blank">View</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Scorecards