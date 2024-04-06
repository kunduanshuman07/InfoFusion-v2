'use client'
import { useState } from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { useEffect } from "react";
import { fetchLeaderboard } from "../server-actions/fetchLeaderboard";
const LeaderBoard = () => {
  const [loading, setLoading] = useState<any>(true);
  const [leaderboard, setLeaderboard] = useState<any>();
  useEffect(() => {
    const fetchLeaderBoardData = async () => {
      const {status, data} = await fetchLeaderboard();
      if(status==200){
        setLeaderboard(data.data);
        setLoading(false);
      }
    }
    fetchLeaderBoardData();
  }, [])
  return (
    <div className="overflow-x-auto p-2 rounded-lg shadow-md flex flex-col">
      {loading ? <div className="flex flex-col gap-4 w-full p-4">
        <div className="skeleton h-28 w-full"></div>
        <div className="skeleton h-20 w-full"></div>
        <div className="skeleton h-20 w-full"></div>
        <div className="skeleton h-20 w-full"></div>
      </div>
        :
        <>
          <h1 className="text-center font-bold text-[#0891b2] m-auto pl-10 pr-10 rounded-lg text-xl flex flex-row"><GiDiamondTrophy className="m-auto mr-2" /> Leaderboard</h1>
          <div className="grid grid-cols-1 mt-5 ">
            <div className="p-2 bg-[#0891b2] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#facc15]"><GiPodiumWinner className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">{leaderboard[0].username}</h1>
              <h1 className="font-bold text-xs text-center">Rating: {leaderboard[0].rating}</h1>
              <h1 className="font-bold text-xs text-center">Highest Score: {leaderboard[0].highest_score}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="p-2 bg-[#0891b2] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#f87171]"><GiPodiumSecond className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">{leaderboard[1].username}</h1>
              <h1 className="font-bold text-xs text-center">Rating: {leaderboard[1].rating}</h1>
              <h1 className="font-bold text-xs text-center">Highest Score: {leaderboard[1].highest_score}</h1>
            </div>
            <div className="p-2 bg-[#0891b2] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#d4d4d4]"><GiPodiumThird className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">{leaderboard[2]?.username}</h1>
              <h1 className="font-bold text-xs text-center">Rating: {leaderboard[2]?.rating}</h1>
              <h1 className="font-bold text-xs text-center">Highest Score: {leaderboard[2]?.highest_score}</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <a className="btn text-xs m-auto btn-xs text-[#0891b2] bg-[#ecfeff] pl-10 pr-10 hover:bg-[#e0f2fe] mt-7" href="/leaderboard"><MdLeaderboard /> View complete Leaderboard</a>
          </div>
        </>
      }

    </div>
  )
}

export default LeaderBoard