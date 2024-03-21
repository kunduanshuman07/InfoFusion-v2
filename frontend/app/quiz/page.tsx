import LeaderBoard from "../components/LeaderBoard"
import QuizSelection from "../components/QuizSelection"

const Quiz = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <QuizSelection/>
      <LeaderBoard/>
    </div>
  )
}

export default Quiz