import React from "react";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-10 text-center space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-pink-500 transition-colors">
            About us
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            Jobs
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors">
            Press kit
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          {/* Twitter */}
          <a href="#" className="hover:text-pink-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.13 1.19 4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.92 4.92 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.22.08 4.92 4.92 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54 13.93 13.93 0 0 0 7.55 22c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.57 2.45-2.56z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:text-pink-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" className="hover:text-pink-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3H15c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.7v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold text-pink-500">
            ACME Industries Ltd
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
