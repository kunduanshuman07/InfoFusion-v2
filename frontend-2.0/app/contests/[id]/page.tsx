'use client'
import { fetchUser } from '@/app/apis/fetchUser';
import ContestInformation from '@/app/components/ContestInformation'
import ContestPrizes from '@/app/components/ContestPrizes'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaCaretLeft } from "react-icons/fa";

const ContestPage = () => {
    const { data } = useSession();
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<any>(true);
    const [quizloading, setQuizLoading] = useState<any>(true);
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            if (resp.status === 200) {
                setUser(resp.data.user);
                setLoading(false);
            }
        }
        if (data != null) {
            fetchUserData();
        }
    }, [data])
    return (
        <div className='flex flex-col w-full p-10'>
            {loading ?
                <div className='flex flex-row mx-auto my-2 p-5'>
                    <h1 className='mr-2'>Loading</h1>
                    <span className="loading loading-spinner loading-sm"></span>
                </div>
                :
                <>
                    <a href='/contests' className='text-xs bold text-cyan-500 flex font-bold'><FaCaretLeft className='my-auto' /> Back to Quiz</a>
                    <div className='flex sm:flex-row flex-col'>
                        <ContestInformation user={user} quizLoading={quizloading} setQuizLoading={setQuizLoading}/>
                        <ContestPrizes quizLoading={quizloading}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ContestPage