import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

   const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/" className="hover:text-pink-500 transition-colors duration-200">Home</Link>
      </li>
      <li>
        <Link to="/course" className="hover:text-pink-500 transition-colors duration-200">Course</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-pink-500 transition-colors duration-200">Contact</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-pink-500 transition-colors duration-200">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          sticky
            ? "shadow-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-500 cursor-pointer">
            bookStore
          </Link>

          {/* Nav Links + Search (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <ul className="flex gap-6 font-medium">{navItems}</ul>

            {/* Search Box */}
            <div className="flex items-center px-3 py-2 border rounded-md dark:bg-slate-900">
              <input
                type="text"
                className="bg-transparent outline-none text-sm dark:text-white"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-4 ml-6">
            <Link
              to="/login"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
            >
              Login
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="dropdown absolute top-4 left-4">
          <button tabIndex={0} className="btn btn-ghost">
            ☰
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white dark:bg-slate-800 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
