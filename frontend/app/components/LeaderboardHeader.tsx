'use client'
const LeaderboardHeader = () => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
  return (
    <div className="flex flex-row w-full m-auto rounded-lg bg-[#0891b2] text-white p-2">
        <div className="w-1/12 flex flex-row">
            <h1 className="text-center text-xs font-bold m-auto">Rank</h1>
        </div>
        <div className="w-5/12 flex">
            <h1 className="text-xs font-bold text-center m-auto m-auto">Username</h1>
        </div>
        <div className="w-2/12 flex">
            <h1 className="text-xs font-bold text-center m-auto">Rating</h1>
        </div>
        <div className="w-2/12 flex">
            <h1 className="text-xs font-bold text-center m-auto">HS</h1>
        </div>
        <div className="w-1/12 flex">
            <h1 className="text-xs font-bold text-center m-auto">QA</h1>
        </div>
        <div className="w-1/12 flex">
            <h1 className="text-xs font-bold text-center m-auto">CA</h1>
        </div>
    </div>
  )
}

export default LeaderboardHeader;