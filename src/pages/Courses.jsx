import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-50 via-white to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Our <span className="text-pink-600">Courses</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore a wide variety of courses designed to help you{" "}
              <span className="text-pink-500 font-semibold">learn, grow</span>,
              and achieve your goals with confidence.
            </p>
          </div>

          {/* Render Course Cards */}
          <Course />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Courses;
