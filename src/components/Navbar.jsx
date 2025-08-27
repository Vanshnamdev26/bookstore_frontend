import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import Logout from "./Logout.jsx";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="/books" className="hover:text-pink-500 transition-colors duration-200">Books</Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          About
        </Link>
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
          <Link
            to="/"
            className="text-2xl font-bold text-pink-500 cursor-pointer"
          >
            bookStore
          </Link>

          {/* Desktop Nav */}
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

          {/* Right Side (Login / Logout + Mobile Menu Btn) */}
          <div className="flex items-center gap-4 ml-6">
            {authUser ? (
              <Logout />
            ) : (
              <Link
                to="/login"
                className="hidden lg:block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md">
            <ul className="flex flex-col gap-4 p-4 font-medium border-t">
              {navItems}
              <li>
                {authUser ? (
                  <Logout />
                ) : (
                  <Link
                    to="/login"
                    className="block bg-pink-500 text-white text-center px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
