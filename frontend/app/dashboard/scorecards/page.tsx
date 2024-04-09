'use client'

import React, { useEffect, useState } from 'react'
import UserLayout from '../../container/UserLayout'
import ScorecardTable from '../../components/ScorecardTable'
import { useSession } from 'next-auth/react'
import { fetchUser } from '@/app/server-actions/fetchUser'

const ScoreCards = () => {
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
        <ScorecardTable user={user}/>
    </div>
  )
}

export default ScoreCards