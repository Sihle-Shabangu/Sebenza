import Image from 'next/image'
import React from 'react'
import lgImage1 from '../assets/large-img.png'
import lgImage2 from '../assets/lg-img2.png'
import { GrSearch } from "react-icons/gr";

export default function InfoSection() {
  return (
    <div className='mt-5 max-w-[1440px] m-auto relative'>
        <div className='flex flex-col justify-center items-center'>
            <Image src={lgImage1}/>
            <p className='text-2xl poppins absolute right-11 w-1/2'>{'“An investment in knowledge pays the best interest”'} </p>
        </div>

        <div>
            <h2 className='text-2xl poppins text-center font-bold mt-5'>DID YOU KNOW?</h2>
            <p className='text-xl poppins w-1/2 m-auto text-center mt-5'>{'In South Africa, unemployment remains a significant challenge, with a rate that often exceeds 30%. Factors contributing to this high rate include economic instability, skills mismatches, and structural inequalities. The government has implemented various initiatives to address the issue, but progress remains slow.'}</p>
        </div>

        <div >
            <h2 className='text-xl poppins text-center font-bold mt-5 uppercase'>Top Skills In You Could Learn</h2>

            <div className='flex flex-col justify-center items-center'>
            <Image src={lgImage2} className='mt-10'/>
            <p className='text-2xl poppins absolute right-11 w-1/2'>Published by MIT </p>
            </div>
            
        </div>

        <table className="w-full  m-5 poppins overflow-auto">
  <thead>
    <tr >
      <th className="text-left p-4">Job Title</th>
      <th className="text-left p-4">Hiring Rate</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td className="p-4">Software Developer</td>
      <td className="p-4">15%</td>
    </tr>
    <tr >
      <td className="p-4">Project Manager</td>
      <td className="p-4">10%</td>
    </tr>
    <tr >
      <td className="p-4">Sales Representative</td>
      <td className="p-4">12%</td>
    </tr>
    <tr >
      <td className="p-4">Data Analyst</td>
      <td className="p-4">18%</td>
    </tr>
    <tr >
      <td className="p-4">Graphic Designer</td>
      <td className="p-4">9%</td>
    </tr>
    <tr>
      <td className="p-4">Accountant</td>
      <td className="p-4">7%</td>
    </tr>
  </tbody>
</table>
        

    <div className='bg-teal-500 h-60 flex justify-center flex-col'>
    <h2 className='text-2xl poppins font-bold m-11 mt-0 w-1/3'>Look up your favourite subject and learn more about it.</h2>
    <div>
        <div className='flex flex-row justify-between items-center bg-slate-50 w-1/3 rounded-lg ml-11'>
            <input className='bg-transparent w-full h-20  indent-4 outline-none border-none text-slate-900' placeholder='Search by skill or job title'/>\
            <i className='text-slate-900 mr-3 cursor-pointer'><GrSearch size={23}/></i>
        </div>


    </div>
    </div>
    </div>
  )
}
