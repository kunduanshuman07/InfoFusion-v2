'use client'
import { fetchCurrentQuiz } from '@/app/apis/fetchCurrentQuiz';
import { fetchEnability } from '@/app/apis/fetchQuizEnability';
import { fetchUser } from '@/app/apis/fetchUser';
import ContestInformation from '@/app/components/ContestInformation'
import ContestPrizes from '@/app/components/ContestPrizes'
import LoginCard from '@/app/components/LoginCard';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaCaretLeft } from "react-icons/fa";

const ContestPage = () => {
    const { data, status } = useSession();
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<any>(true);
    const [quizloading, setQuizLoading] = useState<any>(true);
    const [quizId, setQuizId] = useState<any>();
    const [enability, setEnability] = useState<any>();
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            const resp2 = await fetchCurrentQuiz();
            if (resp.status === 200) {
                setUser(resp.data.user);
                setQuizId(resp2.data.quizId);
            }
        }
        if (data != null) {
            fetchUserData();
        }
    }, [data])
    useEffect(()=>{
        const fetchQuizEnability = async() => {
            const {status, data} = await fetchEnability({userId: user?.id, quizId});
            setEnability(data?.value);
            setLoading(false);
        }
        if(user?.id && quizId){
            fetchQuizEnability();
        }
    },[quizId, user?.id])
    return (
        <div className='flex flex-col w-full p-10'>
            {status==='unauthenticated'?<LoginCard text={'Daily Quiz'}/>:
                loading ?
                <div className='flex flex-row mx-auto my-2 p-5'>
                    <h1 className='mr-2'>Loading</h1>
                    <span className="loading loading-spinner loading-sm"></span>
                </div>
                :
                <>
                    <a href='/quizzes' className='text-xs bold text-cyan-500 flex font-bold'><FaCaretLeft className='my-auto' /> Back to Quiz</a>
                    <div className='flex sm:flex-row flex-col'>
                        <ContestInformation user={user} quizLoading={quizloading} setQuizLoading={setQuizLoading}/>
                        <ContestPrizes quizLoading={quizloading} enability={enability}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ContestPage