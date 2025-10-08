import React from 'react'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 py-16 bg-[#f7f2ec] gap-10 md:gap-24">
      {/* Left */}
      <div className="flex justify-center md:w-1/3">
        <div className="bg-[#f0e6da] rounded-2xl p-8 md:p-10 text-center shadow">
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-6"
          />
          <h2 className="text-xl font-extrabold">Maya Nelson</h2>
          <p className="text-gray-600 tracking-widest mt-3 text-sm">PROJECT MANAGER</p>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-2/3 max-w-2xl text-center md:text-left">
        <h1 className="text-6xl md:text-7xl font-extrabold">Hello</h1>
        <p className="text-gray-700 text-lg mt-3 mb-8">Here's who I am & what I do</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-700 transition">RESUME</button>
          <button className="border-2 border-black text-black px-8 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">PROJECTS</button>
        </div>

        <p className="text-gray-700 leading-relaxed mb-3">
          I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click to add your own content and make changes to the font.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
      </div>
    </section>
  )
}
