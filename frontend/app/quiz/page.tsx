'use client'

import { useEffect, useState } from "react";
import LeaderBoard from "../components/LeaderBoard"
import QuizSelection from "../components/QuizSelection"
import UserLayout from "../container/UserLayout";
import { useSession } from "next-auth/react";
import { fetchUser } from "../server-actions/fetchUser";
const Quiz = () => {
  const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
  const {data} = useSession();
  const [user, setUser] = useState<any>();
  useEffect(()=>{
    const fetchUserData = async() => {
      const resp = await fetchUser({userId: data?.user?.email});
      if(resp.status===200){
        setUser(resp.data.user); 
      }
    }
    if(data!=null){
      fetchUserData();
    }
  },[data])
  return (
    <div>
      <UserLayout/>
      <div className={`grid ${screenWidth >1000 ? 'grid-cols-2': 'grid-cols-1'} gap-4 p-4`}>
      <QuizSelection user={user}/>
      {screenWidth>1000 && <LeaderBoard />}
    </div>
    </div>
  )
}

export default Quiz