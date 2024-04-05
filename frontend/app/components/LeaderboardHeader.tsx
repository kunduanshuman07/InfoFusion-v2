'use client'
const LeaderboardHeader = () => {
  return (
    <div className="flex flex-row w-full m-auto rounded-lg bg-[#0891b2] text-white">
        <div className=" p-2 pl-4 pr-4 w-1/12 flex flex-row">
            <h1 className="text-center text-sm font-bold m-auto">Rank</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-1/12">
            <h1 className="text-center text-sm font-bold text-sm">Division</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-4/12">
            <h1 className="text-sm font-bold text-center">Username</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-2/12">
            <h1 className="text-sm font-bold text-center">Rating</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-2/12">
            <h1 className="text-sm font-bold text-center">Highest Score</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-2/12">
            <h1 className="text-sm font-bold text-center">Quiz Attempts</h1>
        </div>
        <div className=" p-2 pl-4 pr-4 w-2/12">
            <h1 className="text-sm font-bold text-center">Correct Answers</h1>
        </div>
    </div>
  )
}

export default LeaderboardHeader;