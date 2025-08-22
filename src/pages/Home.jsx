import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-pink-50 to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Free Courses */}
      <section className="flex-grow px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Free Offered Courses
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Learn from beginner to advanced level with our handpicked free courses.
          Upgrade your skills in web development, design, and more 🚀
          </p>
          <Freebook />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
