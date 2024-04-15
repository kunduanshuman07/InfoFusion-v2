'use client'
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';
const Home = () => {
  const { data } = useSession();

  return (
    <div style={{ background: 'linear-gradient(45deg, #155e75, #06b6d4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='flex flex-col w-full px-2 items-center'>
        <div className='flex flex-col px-10 sm:py-8 pt-3 rounded-lg' >
          <h1 className='sm:text-5xl text-3xl text-white ml-auto mr-auto font-bold'>InfoFusion</h1>
          <p className='text-sm text-center text-white mt-1'>Where Knowledge Meets Innovation in Tech Learning.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='grid sm:grid-cols-3 sm:gap-4 grid-cols-1 mt-2'>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>Quizzes</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Web dev quizzes</code></pre>
              <pre data-prefix=">" className="text-success"><code>Hackathons!</code></pre>
            </div>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>Learn</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Depth</code></pre>
              <pre data-prefix=">" className="text-success"><code>Tech stacks!</code></pre>
            </div>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>Dashboard</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Community</code></pre>
              <pre data-prefix=">" className="text-success"><code>Discuss & Compete!</code></pre>
            </div>

          </div>
        </div>
        <a className='btn m-auto sm:mt-10 px-20 sm:mb-0 mb-20 mt-10' href={data ? '/quizzes' : '/login'}>Get started</a>
      </div>
      <Footer />
    </div>
  );
}

// Export the Home component
export default Home;
