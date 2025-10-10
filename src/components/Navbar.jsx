import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="text-lg font-extrabold">
        Aditya Patel{" "}
        <span className="text-gray-500 font-medium ml-2">/ CSE </span>
      </div>

      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li><Link to="/" className="hover:text-blue-600">ABOUT ME</Link></li>
        {/* <li><Link to="/about" className="hover:text-blue-600">ABOUT ME</Link></li> */}
        <li><Link to="/resume" className="hover:text-blue-600">RESUME</Link></li>
        <li><Link to="/projects" className="hover:text-blue-600">PROJECTS</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
