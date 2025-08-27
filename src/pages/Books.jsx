import React from "react";
import Navbar from "../components/Navbar";
import Book from "../components/Book";
import Footer from "../components/Footer";

function Books() {
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
              Our <span className="text-pink-600">Books</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore a wide variety of books designed to help you{" "}
              <span className="text-pink-500 font-semibold">learn, grow</span>,
              and achieve your goals with confidence.
            </p>

            {/* Upload Button */}
            <button
              onClick={() => (window.location.href = "/create-book")}
              className="mt-8 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow-md hover:opacity-90 transition"
            >
              Upload Your Book
            </button>
          </div>

          {/* Render Book Cards */}
          <Book />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Books;
