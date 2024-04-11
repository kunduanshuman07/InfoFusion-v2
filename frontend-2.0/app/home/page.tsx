'use client'
import HomeCarousel from '../components/HomeCarousel';
import { useSession } from 'next-auth/react'
const Home = () => {
    const {data} = useSession();
    return (
      <div className='flex flex-col w-full py-5 px-2 items-center' >
        <div className='flex flex-col p-10 rounded-lg' style={{background: 'linear-gradient(45deg, #155e75, #06b6d4)'}}>
          <h1 className='sm:text-5xl text-3xl text-white ml-auto mr-auto font-bold'>InfoFusion</h1>
          <p className='text-sm text-center text-white mt-1'>Where Knowledge Meets Innovation in Tech Learning.</p>
        </div>
        <div className='flex sm:flex-row flex-col mt-4'>
          <HomeCarousel />
          <div className='m-auto sm:mt-0 mt-2 rounded-lg flex flex-col sm:shadow-md rounded-lg sm:bg-gray-500 bg-gray-600'>
            <h1 className='text-center font-bold text-sm text-white mt-2'>How you will learn?</h1>
            <ul className="steps text-white sm:p-6 p-2 rounded-lg">
              <li className="step text-white text-xs font-bold">Quiz</li>
              <li className="step text-white text-xs font-bold">Blogs</li>
              <li className="step text-white text-xs font-bold">Depth</li>
              <li className="step text-white text-xs font-bold">Community</li>
              <li className="step text-white text-xs font-bold">Learn</li>
              <li className="step text-white text-xs font-bold">Excel</li>
            </ul>
          </div>
        </div>
        <a className='btn m-auto mt-10 px-20' href={data?'/quiz': '/login'}>Get started</a>
      </div>
    )
}

export default Home