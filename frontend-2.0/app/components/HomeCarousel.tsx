'use client'

const HomeCarousel = () => {
    return (
        <div className='w-1/2 m-auto p-4 bg-gray-500 shadow-md rounded-lg'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full flex flex-col">
                    <h1 className='text-center font-bold text-white'>Tech Stack Quizzes</h1>
                    <p className='text-center text-xs m-auto mt-2 text-white'>Put your knowledge to the test with our tech stack quizzes. From Web Development to Data Science, challenge yourself and reinforce your understanding.</p>
                </div>
                <div id="item2" className="carousel-item w-full flex flex-col">
                <h1 className='text-center font-bold text-white'>Indepth Topic Explanations</h1>
                    <p className='text-center text-xs m-auto mt-2 text-white'>Navigate your journey with precision. Take quizzes tailored to your progress and strengthen your grasp on key tech concepts.</p>
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col">
                <h1 className='text-center font-bold text-white'>Stay Sharp, Stay Updated</h1>
                    <p className='text-center text-xs m-auto mt-2 text-white'>Grab opportunities to stay ahead. Stay informed on the latest tech trends while honing your skills.</p>
                </div>
                <div id="item4" className="carousel-item w-full flex flex-col">
                <h1 className='text-center font-bold text-white'>Join our Community</h1>
                    <p className='text-center text-xs m-auto mt-2 text-white'>Connect with fellow learners in our quiz community. Share insights, compete, and learn together in a dynamic, interactive environment.</p>
                </div>
                <div id="item5" className="carousel-item w-full flex flex-col">
                    <h1 className='text-center font-bold text-white'>Learn and Explore</h1>
                    <p className='text-center text-xs m-auto mt-2 text-white'>Grasp theoretical concepts and develop practical skills essential in the tech industry.</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    )
}

export default HomeCarousel