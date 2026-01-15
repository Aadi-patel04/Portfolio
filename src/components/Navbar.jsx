import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 md:px-16 py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="text-lg font-extrabold">
        <Link to="/">Aditya Patel</Link>
        <span className="text-gray-500 font-medium ml-2">/ CSE</span>
      </div>

      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">ABOUT ME</Link>
        <Link to="/resume" className="hover:text-blue-600">RESUME</Link>
        <Link to="/projects" className="hover:text-blue-600">PROJECTS</Link>
        <Link to="/contact" className="hover:text-blue-600">CONTACT</Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden px-4 py-4">
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600">ABOUT ME</Link>
            <Link to="/resume" onClick={() => setOpen(false)} className="hover:text-blue-600">RESUME</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-600">PROJECTS</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
