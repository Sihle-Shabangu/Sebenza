import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <div className="max-w-4xl mx-auto p-6">
  <h2 className="text-4xl font-bold text-slate-50 mb-8 text-center poppins">
    Sign Up to Become a Mentor
  </h2>

  <form className="bg-white rounded-lg shadow-lg p-8">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Your Full Name"
        
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="you@example.com"
        
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expertise">
        Area of Expertise
      </label>
      <select
        id="expertise"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        
      >
        <option value="" disabled selected>Select your expertise</option>
        <option value="tech">Technology</option>
        <option value="business">Business</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
        Short Bio
      </label>
      <textarea
        id="message"
        rows="4"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Tell us about your mentoring experience..."
        
      ></textarea>
    </div>

    <span
      type="submit"
      className="bg-teal-700 text-white font-medium poppins py-2 px-4 rounded hover:bg-teal-600 transition duration-200 w-full"
    >
      <Link href={'/'}>Sign Up</Link>
    </span>
  </form>
</div>

  )
}
