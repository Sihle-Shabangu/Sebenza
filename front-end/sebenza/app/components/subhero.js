import React from 'react'
import SubHeroImage from './subhero-image'

export default function SubHero() {
  return (
    <div className='flex flex-row justify-evenly p-5 max-w-[1440px] m-auto'>
        <SubHeroImage offset={"75px"}/>
        <SubHeroImage/>
        <SubHeroImage  offset={"75px"}/>
        <SubHeroImage/>
    </div>
  )
}
