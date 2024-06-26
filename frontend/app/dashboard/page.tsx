'use client'
import { useEffect, useState } from 'react'
import StatComponent from '../components/StatComponent'
import DashboardDrawer from '../components/DashboardDrawer'
import StatButtons from '../components/StatButtons'
import LineChart from '../components/LineChart'
import DoughnutChart from '../components/DoughnutChart'
import UserLayout from '../container/UserLayout'
import { fetchDashboard } from '../server-actions/fetchDashboard'
import { fetchLeaderboard } from '../server-actions/fetchLeaderboard'
import { formatDateAndTime } from '../utils/timeFormat'
import { fetchUser } from '../server-actions/fetchUser'
import { useSession } from 'next-auth/react'
const Dashboard = () => {
    const screenWidth = typeof window !== 'undefined' ? window.screen.availWidth : 1001;
    const { data } = useSession();
    const [loading, setLoading] = useState<any>(true);
    const [dashboard, setDashboard] = useState<any>();
    const [leaderboardRank, setLeaderboardRank] = useState<any>();
    const [userCount, setUserCount] = useState<any>();
    const [datefield, setDatefield] = useState<any>();
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
            const dateToday = Date.now();
            if (status == 200 && leaderBoardResp.status == 200) {
                setDashboard(data.data);
                setUserCount(leaderBoardResp.data.data.length);
                setDatefield(formatDateAndTime(dateToday));
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
        <div className='flex flex-col w-full'>
            <UserLayout />
            <div className='flex flex-row w-full mt-5'>
                <div className={`flex flex-col shadow-md rounded-lg p-2 ${screenWidth<1000?'w-full': 'w-2/3 ml-2'}`}>
                    {loading ?
                        <div className="flex flex-col gap-4 w-full p-2">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-16 w-full"></div>
                            <div className="skeleton h-16 w-full"></div>
                            <div className="skeleton h-8 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        :
                        <>
                            <div className={`flex w-full ${screenWidth<1000? 'flex-col': 'flex-row'}`}>
                                <StatComponent color='red' contentone={datefield} contenttwo={dashboard.quiz_count} contentthree={'Quiz Attempts'} />
                                <StatComponent color='blue' contentone={'Rank'} contenttwo={leaderboardRank} contentthree={`Out of ${userCount} participants`} />
                                <StatComponent color='yellow' contentone={'Rating'} contenttwo={dashboard.rating} contentthree={'Div 2'} />
                            </div>
                            <StatButtons contentOne={dashboard.questions} contentTwo={dashboard.correct_answers} contentThree={dashboard.highest_score} />
                            <div className={`flex mt-5 p-4 ${screenWidth<1000?'flex-col': 'flex-row'}`}>
                                <LineChart graph={dashboard.rating_graph} />
                                <DoughnutChart easy={dashboard.easy} med={dashboard.med} hard={dashboard.hard} misc={dashboard.misc} />
                            </div>
                        </>
                    }
                </div>
                {screenWidth > 1000 && <div className='w-1/3'>
                    <DashboardDrawer user={user} />
                </div>}
            </div>

        </div>
    )
}

export default Dashboard