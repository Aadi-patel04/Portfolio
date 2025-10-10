import React from 'react'

function Resume() {
  return (
    <div className="bg-yellow-100 min-h-screen relative pt-24">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-12">Resume</h1>

      {/* Experience section */}
      <div className="flex justify-between items-center px-[25rem]">
        <h1 className="text-3xl font-bold">Experience</h1>
        <button className="bg-blue-500 text-white font-bold px-8 py-2 rounded-full hover:bg-blue-600 transition">
          Download CV
        </button>
      </div>

      {/* White box below */}
      <div className="flex justify-center mt-20">
        <div className="bg-white h-[25rem] w-[45rem] flex items-center justify-center shadow-lg ">
          hi
        </div>
      </div>

       {/* White box below */}
      <div className="flex justify-center mt-20">
        <div className="bg-white h-[25rem] w-[45rem] flex items-center justify-center shadow-lg ">
          hi
        </div>
      </div>
    </div>
  )
}

export default Resume
