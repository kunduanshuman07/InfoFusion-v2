import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
const LeaderBoard = () => {
  return (
    <div className="overflow-x-auto p-5 rounded-lg shadow-md flex flex-col">
      <h1 className="text-center font-bold text-info text-xl">Leaderboard</h1>
      <div className="grid grid-cols-1 mt-5 ">
        <div className="p-2 bg-success text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
          <h1 className="font-bold border-b border-gray-200 text-xl"><GiPodiumWinner className="ml-auto mr-auto"/></h1>
          <h1 className="font-bold mt-2 text-sm">Username: kundu_anshuman</h1>
          <h1 className="font-bold text-sm">Score: 90/100</h1>
          <h1 className="font-bold text-sm">Time: 4.55 min</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="p-2 bg-secondary text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
          <h1 className="font-bold border-b border-gray-200 text-xl"><GiPodiumSecond className="ml-auto mr-auto"/></h1>
          <h1 className="font-bold mt-2 text-sm">Username: kundu_anshuman</h1>
          <h1 className="font-bold text-sm">Score: 90/100</h1>
          <h1 className="font-bold text-sm">Time: 4.55 min</h1>
        </div>
        <div className="p-2 bg-warning text-white ml-auto mr-auto mt-2 p-5 shadow-md rounded-lg">
          <h1 className="font-bold border-b border-gray-200 text-xl"><GiPodiumThird className="ml-auto mr-auto"/></h1>
          <h1 className="font-bold mt-2 text-sm">Username: kundu_anshuman</h1>
          <h1 className="font-bold text-sm">Score: 90/100</h1>
          <h1 className="font-bold text-sm">Time: 4.55 min</h1>
        </div>
      </div>
      <button className="btn btn-xs bg-white text-primary text-xs font-bold m-auto mt-5">View complete Leaderboard</button>
    </div>
  )
}

export default LeaderBoard