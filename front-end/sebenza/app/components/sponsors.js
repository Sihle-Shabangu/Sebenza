import Image from 'next/image'
import React from 'react'
import SponsorImg from '../assets/sponsor.png'
export default function Sponsors() {
  return (
    <div className='max-w-[1440px] bg-teal-800 h-20 m-auto pl-5 flex items-center justify-evenly flex-row flex-nowrap'>
        <div className='flex flex-row items-center mr-3'>
            <Image src={SponsorImg} className='w-14 rounded'/>
            <p className='text-sm poppins ml-3'>Sizo Digital Forge ltd pty</p>
        </div>

        
        
        <div className='flex flex-row items-center mr-3'>
            <Image src={SponsorImg} className='w-14 rounded'/>
            <p className='text-sm poppins ml-3'>Sizo Digital Forge ltd pty</p>
        </div>

        
        
        <div className='flex flex-row items-center mr-3'>
            <Image src={SponsorImg} className='w-14 rounded'/>
            <p className='text-sm poppins ml-3'>Sizo Digital Forge ltd pty</p>
        </div>

        
        
        <div className='flex flex-row items-center mr-3'>
            <Image src={SponsorImg} className='w-14 rounded'/>
            <p className='text-sm poppins ml-3'>Sizo Digital Forge ltd pty</p>
        </div>

        
        
        <div className='flex flex-row items-center mr-3'>
            <Image src={SponsorImg} className='w-14 rounded'/>
            <p className='text-sm poppins ml-3'>Sizo Digital Forge ltd pty</p>
        </div>

        
        
        


    </div>
  )
}
