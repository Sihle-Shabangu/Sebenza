import Image from 'next/image'
import React from 'react'

import HeroImage from '../assets/hero.png'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className='max-w-[1440px] m-auto'>

        {/* This is the top part */}

        <div className='flex flex-row justify-between'>
            <div>
                <div className='bg-slate-50 w-2/3 min-w-full h-48 m-5 rounded p-6'>
                    <h2 className='text-gray-900 text-5xl poppins font-medium'>Good Evening, Michael.</h2>
                    <p className='text-teal-900 text-2xl mt-9 poppins font-light'>28th September 2024</p>
                </div>

                <div className='bg-slate-50 w-2/3 min-w-full h-20 m-5 rounded flex flex-row items-center justify-between pr-5'>
                <p className='text-gray-900 text-md ml-3 poppins'>Register your Details. that way we can keep track of your interests and deliver your desired content</p>
                <div className='bg-green-400 w-20 h-10 rounded flex flex-row items-center justify-center text-gray-900 font-normal poppins cursor-pointer'><Link href={"/mentors/mentees"}>Track</Link></div>
                </div>
            </div>
        </div>

        {/* This is the image part */}

        <Image className='' quality={100} src={HeroImage} alt="Hero Image" priority/>

    </div>
  )
}
