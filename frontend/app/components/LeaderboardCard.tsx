'use client'
import { GiDiamondTrophy } from "react-icons/gi";
import { GiLaurelsTrophy } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";

interface LeaderboardCardProps{
    rank: any;
    username: any;
    rating: any;
    highest_score: any;
    attempts: any;
    correct_answers: any;
}
const LeaderboardCard:React.FC<LeaderboardCardProps> = ({rank, username, rating, highest_score, attempts, correct_answers}) => {
  return (
    <div className="flex flex-row w-full mt-4 shadow-md rounded-lg">
        <div className={`p-2 pl-4 pr-4 w-1/12 flex flex-row ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>
            <h1 className="text-center m-auto font-bold text-xs">{rank}</h1>
            {rank===1? <GiDiamondTrophy className="mt-auto mb-auto mr-auto"/>: rank===2? <GiLaurelsTrophy className="mt-auto mb-auto mr-auto"/>: rank===3? <GiTrophyCup className="mt-auto mb-auto mr-auto"/>: ''}
        </div>
        <div className="p-2 pl-4 pr-4 w-5/12 flex">
            <h1 className={`m-auto text-xs ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>{username}</h1>
        </div>
        <div className="p-2 pl-4 pr-4 w-2/12 flex">
            <h1 className={`m-auto text-xs ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>{rating}</h1>
        </div>
        <div className="p-2 pl-4 pr-4 w-2/12 flex">
            <h1 className={`m-auto text-xs ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>{highest_score}</h1>
        </div>
        <div className="p-2 pl-4 pr-4 w-1/12 flex">
            <h1 className={`m-auto text-xs ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>{attempts}</h1>
        </div>
        <div className="p-2 pl-4 pr-4 w-1/12 flex">
            <h1 className={`m-auto text-xs ${rank===1?'text-[#f59e0b] font-bold': rank===2? 'text-[#92400e] font-bold':rank===3?'text-[#64748b] font-bold': ''}`}>{correct_answers}</h1>
        </div>
    </div>
  )
}

export default LeaderboardCard;