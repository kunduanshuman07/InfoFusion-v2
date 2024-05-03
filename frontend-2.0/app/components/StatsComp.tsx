'use client'

import LineChart from "./LineChart";

interface StatsProps {
  userCount: any;
  leaderboardRank: any;
  dashboard: any;
  leaderboard: any;
}

const StatsComp: React.FC<StatsProps> = ({ userCount, leaderboardRank, dashboard, leaderboard }) => {
  return (
    <div className="sm:w-2/3 w-full sm:ml-2 p-2 rounded-lg sm:mt-0 mt-4 flex flex-col">
      <div className="flex sm:flex-row flex-col w-full">
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg sm:mr-1">
          <h1 className="text-amber-600">Quiz Rating</h1>
          <h1 className="font-bold  text-amber-600  text-2xl mt-2 ">{dashboard?.rating}</h1>
          <h1 className=" text-xs text-amber-600 mt-2 ">Highest Score of {dashboard?.highest_score}</h1>
        </div>
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg sm:mr-1 sm:mt-0 mt-2">
          <h1 className="text-cyan-800">Rank</h1>
          <h1 className="font-bold text-cyan-800 text-2xl mt-2 ">{leaderboardRank}</h1>
          <h1 className="text-cyan-800 text-xs mt-2 ">Out of {userCount} users</h1>
        </div>
        <div className="sm:w-1/3 w-full shadow-md flex flex-col items-center p-5 rounded-lg sm:mr-1 sm:mt-0 mt-2">
          <h1 className="text-rose-600">Quiz Attended</h1>
          <h1 className="font-bold text-rose-600 text-2xl mt-2 ">{dashboard?.quiz_count}</h1>
          <h1 className="text-rose-600 text-xs mt-2 ">As of Today</h1>
        </div>
      </div>
      <div className="flex flex-col w-full mt-2">
        <h1 className="font-bold text-sm m-auto mt-4">Rating Graph</h1>
        <LineChart graph={dashboard?.rating_graph} />
      </div>
      <div className="overflow-x-auto mt-4 shadow-md rounded-lg">
      <h1 className="font-bold text-sm m-auto mt-4 text-center">Leaderboard</h1>
        <table className="table mt-2">
          <thead>
            <tr className="text-sm font-bold bg-slate-300 text-neutral ">
              <th>Rank</th>
              <th>Username</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs font-bold bg-amber-500 text-white ">
              <td>★1</td>
              <td>{leaderboard[0].username}</td>
              <td>{leaderboard[0].rating}</td>
            </tr>
            <tr className="text-xs font-bold bg-slate-500 text-white ">
              <td>★2</td>
              <td>{leaderboard[1].username}</td>
              <td>{leaderboard[1].rating}</td>
            </tr>
            <tr className="text-xs font-bold bg-amber-700 text-white ">
              <td>★3</td>
              <td>{leaderboard[2].username}</td>
              <td>{leaderboard[2].rating}</td>
            </tr>
            <tr className="text-xs font-bold bg-cyan-800 text-white ">
              <td>You: Rank ✦{leaderboardRank}</td>
              <td>{dashboard.username}</td>
              <td>{dashboard.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StatsComp