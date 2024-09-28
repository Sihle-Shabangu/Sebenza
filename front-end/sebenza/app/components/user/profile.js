import Link from 'next/link'
import React from 'react'

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-slate-50 mb-8 text-center">
    User Profile Dashboard
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {/* Overview Section */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
      <p className="text-gray-600 mb-2">
        Welcome back, John Doe! Your progress is looking great. Keep up the good work!
      </p>
      <p className="text-gray-600">Current Role: Software Developer</p>
    </div>

    {/* Certifications Section */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li>Certified JavaScript Developer</li>
        <li>React Professional Certification</li>
        <li>Node.js Development Certificate</li>
      </ul>
    </div>

    {/* Career Progress Section */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Progress</h3>
      <div className="relative mb-4">
        <div className="h-2 bg-blue-500 rounded-full w-1/2" />
        <div className="absolute top-0 left-0 transform -translate-y-4 text-sm font-semibold text-blue-500">50%</div>
      </div>
      <p className="text-gray-600">You are halfway to your next career goal!</p>
    </div>
  </div>

  {/* CV Section */}
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your CV</h3>
    <p className="text-gray-600 mb-4">
      View and edit your CV to reflect your latest achievements and experiences.
    </p>
    <div className="flex justify-between">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        View CV
      </button>
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
        <Link href={"/user/cv"}>Edit CV</Link>
      </button>
    </div>
  </div>
</div>

  )
}
