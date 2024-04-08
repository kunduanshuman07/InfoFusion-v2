'use client'

import LeaderBoard from "../components/LeaderBoard"
import QuizSelection from "../components/QuizSelection"
import UserLayout from "../container/UserLayout";
const Quiz = () => {
  return (
    <div>
      <UserLayout/>
      <div className="grid grid-cols-2 gap-4 p-4">
      <QuizSelection />
      <LeaderBoard />
    </div>
    </div>
  )
}

export default Quiz