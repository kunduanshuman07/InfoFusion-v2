'use client'

import { useEffect, useState } from "react";
import LeaderBoard from "../components/LeaderBoard"
import QuizSelection from "../components/QuizSelection"
import UserLayout from "../container/UserLayout";
import { useSession } from "next-auth/react";
import { fetchUser } from "../server-actions/fetchUser";
const Quiz = () => {
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
      <div className="grid grid-cols-2 gap-4 p-4">
      <QuizSelection user={user}/>
      <LeaderBoard />
    </div>
    </div>
  )
}

export default Quiz