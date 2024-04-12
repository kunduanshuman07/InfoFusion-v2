'use client'
import HomeCarousel from '../components/HomeCarousel';
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useSession } from 'next-auth/react';
const Home = () => {
  const { data } = useSession();

  return (
    <div style={{ background: 'linear-gradient(45deg, #155e75, #06b6d4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='flex flex-col w-full px-2 items-center'>
        <div className='flex flex-col px-10 py-8 rounded-lg' >
          <h1 className='sm:text-5xl text-3xl text-white ml-auto mr-auto font-bold'>InfoFusion</h1>
          <p className='text-sm text-center text-white mt-1'>Where Knowledge Meets Innovation in Tech Learning.</p>
        </div>
        <div className='flex flex-col'>
          <HomeCarousel />
          <div className='grid sm:grid-cols-3 sm:gap-4 grid-cols-1 mt-2'>
            <div className='bg-neutral p-4 rounded-lg shadow-md mt-2 flex flex-col'>
              <div className='flex flex-row text-slate-200'>
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
              </div>
              <h1 className='text-[#e2e8f0] font-bold text-xs ml-1 mt-2'>$<span className='ml-3'>npm i express</span></h1>
              <h1 className='flex text-xs text-amber-400 font-bold mt-2'><FaChevronRight className='my-auto' /><span className='ml-3'>createServer()</span></h1>
              <h1 className='flex text-xs text-teal-500 font-bold mt-2'><FaChevronRight className='my-auto' /><span className='ml-3'>app.listen()</span></h1>
            </div>
            <div className='bg-neutral p-4 rounded-lg shadow-md mt-2 flex flex-col'>
              <div className='flex flex-row text-slate-200'>
                <GoDotFill />
                <GoDotFill />
                <GoDotFill />
              </div>
              <h1 className='text-[#e2e8f0] font-bold text-xs ml-1 mt-2'>$<span className='ml-3'>npx create-react-app</span></h1>
              <h1 className='flex text-xs text-amber-400 font-bold mt-2'><FaChevronRight className='my-auto' /><span className='ml-3'>import HomeComponent</span></h1>
              <h1 className='flex text-xs text-teal-500 font-bold mt-2'><FaChevronRight className='my-auto' /><span className='ml-3'>useState()</span></h1>
            </div>
            <div className='bg-neutral p-4 rounded-lg shadow-md mt-2 flex flex-col'>
              <div className='flex flex-row text-slate-200'>
                <GoDotFill/>
                <GoDotFill/>
                <GoDotFill/>
              </div>
              <h1 className='text-[#e2e8f0] font-bold text-xs ml-1 mt-2'>$<span className='ml-3'>npx create-next-app@latest</span></h1>
              <h1 className='flex text-xs text-amber-400 font-bold mt-2'><FaChevronRight className='my-auto'/><span className='ml-3'>.next</span></h1>
              <h1 className='flex text-xs text-teal-500 font-bold mt-2'><FaChevronRight className='my-auto'/><span className='ml-3'>server-actions</span></h1>
            </div>
          </div>
        </div>
        <a className='btn m-auto mt-4 px-20 sm:mb-0 mb-4' href={data ? '/contests' : '/login'}>Get started</a>
      </div>
    </div>
  );
}

// Export the Home component
export default Home;
