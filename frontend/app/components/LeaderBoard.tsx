'use client'
import { useState } from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { useEffect } from "react";
const LeaderBoard = () => {
  const [loading, setLoading] = useState<any>(true);
  useEffect(() => {
    setLoading(false);
  },[])
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
          <h1 className="text-center font-bold text-[#1e3a8a] m-auto pl-10 pr-10 rounded-lg text-xl flex flex-row"><GiDiamondTrophy className="m-auto" /> Leaderboard</h1>
          <div className="grid grid-cols-1 mt-5 ">
            <div className="p-2 bg-[#0c4a6e] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#facc15]"><GiPodiumWinner className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">kundu_anshuman</h1>
              <h1 className="font-bold text-sm text-center">Score: 90/100</h1>
              <h1 className="font-bold text-sm text-center">Time: 4.55 min</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="p-2 bg-[#0c4a6e] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#f87171]"><GiPodiumSecond className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">kundu_anshuman</h1>
              <h1 className="font-bold text-sm text-center">Score: 90/100</h1>
              <h1 className="font-bold text-sm text-center">Time: 4.55 min</h1>
            </div>
            <div className="p-2 bg-[#0c4a6e] text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
              <h1 className="font-bold border-b border-gray-200 text-xl text-[#d4d4d4]"><GiPodiumThird className="ml-auto mr-auto" /></h1>
              <h1 className="font-bold mt-2 text-sm text-center">kundu_anshuman</h1>
              <h1 className="font-bold text-sm text-center">Score: 90/100</h1>
              <h1 className="font-bold text-sm text-center">Time: 4.55 min</h1>
            </div>
          </div>
          <button className="btn text-xs m-auto btn-xs text-[#0ea5e9] bg-[#e0f2fe] pl-10 pr-10 hover:bg-[#e0f2fe] mt-7"><MdLeaderboard /> View complete Leaderboard</button>
        </>
      }

    </div>
  )
}

export default LeaderBoard