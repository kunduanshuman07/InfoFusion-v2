'use client'
import { useEffect, useState } from 'react'
import StatComponent from '../components/StatComponent'
import DashboardDrawer from '../components/DashboardDrawer'
import StatButtons from '../components/StatButtons'
import LineChart from '../components/LineChart'
import DoughnutChart from '../components/DoughnutChart'
import UserLayout from '../container/UserLayout'
const Dashboard = () => {
    const [loading, setLoading] = useState<any>(true);
    useEffect(()=>{
        setLoading(false);
    },[])
    return (
        <div className='flex flex-col w-full'>
            <UserLayout />
            <div className='flex flex-row w-full mt-5'>
                <div className='flex flex-col w-2/3 shadow-md rounded-lg p-2 ml-2'>
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
                            <div className='flex flex-row w-full'>
                                <StatComponent color='red' contentone={'April 4, 2024'} contenttwo={31} contentthree={'Quiz Attempts'} />
                                <StatComponent color='blue' contentone={'Rank'} contenttwo={1490} contentthree={'Out of 12890 participants'} />
                                <StatComponent color='yellow' contentone={'Rating'} contenttwo={1889} contentthree={'Div 2'} />
                            </div>
                            <StatButtons />
                            <div className='flex flex-row mt-5 p-4'>
                                <LineChart />
                                <DoughnutChart />
                            </div>
                        </>
                    }
                </div>
                <div className='w-1/3'>
                    <DashboardDrawer />
                </div>
            </div>

        </div>
    )
}

export default Dashboard