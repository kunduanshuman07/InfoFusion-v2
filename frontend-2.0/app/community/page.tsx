'use client'

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import CommunityHeader from "../components/CommunityHeader";
import CommunityPosts from "../components/CommunityPosts";

const CommunityPage = () => {
    const { status } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [auth, setAuth] = useState<any>(false);
    useEffect(()=>{
        if(status==='unauthenticated'){
            setAuth(false);
            setLoading(false);
        }
        else{
            setAuth(true);
            setLoading(false);
        }
    },[status])
    return (
        <div className="flex flex-col">
            {loading && <div style={{margin: "auto auto"}}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
            {!loading && !auth && 
                <div style={{margin: "auto auto"}}>
                    <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
                </div>
            }
            {!loading && auth &&
                <div className="flex flex-col">
                    <CommunityHeader/>
                    <CommunityPosts/>
                </div>
            }
        </div>
    )
}

export default CommunityPage