import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-900 text-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Portfolio/Favicon.jpeg" alt="Profile"
              className="h-10 w-10 object-cover rounded-full border border-gray-700"
            />
            <span className="text-xl font-semibold">Portfolio</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open ? "true" : "false"}
            aria-label="Toggle menu"
            className="text-gray-300 focus:outline-none"
            type="button"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Right: Links */}
          <ul
            className={`
              flex-col md:flex md:flex-row md:flex-grow md:justify-end md:gap-10
              ${open ? 'flex' : 'hidden'} md:flex
            `}
          >
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
              >
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
