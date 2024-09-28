import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function MentorsHeader() {
  return (
    <div className='w-2/3 m-auto'>
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
    </div>
  )
}
