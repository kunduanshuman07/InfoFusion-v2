
const QuizSelection = () => {
  return (
    <div className="p-2 shadow-md rounded-lg flex flex-col">
      <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Date: 19.02.2024</span></h1>
      <h1 className="text-xs mt-2 text-gray-400 font-bold text-right"><span className="">Quiz #2</span></h1>
      <h1 className="text-center text-xl text-info font-bold">The Indian History</h1>
      <h1 className="text-md mt-5">Description</h1>
      <p className="text-xs bg-gray-100 rounded-lg p-2 mt-2">Welcome to the Indian History Quiz! How well do you know the rich and diverse history of India? Test your knowledge with this quiz that spans the ancient civilizations, medieval kingdoms, colonial periods, and the struggle for independence. From the Indus Valley Civilization to the Mughal Empire, and from the British Raj to the freedom movement led by Mahatma Gandhi, this quiz will take you on a journey through the milestones of the Indian past.<a className="text-xs text-primary ml-1" href="/quiz">Read more</a></p>
      <h1 className="text-xs mt-2 text-gray-400 font-bold"><span className="">Questions: 10</span><span className="ml-3">Maxmimum Marks: 100</span><span className="ml-3">Time: 5 minutes</span></h1>
      <h1 className="mt-5">Tags</h1>
      <div className="flex flex-row mt-2 mb-3">
        <button className="btn btn-xs btn-neutral text-white font-bold">#InfoFusion</button>
        <button className="btn btn-xs ml-2 btn-neutral text-white font-bold">#History</button>
        <button className="btn btn-xs ml-2 btn-neutral text-white font-bold">#Social Studies</button>
        <h1 className="italic text-error text-xs text-center ml-auto">Quiz ends in 12:00</h1>
      </div>
      <button className="btn btn-neutral m-auto mt-10 mb-2 btn-outline">Start Quiz</button>
    </div>
  )
}

export default QuizSelection