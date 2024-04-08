'use client'
import { TbFilterSearch } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchScorecards } from "../server-actions/fetchScorecards";
import { formatDateAndTime } from "../utils/timeFormat";
const ScorecardTable = () => {
    const [loading, setLoading] = useState<any>(true);
    const [user, setUser] = useState<any>();
    const [scorecardData, setScorecardData] = useState<any>([]);
    useEffect(() => {
        const fetchScorecardsData = async () => {
            if (typeof window !== 'undefined') {
                const userString = window !== undefined && window.localStorage.getItem("User");
                const user = userString ? JSON.parse(userString) : null;
                setUser(user);
                const { status, data } = await fetchScorecards({ userId: user.id });
                if (status == 200) {
                    console.log(data.data);
                    setScorecardData(data.data);
                    setLoading(false);
                }
            }
        }
        fetchScorecardsData();
    }, [])
    const formatIdForViewScore = (userId: string, quizId: string) => {
        const id = `${userId}+${quizId}`;
        return id;
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
                        <div className="grid grid-cols-3">
                            {scorecardData?.map((scorecards: any, index: any) => (
                                <div className="shadow-md p-4 flex flex-col rounded-lg m-2" key={index}>
                                    <h1 className="text-sm font-bold text-[#075985] text-center">Quiz #{scorecards.quiz_index} : {scorecards.quiz_title}</h1>
                                    <h1 className="text-xs font-bold text-[#94a3b8] mt-1 text-center">{formatDateAndTime(scorecards.submission_time)}</h1>
                                    <div className="grid grid-cols-1 w-full mt-3">
                                        <button className="btn m-auto btn-xs pl-5 pr-5 font-bold btn-accent text-white mt-2">Score: {scorecards.total_score}</button>
                                    </div>
                                    <a className="btn m-auto btn-xs font-bold btn-neutral text-white mt-5" href={`/dashboard/scorecards/${formatIdForViewScore(user.id, scorecards.quiz_id)}`} target="_blank"><FaEye /> View Scorecard</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ScorecardTable