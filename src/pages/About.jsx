import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/portfolio.jpg";

export default function About() {
  return (
    <div className="relative flex min-h-screen font-sans" id="main">
      {/* LEFT SECTION */}
      <div className="bg-yellow-50 flex-none w-full md:w-[35rem] h-14 md:h-[90rem] p-6"></div>

      {/* RIGHT SECTION */}
      <div className="bg-white flex flex-col justify-center w-full md:w-1/2 p-6 md:p-10 h-auto md:h-[70rem] ml-0 md:ml-[14rem]">
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

      {/* Profile Card (Floating on top on desktop, centered on mobile) */}
      <div className="relative md:absolute md:top-[40%] md:left-[36rem] md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex justify-center">
        <div className="bg-yellow-50 shadow-2xl p-6 text-center md:p-8 h-auto md:h-[33rem] w-full max-w-sm md:w-[23rem] rounded-xl z-10 mx-4 md:mx-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-20 h-20 md:w-36 md:h-36 rounded-full mx-auto mb-4 md:mb-6 object-cover mt-2 md:mt-20"
          />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Aditya Patel</h2>
          <p className="text-gray-500 uppercase tracking-wide mt-1">CSE</p>
        </div>
      </div>
    </div>
  );
}
