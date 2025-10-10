import React from 'react'

function Resume() {
  return (
    <div className="bg-yellow-50 min-h-screen relative pt-24 pb-24">
      {/* Title */}
      <div className='flex justify-center items-center gap-2 mt-20'>
        <div className="w-5 h-5   bg-blue-500"></div>
        <h1 className="text-3xl font-bold text-center ">Resume</h1>
      </div>
      {/* Experience section */}
      <div className="flex justify-between items-center px-[25rem] mt-24">
        <h1 className="text-3xl mx-2 font-bold">Experience</h1>
        <button className="bg-blue-500 text-white font-bold px-8 py-2 rounded-full hover:bg-blue-600 transition">
          Download CV
        </button>
      </div>

      {/* First  white card  Experince*/}
      <div className="flex justify-center mt-14">
        <div className="bg-white h-[22rem] w-[47rem] shadow-lg flex items-center justify-center">
          Second Card Content
        </div>
      </div>

      {/* Education section */}
      <h2 className='text-black font-bold text-2xl mx-[24rem] mt-16 mb-6'>EDUCATION</h2>

      {/* 2nd Education card */}
      <div className="flex justify-center mt-14">
        <div className="bg-white h-[22rem] w-[47rem] shadow-lg flex items-center justify-center">
          Second Card Content
        </div>
      </div>

      {/* 3nd Skillset card */}
      <div className="flex justify-center mt-14 ">
        <div className="bg-white h-[35rem] w-[47rem] shadow-lg flex items-center justify-center">
          Second Card Content
        </div>
      </div>

    </div>

  )
}

export default Resume
