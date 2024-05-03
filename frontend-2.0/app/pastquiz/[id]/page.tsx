'use client'

import { fetchQuiz } from "@/app/apis/fetchCurrentQuiz";
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
                <div>
                    
                </div>
            }
        </div>
    )
}

export default PastQuiz