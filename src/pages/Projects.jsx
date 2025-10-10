import React from 'react'

function Projects() {
  return (
    <div className="bg-yellow-50 min-h-screen relative pt-24 pb-24">
      {/* Title */}
      <div className='flex justify-center items-center gap-2 mt-20'>
        <div className="w-5 h-5   bg-blue-500"></div>
        <h1 className="text-3xl font-bold text-center ">Projects</h1>
      </div>

      <div className='flex justify-center mt-14 overflow-auto'>
        <h2 className='w-[40rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur ad dolorum quas perferendis. Ullam odio, nulla quia ex eligendi
          nobis veritatis. Eaque, sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas ab labore velit exercitationem \
          rerum eum in ad sapiente saepe, asperiores incidunt nihil?.</h2>
      </div>
      {/* First project*/}
      <div className="flex justify-center mt-14">
        <div className="bg-white h-[22rem] w-[47rem] shadow-lg flex items-center justify-center">
          First Card Content
        </div>
      </div>


      {/* 2nd Project  card */}
      <div className="flex justify-center mt-14">
        <div className="bg-white h-[22rem] w-[47rem] shadow-lg flex items-center justify-center">
          Second Card Content
        </div>
      </div>

      {/* 3rd Project card */}
      <div className="flex justify-center mt-14">
        <div className="bg-white h-[22rem] w-[47rem] shadow-lg flex items-center justify-center">
          Second Card Content
        </div>
      </div>

    </div>
  )
}

export default Projects
