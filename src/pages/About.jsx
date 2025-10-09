import React from "react";

export default function About() {
  return (
    <div className="relative flex min-h-screen font-sans" id="main">
      {/* LEFT SECTION */}
      <div className="bg-yellow-50 flex-none w-[35rem] h-[90rem] p-6"></div>

      {/* RIGHT SECTION */}
      <div className="bg-white flex flex-col justify-center w-full md:w-1/2 p-10 h-[70rem] ml-[14rem]">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Hello</h1>
        <p className="text-xl text-gray-700 mb-8">
          Here's who I am & what I do
        </p>

        <div className="flex gap-4 mb-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Resume
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Projects
          </button>
        </div>

        <p className="text-gray-500 max-w-md text-sm leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font.
        </p>
                <p className="text-gray-500 max-w-md text-sm leading-relaxed m-5">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font.
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
<footer className="absolute  bottom-0 left-0 w-full mt-10 bg-white h-[12%] text-center">
  HI
</footer>

      </div>
    </div>
  );
}
