'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComments } from "react-icons/fa6";
import { SiGooglekeep } from "react-icons/si";
import { fetchCommunityPosts } from "../apis/fetchCommunityPosts";
import { formatDateAndTime } from "../utils/timeFormat";
const CommunityPosts = () => {
    const { status } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    const [posts, setPosts] = useState<any>([]);
    useEffect(() => {
        const fetchPostsData = async () => {
            const postsResp = await fetchCommunityPosts();
            if (postsResp.status == 200) {
                setPosts(postsResp?.data?.data);
                setLoading(false);
            }
        }
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            fetchPostsData();
            setAuth(true);
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
                    {posts?.map((post: any, index: any) => (
                        <div className="flex flex-col shadow-md sm:w-1/2 w-full rounded-lg p-4 mt-2 cursor-pointer" key={index}>
                            <div className="flex flex-row">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-10 my-auto">
                                        <span className="text-xs">{post?.username[0]}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-2 my-auto">
                                    <h1 className="text-sm text-cyan-800">{post?.username}</h1>
                                    <h1 className="text-xs text-slate-400 font-bold">{formatDateAndTime(post?.created_at)}</h1>
                                </div>
                            </div>
                            <a className="font-bold text-cyan-700 mt-2 mx-auto text-lg hover:text-cyan-500" href={`community/${post?.id}`}>{post?.title}</a>
                            <div className="flex flex-row mx-auto">
                                {post?.tag_one && <h1 className="text-xs text-slate-400 font-bold mt-2 ">#{post?.tag_one}</h1>}
                                {post?.tag_two && <h1 className="text-xs text-slate-400 font-bold mt-2 ml-1">#{post?.tag_two}</h1>}
                            </div>
                        </div>

                    ))}
                </div>
            }
        </div>
    )
}

export default CommunityPosts