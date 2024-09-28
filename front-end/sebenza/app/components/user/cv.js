import Link from 'next/link'
import React from 'react'

export default function CV() {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="shadow-2xl bg-slate-50  p-8 w-[21cm] h-[29.7cm] relative overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        CV Editor
      </h2>
  
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> johndoe@example.com
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Phone:</span> (123) 456-7890
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Location:</span> New York, NY
        </p>
      </div>
  
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Professional Summary</h4>
      <p className="text-gray-600 mb-6">
        A passionate software developer with over 5 years of experience in building web applications.
        Proficient in JavaScript, React, and Node.js.
      </p>
  
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Experience</h4>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Senior Developer at Tech Company (2020 - Present)</li>
        <li>Software Engineer at Another Company (2018 - 2020)</li>
      </ul>
  
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Education</h4>
      <p className="text-gray-600 mb-6">B.S. in Computer Science, University of Example (2017)</p>
  
      <div className="flex justify-between absolute bottom-8 left-8 right-8">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Edit
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
          Save Changes
        </button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-200">
          <Link href={"/user"}>Cancel</Link>
        </button>
      </div>
    </div>
  </div>
  
  )
}
