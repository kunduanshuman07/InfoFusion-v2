'use client'
import { fetchCurrentQuiz } from '@/app/apis/fetchCurrentQuiz';
import { fetchEnability } from '@/app/apis/fetchQuizEnability';
import { fetchUser } from '@/app/apis/fetchUser';
import ContestInformation from '@/app/components/ContestInformation'
import ContestPrizes from '@/app/components/ContestPrizes'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const ContestPage = () => {
    const { data, status } = useSession();
    const [auth, setAuth] = useState<any>(false);
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
                setLoading(false);
            }
        }
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            fetchUserData();
            setAuth(true);
        }
    }, [status, data])
    useEffect(() => {
        const fetchQuizEnability = async () => {
            const { data } = await fetchEnability({ userId: user?.id, quizId });
            setEnability(data?.value);
            setLoading(false);
        }
        if (user?.id && quizId) {
            fetchQuizEnability();
        }
    }, [quizId, user?.id])
    return (
        <div className="flex flex-col">
            {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth &&
                <div style={{ margin: "auto auto" }}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className='p-4'>
                    <div className='flex flex-col'>
                        <ContestInformation user={user} quizLoading={quizloading} setQuizLoading={setQuizLoading} />
                        <ContestPrizes quizLoading={quizloading} enability={enability} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ContestPage