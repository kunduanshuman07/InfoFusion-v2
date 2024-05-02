'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComments } from "react-icons/fa6";
import { SiGooglekeep } from "react-icons/si";
const CommunityPosts = () => {
    const { status } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    useEffect(() => {
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            setAuth(true);
            setLoading(false);
        }
    }, [status])
    return (
        <div className="flex flex-col">
            {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth &&
                <div style={{ margin: "auto auto" }}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="flex flex-col items-center p-2">
                    <div className="flex flex-col shadow-md sm:w-1/2 w-full rounded-lg p-4 mt-2 cursor-pointer">
                        <div className="flex flex-row">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-10 my-auto">
                                    <span className="text-xs">A</span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-2 my-auto">
                                <h1 className="text-sm text-cyan-800">Anshuman</h1>
                                <h1 className="text-xs text-slate-400 font-bold">Apr 27</h1>
                            </div>
                        </div>
                        <a className="font-bold text-cyan-700 mt-2 mx-auto text-lg hover:text-cyan-500">Top 50 System Design Interview Questions</a>
                        <div className="flex flex-row mx-auto">
                            <h1 className="text-xs text-slate-400 font-bold mt-2 ">#Programming</h1>
                            <h1 className="text-xs text-slate-400 font-bold mt-2 ml-1">#Development</h1>
                        </div>
                        <div className="flex flex-row mt-4">
                            <button className="btn btn-xs"><BiSolidUpvote/> 10 Upvotes</button>
                            <button className="btn btn-xs ml-2 mr-auto"><FaComments/>25 Comments</button>
                            <button className="btn btn-xs ml-auto"><SiGooglekeep/></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CommunityPosts