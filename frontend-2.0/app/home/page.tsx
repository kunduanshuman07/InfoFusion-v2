'use client'
import Footer from '../components/Footer';
import HomeCarousel from '../components/HomeCarousel';
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
        <div className='flex flex-col items-center'>
          <HomeCarousel />
          <div className='grid sm:grid-cols-3 sm:gap-4 grid-cols-1 mt-2'>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>git clone xyz</code></pre>
              <pre data-prefix=">" className="text-warning"><code>cloning repository...</code></pre>
              <pre data-prefix=">" className="text-success"><code>Repository cloned!</code></pre>
            </div>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>docker-compose up</code></pre>
              <pre data-prefix=">" className="text-warning"><code>starting containers...</code></pre>
              <pre data-prefix=">" className="text-success"><code>Containers are running!</code></pre>
            </div>
            <div className="mockup-code sm:mt-0 mt-2">
              <pre data-prefix="$"><code>npm run build</code></pre>
              <pre data-prefix=">" className="text-warning"><code>building project...</code></pre>
              <pre data-prefix=">" className="text-success"><code>Project built!</code></pre>
            </div>

          </div>
        </div>
        <a className='btn m-auto sm:mt-4 px-20 sm:mb-0 mb-20 mt-8' href={data ? '/quizzes' : '/login'}>Get started</a>
      </div>
      <Footer />
    </div>
  );
}

// Export the Home component
export default Home;
