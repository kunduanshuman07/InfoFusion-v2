'use client'

import LineChart from "./LineChart";

interface StatsProps {
  userCount: any;
  leaderboardRank: any;
  dashboard: any;
}

const StatsComp: React.FC<StatsProps> = ({ userCount, leaderboardRank, dashboard }) => {
  return (
    <div className="sm:w-2/3 w-full sm:ml-2 p-2 rounded-lg sm:mt-0 mt-4 flex flex-col">
      <div className="flex sm:flex-row flex-col w-full">
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg bg-amber-600 sm:mr-1">
          <h1 className="text-white">Quiz Rating</h1>
          <h1 className="font-bold text-white text-2xl mt-2 ">{dashboard?.rating}</h1>
          <h1 className="text-white text-xs mt-2 ">Highest Score of {dashboard?.highest_score}</h1>
        </div>
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg bg-teal-600 sm:mr-1 sm:mt-0 mt-2">
          <h1 className="text-white">Rank</h1>
          <h1 className="font-bold text-white text-2xl mt-2 ">{leaderboardRank}</h1>
          <h1 className="text-white text-xs mt-2 ">Out of {userCount} users</h1>
        </div>
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg bg-rose-600 sm:mr-1 sm:mt-0 mt-2">
          <h1 className="text-white">Quiz Attended</h1>
          <h1 className="font-bold text-white text-2xl mt-2 ">{dashboard?.quiz_count}</h1>
          <h1 className="text-white text-xs mt-2 ">As of Today</h1>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col w-full mt-2">
        <div className="w-full shadow-md flex flex-row items-center p-5 rounded-lg">
          <div className="flex flex-col w-1/2 items-center">
            <h1 className="text-xs font-bold">Solved Problems</h1>
            <h1 className="mt-4 rounded-full sm:p-10 p-5 text-cyan-800 font-bold text-3xl" style={{ border: "4px solid #94a3b8" }}>{dashboard?.questions}</h1>
          </div>
          <div className="flex flex-col w-1/2 items-center">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1 className="text-xs font-bold text-slate-400 mr-auto">Easy</h1>
                <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.easy}/{dashboard?.quiz_count*3}</h1>
              </div>
              <progress className="progress progress-success sm:w-72 w-32" value={dashboard?.easy} max={dashboard?.quiz_count*3}></progress>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row">
                <h1 className="text-xs font-bold text-slate-400 mr-auto">Medium</h1>
                <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.med}/{dashboard?.quiz_count*3}</h1>
              </div>
              <progress className="progress progress-info sm:w-72 w-32" value={dashboard?.med} max={dashboard?.quiz_count*3}></progress>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row">
                <h1 className="text-xs font-bold text-slate-400 mr-auto">Hard</h1>
                <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.hard}/{dashboard?.quiz_count*2}</h1>
              </div>
              <progress className="progress progress-warning sm:w-72 w-32" value={dashboard?.hard} max={dashboard?.quiz_count*2}></progress>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row">
                <h1 className="text-xs font-bold text-slate-400 mr-auto">Misc</h1>
                <h1 className="ml-auto text-xs font-bold text-slate-500">{dashboard?.misc}/{dashboard?.quiz_count*2}</h1>
              </div>
              <progress className="progress progress-error sm:w-72 w-32" value={dashboard?.misc} max={dashboard?.quiz_count*2}></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-2">
        <h1 className="font-bold text-sm m-auto mt-4">Rating Graph</h1>
        <LineChart graph={dashboard?.rating_graph}/>
      </div>
    </div>
  )
}

export default StatsComp