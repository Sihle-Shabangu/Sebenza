import React from 'react'
import { GrSearch } from "react-icons/gr";

export default function Header() {
  return (
    <div className='bg-teal-700 h-16 w-screen flex flex-row justify-between items-center p-10 '>
        <h2 className='font-black text-3xl'>LOGO</h2>
        <ul className='flex flex-row w-1/2 justify-between '>
            <li className='cursor-pointer hover:text-teal-500 pre-font font-semibold'>Home</li>
            <li className='cursor-pointer  hover:text-teal-500 pre-font font-semibold'>Jobs</li>
            <li className='cursor-pointer  hover:text-teal-500 pre-font font-semibold'>Explore</li>
            <li className='cursor-pointer  hover:text-teal-500 pre-font font-semibold'>Mentors</li>
            <li className='cursor-pointer  hover:text-teal-500 pre-font font-semibold'>Career Guidance</li>
            <li className='cursor-pointer  hover:text-teal-500 pre-font font-semibold'><GrSearch size={23}/></li>
        </ul>
    </div>
  )
}
