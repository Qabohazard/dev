import './nav.css'
 import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" navbar rounded-md shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-center nav-menu rounded-lg ">
        {/* Logo */}
        {/* <div className="text-white text-2xl font-bold">DEV AB</div> */}

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center justify-center  transition-all duration-300 nav-links gap-10 `}
        >
          <a href="#" className="block px-4 py-2 text-white hover:text-indigo-500">
            HOME
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:text-indigo-500">
            ABOUT
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:text-indigo-500">
            PROJECTS
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:text-indigo-500">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}


  