import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative flex min-h-screen font-sans" id="main">
      {/* LEFT SECTION */}
      <div className="bg-yellow-50 flex-none w-[35rem] h-[90rem] p-6"></div>

      {/* RIGHT SECTION */}
      <div className="bg-white flex flex-col justify-center w-full md:w-1/2 p-10 h-[70rem] ml-[14rem]">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Hello</h1>
        <p className="text-lg md:text-xl text-gray-700 font-semibold mb-4 tracking-tight">Here's who I am &amp; what I do</p>
        <p className="text-xl text-gray-700 mb-8">
          Full-stack developer experienced in React, Next.js, Node.js and MongoDB. I build
          scalable web applications, RESTful APIs, and responsive user interfaces.
        </p>

        <div className="flex gap-4 mb-8">
          <Link to="/resume" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Resume
          </Link>
          <Link to="/projects" className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Projects
          </Link>
        </div>

        <p className="text-gray-500 max-w-md text-sm leading-relaxed">
          I'm Aditya Patel, a Computer Science student focused on building practical
          full-stack solutions and learning advanced algorithms and system design.
        </p>
        <p className="text-gray-500 max-w-md text-sm leading-relaxed mt-4">
          I enjoy working on collaborative teams, contributing to open-source, and
          delivering performant, maintainable code.
        </p>
      </div>

      {/* Profile Card (Floating on top) */}
      <div className="absolute top-[40%] left-[36rem] transform -translate-x-1/2 -translate-y-1/2 bg-yellow-50 shadow-2xl  p-8 text-center h-[33rem] w-[23rem] z-10 ">
        <img
          src="src/assets/portfolio.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-6 object-cover mt-20"
        />
        <h2 className="text-2xl font-bold text-gray-800">Aditya Patel </h2>
        <p className="text-gray-500 uppercase tracking-wide mt-2">
          CSE
        </p>

      </div>
    </div>
  );
}
