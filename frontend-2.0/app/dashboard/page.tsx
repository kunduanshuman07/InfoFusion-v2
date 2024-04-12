'use client'

import { useEffect, useState } from "react";
import ProfileComp from "../components/ProfileComp"
import StatsComp from "../components/StatsComp"
import { useSession } from "next-auth/react";
import { fetchUser } from "../apis/fetchUser";
import { fetchDashboard } from "../apis/fetchDashboard";
import { fetchLeaderboard } from "../apis/fetchLeaderboard";
import LoginCard from "../components/LoginCard";

const Dashboard = () => {
  const { data, status } = useSession();
  const [loading, setLoading] = useState<any>(true);
  const [dashboard, setDashboard] = useState<any>();
  const [leaderboardRank, setLeaderboardRank] = useState<any>();
  const [userCount, setUserCount] = useState<any>();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const fetchUserData = async () => {
      const resp = await fetchUser({ userId: data?.user?.email });
      if (resp.status === 200) {
        setUser(resp.data.user);
      }
    }
    if (data != null) {
      fetchUserData();
    }
  }, [data])
  useEffect(() => {
    const fetchDashboardData = async () => {
      const { status, data } = await fetchDashboard({ userId: user.id });
      const leaderBoardResp = await fetchLeaderboard();
      if (status == 200 && leaderBoardResp.status == 200) {
        setDashboard(data.data);
        setUserCount(leaderBoardResp.data.data.length);
        leaderBoardResp.data.data.map((users: any, index: any) => {
          if (users.user_id === user.id) {
            setLeaderboardRank(index + 1);
          }
        })
        setLoading(false);
      }
    }
    if (user) {
      fetchDashboardData();
    }
  }, [user])
  return (
    <div className='flex flex-col p-5 w-full'>
      {status==='unauthenticated'?<LoginCard text={'Dashboard'}/>:
      loading ?
        <div className='flex flex-row mx-auto my-2 p-5'>
          <h1 className='mr-2'>Loading</h1>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
        :
        <div className="flex sm:flex-row flex-col">
          <ProfileComp user={user} />
          <StatsComp userCount={userCount} leaderboardRank={leaderboardRank} dashboard={dashboard} />
        </div>
      }
    </div>
  )
}

export default Dashboard