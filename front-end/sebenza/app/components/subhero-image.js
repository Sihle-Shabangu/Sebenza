import Image from 'next/image'
import React from 'react'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"
import Img4 from "../assets/img4.png"
export default function SubHeroImage({offset}) {
  return (
    <div style={{marginTop: offset}} className='w-1/4 h-[450px] bg-teal-800 m-3 rounded-xl'>
        <Image src={Img3} alt={"Top companies"} className='rounded-t-xl'/>

        <p className='mt-3 w-full text-center poppins'>Build a future you are proud of</p>
    </div>
  )
}
