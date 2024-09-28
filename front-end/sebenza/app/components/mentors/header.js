import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
export default function MentorsHeader() {
  return (
    <div className='max-w-[1440px] m-auto'>
        <h1 className='text-5xl m-auto poppins font-medium text-center text-slate-50 my-6' >"Join Our Network: Register as a Career Mentor"</h1>
        <h2 className="text-xl text-center text-slate-50 mb-4 w-2/3 m-auto font-medium poppins">
        Share your expertise and inspire the next generation of professionals. 
        As a mentor, you'll have the opportunity to shape careers and make a lasting impact. 
        Join us in building a brighter future for aspiring talents.
            </h2>

        <div className='flex items-center justify-around flex-row w-fit m-auto'>
        <span className='bg-slate-50 w-36 h-10 rounded-full flex flex-row items-center justify-center text-gray-900 font-normal poppins cursor-pointer m-5'>Register</span>
        <span className='bg-slate-900 w-36 h-10 rounded-full flex flex-row items-center justify-center text-slate-50 font-normal poppins cursor-pointer m-5 '>Learn More <span><FaArrowRightLong className='ml-3'/></span></span>
        </div>


        <div className=" mx-auto p-6">
  <h2 className="text-2xl font-bold text-slate-50 mb-8 text-center">
    How Our Mentorship Program Helps Combat Unemployment
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-teal-700 rounded-lg shadow-lg p-4">
      <h3 className="text-xl text-slate-50 mb-4 w-2/3 m-auto font-medium poppins">Personalized Guidance</h3>
      <p className="text-slate-50 poppins">
        Our mentors provide tailored advice, helping individuals identify their strengths 
        and navigate their career paths effectively.
      </p>
    </div>
    <div className="bg-teal-700 rounded-lg shadow-lg p-4">
      <h3 className="text-xl text-slate-50 mb-4 w-2/3 m-auto font-medium poppins">Skill Development</h3>
      <p className="text-slate-50 poppins">
        Participants gain access to valuable resources and training opportunities, enhancing 
        their skills and making them more competitive in the job market.
      </p>
    </div>
    <div className="bg-teal-700 rounded-lg shadow-lg p-4">
      <h3 className="text-xl text-slate-50 mb-4 w-2/3 m-auto font-medium poppins">Networking Opportunities</h3>
      <p className="text-slate-50 poppins">
        Our program connects mentees with industry professionals, helping them build 
        a robust network that can lead to job opportunities.
      </p>
    </div>
    <div className="bg-teal-700 rounded-lg shadow-lg p-4">
      <h3 className="text-xl text-slate-50 mb-4 w-2/3 m-auto font-medium poppins">Real-World Insights</h3>
      <p className="text-slate-50 poppins">
        Mentors share their experiences and insights, providing mentees with a realistic 
        view of the industry and what employers are looking for.
      </p>
    </div>
  </div>
</div>

<div className=" mx-auto p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
    What Our Mentees Are Saying
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white rounded shadow-lg p-6 transform transition-transform hover:scale-105">
      <p className="text-gray-600 italic mb-4">
        "Thanks to my mentor, I landed my dream job! The guidance I received was invaluable."
      </p>
      <p className="font-semibold text-gray-800">- Sarah J.</p>
    </div>

    <div className="bg-white rounded shadow-lg p-6 transform transition-transform hover:scale-105">
      <p className="text-gray-600 italic mb-4">
        "The networking opportunities were a game changer. I connected with so many professionals!"
      </p>
      <p className="font-semibold text-gray-800">- John D.</p>
    </div>
  </div>
</div>


<div className="w-full mx-auto p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
    Real Experiences from Our Mentees
  </h2>

  <div className="bg-white shadow-2xl p-8 mb-6">
    <div className="flex items-start mb-4">
      <img 
        src="https://via.placeholder.com/50" 
        alt="User Avatar" 
        className="rounded-full mr-3"
      />
      <div>
        <h3 className="font-semibold text-gray-800 text-lg">Sarah J.</h3>
        <p className="text-gray-500 text-sm">@sarahj</p>
      </div>
    </div>
    <p className="text-gray-600 mb-4 text-lg">
      "Joining the mentorship program was one of the best decisions I've ever made. 
      My mentor provided invaluable advice that helped me secure my first job in tech! 
      The resources and support I received were beyond my expectations, and I truly 
      felt guided every step of the way."
    </p>
    <p className="text-gray-600 mb-4 text-lg">
      "I can’t thank the team enough for their dedication to helping mentees succeed. 
      This program is a game-changer for anyone looking to enhance their career prospects. 
      I highly recommend it to anyone seeking guidance and support in their professional journey."
    </p>
    <div className="flex justify-between text-slate-500 text-sm mt-4">
      <span className='flex items-center'><IoTimerOutline className='mr-3'/> 2 days ago</span>
    </div>
  </div>
  
</div>


    </div>
  )
}
