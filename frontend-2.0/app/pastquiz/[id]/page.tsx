'use client'

import { fetchQuiz } from "@/app/apis/fetchCurrentQuiz";
import { formatDateAndTime } from "@/app/utils/timeFormat";
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PastQuiz = () => {
    const { status } = useSession();
    const {id} = useParams();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    const [quizData, setQuizData] = useState<any>([]);
    console.log(quizData);
    useEffect(()=>{
        const fetchQuizData = async() => {
            const quizResp = await fetchQuiz({quizId: id});
            setQuizData(quizResp?.data);
            setLoading(false);
        }
        if(status==='unauthenticated'){
            setAuth(false);
            setLoading(false);
        }
        else{
            fetchQuizData();
            setAuth(true);
        }
    },[status, id]);
    return (
        <div className="flex flex-col">
            {loading && <div style={{margin: "auto auto"}}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth && 
                <div style={{margin: "auto auto"}}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="sm:p-10 p-4 flex flex-col">
                    <h1 className="text-cyan-600 font-bold text-xl">Quiz: {quizData?.quizTitle}</h1>
                    <h1 className="text-xs text-slate-400 font-bold mt-1">{formatDateAndTime(quizData?.quizDate)}</h1>
                    <p className="text-xs bg-cyan-800 text-white mt-2 p-4 rounded-lg">{quizData?.quizDesc}</p>
                    <a className="mt-1 text-xs text-cyan-500 font-bold hover:underline mb-2" href={quizData?.descLink}>Read More</a>
                    {quizData?.quizData?.map((question: any, index: any)=>(
                        <div key={index} className="shadow-md p-4 rounded-lg flex flex-col mt-2">
                            <h1>Q{index+1}. {question?.title}</h1>
                            <h1 className="text-xs font-bold bg-cyan-800 mt-2 px-4 text-white mr-auto rounded-lg py-1">Category: {question?.category}</h1>
                            <h1 className="text-sm text-cyan-600 mt-2 font-bold">Options:</h1>
                            {question?.options?.map((option: any, index: any)=>(
                                <h1 key={index} className="text-slate-500 font-bold text-xs mt-2">{index+1}. {option}</h1>
                            ))}
                            <h1 className="text-sm font-bold text-cyan-800 mt-2">Correct Answer: {question?.correct_answer}</h1>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default PastQuiz