'use client'
import AdminNavbar from "@/app/components/AdminNavbar";
import { addQuizByAdmin } from "@/app/server-actions/addQuizByAdmin";
import { useState } from "react";
const QuizForm = () => {
  const [quizTitle, setQuizTitle] = useState<any>('');
  const [quizData, setQuizData] = useState<any>(Array.from({ length: 10 }, () => ({
    question: '',
    options: Array.from({ length: 4 }, () => ''),
    category: '',
    correctAnswer: '',
  })));

  const handleQuizTitleChange = (event: any) => {
    setQuizTitle(event.target.value);
  };

  const handleQuestionChange = (index: any, event: any) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].question = event.target.value;
    setQuizData(updatedQuizData);
  };

  const handleOptionChange = (index: any, optionIndex: any, event: any) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].options[optionIndex] = event.target.value;
    setQuizData(updatedQuizData);
  };

  const handleCategoryChange = (index: any, event: any) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].category = event.target.value;
    setQuizData(updatedQuizData);
  };

  const handleCorrectAnswerChange = (index: any, event: any) => {
    const updatedQuizData = [...quizData];
    updatedQuizData[index].correctAnswer = event.target.value;
    setQuizData(updatedQuizData);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await addQuizByAdmin({ quizTitle, quizData });
  };

  return (
    <>
      <AdminNavbar />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col w-full max-w-lg mt-2'>
          <label htmlFor='quizTitle' className='text-center mb-1'>Quiz Title</label>
          <input
            type='text'
            id='quizTitle'
            value={quizTitle}
            onChange={handleQuizTitleChange}
            placeholder='Type here'
            className='input input-sm input-bordered input-accent w-full mb-4'
          />
        </div>
        <div className="flex flex-row w-full">
          <form onSubmit={handleSubmit} className='w-full p-4'>
            {quizData.map((question: any, index: any) => (
              <div key={index} className='grid grid-cols-4 gap-2 p-4 border border-2 border-accent p-4'>
                <div className='flex flex-col'>
                  <label htmlFor={`question-${index}`} className='text-center text-xs mb-1'>Question {index + 1}</label>
                  <input
                    type='text'
                    id={`question-${index}`}
                    value={question.question}
                    onChange={(event) => handleQuestionChange(index, event)}
                    placeholder='Type here'
                    className='input input-xs input-bordered input-accent w-full'
                  />
                </div>
                <div className='flex flex-col'>
                  {[0, 1, 2, 3].map((optionIndex) => (
                    <input
                      key={optionIndex}
                      type='text'
                      value={question.options[optionIndex]}
                      onChange={(event) => handleOptionChange(index, optionIndex, event)}
                      placeholder={`Option ${optionIndex + 1}`}
                      className='input input-xs input-bordered input-accent w-full mt-1'
                    />
                  ))}
                </div>
                <div className='flex flex-col'>
                  <label htmlFor={`category-${index}`} className='text-center text-xs mb-1'>Category</label>
                  <input
                    type='text'
                    id={`category-${index}`}
                    value={question.category}
                    onChange={(event) => handleCategoryChange(index, event)}
                    placeholder='Type here'
                    className='input input-xs input-bordered input-accent w-full'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor={`correct-answer-${index}`} className='text-center text-xs mb-1'>Correct Answer</label>
                  <input
                    type='text'
                    id={`correct-answer-${index}`}
                    value={question.correctAnswer}
                    onChange={(event) => handleCorrectAnswerChange(index, event)}
                    placeholder='Type here'
                    className='input input-xs input-bordered input-accent w-full'
                  />
                </div>
              </div>
            ))}
            <div className='flex justify-center'>
              <button type='submit' className='btn btn-sm btn-accent text-white font-bold mt-2'>Submit Quiz</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuizForm;
