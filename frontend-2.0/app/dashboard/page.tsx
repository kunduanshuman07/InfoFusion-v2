'use client'

import { useEffect, useState } from "react";
import ProfileComp from "../components/ProfileComp"
import StatsComp from "../components/StatsComp"
import { useSession } from "next-auth/react";
import { fetchUser } from "../apis/fetchUser";
import { fetchDashboard } from "../apis/fetchDashboard";
import { fetchLeaderboard } from "../apis/fetchLeaderboard";

const Dashboard = () => {
  const { data, status } = useSession();
  const [auth, setAuth] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);
  const [dashboard, setDashboard] = useState<any>();
  const [leaderboardRank, setLeaderboardRank] = useState<any>();
  const [userCount, setUserCount] = useState<any>();
  const [user, setUser] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<any>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const resp = await fetchUser({ userId: data?.user?.email });
      if (resp.status === 200) {
        setUser(resp.data.user);
      }
    }
    if (status === 'unauthenticated') {
      setAuth(false);
      setLoading(false);
    }
    else {
      fetchUserData();
      setAuth(true);
    }
  }, [status, data])
  useEffect(() => {
    const fetchDashboardData = async () => {
      const { status, data } = await fetchDashboard({ userId: user.id });
      const leaderBoardResp = await fetchLeaderboard();
      if (status == 200 && leaderBoardResp.status == 200) {
        setDashboard(data.data);
        setUserCount(leaderBoardResp?.data?.data?.length);
        leaderBoardResp?.data?.data?.map((users: any, index: any) => {
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
    <div className="flex flex-col">
      {loading && <div style={{ margin: "auto auto" }}><span className="loading text-cyan-700 loading-dots loading-lg"></span></div>}
      {!loading && !auth &&
        <div style={{ margin: "auto auto" }}>
          <a className="text-sm text-cyan-700" href="/login">Please <span className="text-lg font-bold hover:underline">Sign In</span> to continue!</a>
        </div>
      }
      {!loading && auth &&
        <div className="flex sm:flex-row flex-col">
          <ProfileComp user={user} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
          <StatsComp userCount={userCount} leaderboardRank={leaderboardRank} dashboard={dashboard} />
        </div>
      }
    </div>
  )
}

export default Dashboard
