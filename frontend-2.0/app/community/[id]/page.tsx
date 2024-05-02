'use client'

import { addComment, fetchAllPostComments } from "@/app/apis/addComment";
import { fetchSinglePost } from "@/app/apis/fetchSinglePost";
import { fetchUser } from "@/app/apis/fetchUser";
import { formatDateAndTime } from "@/app/utils/timeFormat";
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { SiGooglekeep } from "react-icons/si";

const CommunityPost = () => {
    const commentsRef = useRef<any>(null);
    const { data, status } = useSession();
    const { id } = useParams();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    const [postData, setPostData] = useState<any>();
    const [commentData, setCommentData] = useState<any>('');
    const [allComments, setAllComments] = useState<any>();
    const [commentLoading, setCommentLoading] = useState<any>(false);
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const fetchCommunityPostData = async () => {
            const postResp = await fetchSinglePost({ id });
            const resp = await fetchUser({ userId: data?.user?.email });
            const commentResp = await fetchAllPostComments({post_id:id});
            if (resp.status === 200) {
                setUser(resp.data.user);
            }
            if (commentResp.status == 200) {
                setAllComments(commentResp?.data?.data);
            }
            if (postResp.status == 200) {
                setPostData(postResp?.data?.data);
                setLoading(false);
            }
        }
        if (status === 'unauthenticated') {
            setAuth(false);
            setLoading(false);
        }
        else {
            fetchCommunityPostData();
            setAuth(true);
        }
    }, [status, id, data])
    const handleAddComment = async () => {
        setCommentLoading(true);
        const commentResp = await addComment({ user_id: user?.id, username: user?.username, comment: commentData, post_id: id, comment_length: postData?.comments+1 });
        if (commentResp?.status == 200) {
            setAllComments(commentResp?.data?.data);
            setCommentData('');
            setCommentLoading(false);
            
        }
    }
    const handleUpvotes = async (state: any) => {
        if(state==='Add'){

        }
        else{

        }
    }
    return (
        <div className="flex flex-col">
            {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth &&
                <div style={{ margin: "auto auto" }}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="flex flex-col p-10">
                    <h1 className="text-cyan-600 font-bold text-3xl">{postData?.title}</h1>
                    <div className="flex flex-row mt-2">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10 my-auto">
                                <span className="text-xs">{postData?.username[0]}</span>
                            </div>
                        </div>
                        <div className="flex flex-col ml-2 my-auto">
                            <h1 className="text-sm text-cyan-800">{postData?.username}</h1>
                            <h1 className="text-xs text-slate-400 font-bold">{formatDateAndTime(postData?.created_at)}</h1>
                        </div>
                    </div>
                    <div className="flex flex-row bg-cyan-900 mt-2 rounded-lg mr-auto px-4 py-2">
                        {postData?.tag_one && <h1 className="text-xs text-white font-bold ">#{postData?.tag_one}</h1>}
                        {postData?.tag_two && <h1 className="text-xs text-white font-bold ml-2">#{postData?.tag_two}</h1>}
                    </div>
                    <div className="flex flex-row mt-6">
                        <button className="btn btn-xs ml-2" onClick={() => commentsRef?.current?.scrollIntoView({ behavior: 'smooth' })}><FaComments />{allComments?.length} Comments</button>
                        <button className="btn btn-xs ml-2"><SiGooglekeep />Save</button>
                    </div>
                    <h1 className="mt-10 text-slate-400 font-bold">Description</h1>
                    <div className="shadow-md rounded-lg p-4 mt-2 text-cyan-800">
                        <p dangerouslySetInnerHTML={{ __html: postData?.content }} />
                    </div>
                    {postData?.code
                        &&
                        <>
                            <h1 className="mt-8 text-slate-400 font-bold">Code Snippet</h1>
                            <div className="shadow-md rounded-lg p-4 mt-2 bg-neutral text-warning">
                                <pre style={{ overflowX: 'auto', whiteSpace: 'pre-wrap' }} className="text-xs">
                                    <code>{postData?.code}</code>
                                </pre>
                            </div>
                        </>
                    }
                    <h1 className="text-slate-400 font-bold mt-10">Comments</h1>
                    <div className="flex flex-col mt-2 p-5 sm:w-1/2 w-full" id="#comments" ref={commentsRef} style={{ border: "1px solid #94a3b8", borderRadius: "10px" }}>
                        <textarea className="textarea textarea-bordered" placeholder="Comment" onChange={(e) => setCommentData(e.target.value)} value={commentData}></textarea>
                        <button className="btn btn-sm bg-cyan-700 hover:bg-cyan-500 text-white font-bold mr-auto mt-2" onClick={handleAddComment}>Add Comment</button>
                        {commentLoading ? <span className="loading loading-dots loading-sm mt-4 mx-auto"></span> :
                            <>
                                <div className="mt-4">
                                    {allComments?.map((comments: any, index: any) => (
                                        <div className="bg-base-200 rounded-lg p-2 mt-4 flex flex-row" key={index}>
                                            <div className="avatar placeholder" style={{ marginBottom: "auto" }}>
                                                <div className="bg-neutral text-neutral-content rounded-full w-10 my-auto">
                                                    <span className="text-xs">{comments?.username[0]}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-2 my-auto">
                                                <h1 className="text-sm text-cyan-800">{comments?.username}</h1>
                                                <h1 className="text-xs text-slate-400 font-bold">{formatDateAndTime(comments?.created_at)}</h1>
                                                <p className="text-sm mt-2">{comments?.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default CommunityPost