'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { userQuizzes } from "../apis/userQuizzes";
import { fetchUser } from "../apis/fetchUser";

const MyQuizzes = () => {
    const { data, status } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    const [myquizdata, setMyQuizData] = useState<any>([]);
    useEffect(() => {
        const fetchUserData = async () => {
            const resp = await fetchUser({ userId: data?.user?.email });
            const quizResp = await userQuizzes({ user_id: resp?.data?.user?.id });
            setMyQuizData(quizResp?.data?.data);
            setLoading(false);
        }
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            fetchUserData();
            setAuth(true);
        }
    }, [status, data]);
    return (
        <div className="flex flex-col">
            {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth &&
                <div style={{ margin: "auto auto" }}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="sm:p-10 p-4 flex flex-col">
                    {myquizdata?.length === 0 ? <div className='flex flex-row mx-auto my-2 p-5'>
                        <h1 className='mr-2 text-cyan-800 font-bold'>Attempt a quiz to view your Quiz Attempts!</h1>
                    </div> :
                        <>
                            <h1 className="text-xl text-center mb-4 text-cyan-700 font-bold">My Quizzes</h1>
                            <div className="overflow-x-auto shadow-md rounded-lg">
                                <table className="table">
                                    <thead>
                                        <tr className="text-sm bg-cyan-700 text-white">
                                            <th className="text-center">#</th>
                                            <th className="text-center">Quiz</th>
                                            <th className="text-center">Wt Score</th>
                                            <th className="text-center">Correct Ans</th>
                                            <th className="text-center">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myquizdata?.map((quiz: any, index: any) => (
                                            <tr key={index} className="text-xs font-bold">
                                                <td className="text-center">{index + 1}</td>
                                                <td className="text-center">{quiz?.quiz_title}</td>
                                                <td className="text-center">{quiz?.total_score}</td>
                                                <td className="text-center">{quiz?.correct_answers?.length}/10</td>
                                                <td className="text-cyan-500 text-center"><a className="cursor-pointer hover:underline" href={`/pastquiz/${quiz?.quiz_id}`}>View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    )
}

export default MyQuizzes