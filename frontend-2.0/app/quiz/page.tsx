'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { fetchUser } from "../apis/fetchUser";

const QuizPage = () => {
    const { data } = useSession();
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState<any>(true);
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
        <div style={{ background: 'linear-gradient(45deg, #155e75, #06b6d4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div role="tablist" className="tabs tabs-lifted sm:tabs-sm tabs-xs mt-2 shadow-md p-2 bg-white rounded-lg">
                <a role="tab" className="tab">Q.1</a>
                <a role="tab" className="tab tab-active">Q.2</a>
                <a role="tab" className="tab">Q.3</a>
                <a role="tab" className="tab">Q.4</a>
                <a role="tab" className="tab tab-active">Q.5</a>
                <a role="tab" className="tab">Q.6</a>
                <a role="tab" className="tab">Q.7</a>
                <a role="tab" className="tab tab-active">Q.8</a>
                <a role="tab" className="tab">Q.9</a>
                <a role="tab" className="tab">Q.10</a>
            </div>
            <div className="flex flex-col sm:p-10 p-5 shadow-md rounded-lg mt-4 items-center" style={{ border: "2px solid #22d3ee" }}>
                <h1 className="text-white font-bold sm:text-xl m-auto">Who is the CM of India?</h1>
                <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 mt-3 p-5">
                    <div className="shadow-md rounded-lg p-4 flex flex-row bg-white">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info"
                        />
                        <label htmlFor={''} className="sm:text-sm text-xs ml-2 text-cyan-500 font-bold m-auto">Narendra Modi</label>
                    </div>
                    <div className="shadow-md rounded-lg p-4 flex flex-row bg-white">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info"
                        />
                        <label htmlFor={''} className="sm:text-sm text-xs ml-2 text-cyan-500 font-bold m-auto">Narendra Modi</label>
                    </div>
                    <div className="shadow-md rounded-lg p-4 flex flex-row bg-white">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info"
                        />
                        <label htmlFor={''} className="sm:text-sm text-xs ml-2 text-cyan-500 font-bold m-auto">Narendra Modi</label>
                    </div>
                    <div className="shadow-md rounded-lg p-4 flex flex-row bg-white">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-info"
                        />
                        <label htmlFor={''} className="sm:text-sm text-xs ml-2 text-cyan-500 font-bold m-auto">Narendra Modi</label>
                    </div>
                </div>
            </div>
            <button className="sm:mt-5 mt-2 btn btn-info text-white px-10">Submit</button>
        </div>
    )
}

export default QuizPage