import React from 'react'

export default function Mentees() {
  return (
    <div className="max-w-6xl mx-auto p-6">
  <h2 className="text-3xl font-bold text-slate-50 mb-8 text-center">
    Mentee Profiles
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Mentee Profile 1 */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Progress:</span> 70%</p>
      <p className="text-gray-600 mb-4">Last Feedback: "Great improvement in your coding skills!"</p>
    </div>

    {/* Mentee Profile 2 */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Michael Brown</h3>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Progress:</span> 50%</p>
      <p className="text-gray-600 mb-4">Last Feedback: "Focus on project management techniques."</p>
    </div>

    {/* Mentee Profile 3 */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Davis</h3>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Progress:</span> 80%</p>
      <p className="text-gray-600 mb-4">Last Feedback: "Excellent presentation skills!"</p>
    </div>

    {/* Mentee Profile 4 */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">David Wilson</h3>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Progress:</span> 60%</p>
      <p className="text-gray-600 mb-4">Last Feedback: "Keep practicing your coding challenges."</p>
    </div>

    {/* Mentee Profile 5 */}
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Jessica Martinez</h3>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Progress:</span> 75%</p>
      <p className="text-gray-600 mb-4">Last Feedback: "Great job on your recent project!"</p>
    </div>
  </div>
</div>

  )
}
