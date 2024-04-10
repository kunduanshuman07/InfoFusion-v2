'use client'

import { useEffect, useState } from "react"
import LeaderboardCard from "../components/LeaderboardCard"
import LeaderboardHeader from "../components/LeaderboardHeader"
import UserLayout from "../container/UserLayout"
import { fetchLeaderboard } from "../server-actions/fetchLeaderboard"

const LeaderboardPage = () => {
    const [loading, setLoading] = useState<any>(true);
    const [leaderboard, setLeaderboard] = useState<any>();
    useEffect(() => {
        const fetchLeaderBoardData = async () => {
            const { status, data } = await fetchLeaderboard();
            if (status == 200) {
                setLeaderboard(data.data);
                setLoading(false);
            }
        }
        fetchLeaderBoardData();
    }, [])
    return (
        <div>
            <UserLayout />
            {loading ?
                <div className="flex flex-col gap-4 w-full mt-5 p-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-16 w-full"></div>
                    <div className="skeleton h-16 w-full"></div>
                    <div className="skeleton h-8 w-full"></div>
                    <div className="skeleton h-8 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-2 w-full"></div>
                </div>
                :
                <div className="flex flex-col p-4 w-full">
                    <p className="text-xs text-[#22d3ee] font-bold m-auto">QA: Quiz Attempts HS: Highest Score CA: Correct Answers</p>
                    <LeaderboardHeader />
                    {leaderboard?.map((leads: any, index: any)=>(
                        <LeaderboardCard key={index} rank={index+1} username={leads.username} rating={leads.rating} highest_score={leads.highest_score} attempts={leads.quiz_count} correct_answers={leads.correct_answers}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default LeaderboardPage