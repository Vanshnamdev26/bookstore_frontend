import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import { Upload, BookOpen, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider"; // import your auth hook

function Home() {
  const navigate = useNavigate();
  const [authUser] = useAuth(); // get user from context

  // Step 1: Upload Book
  const handleUploadClick = () => {
    if (authUser) {
      navigate("/create-book"); // logged in → create book
    } else {
      navigate("/login"); // not logged in → login
    }
  };

  // Step 2: Discover Books
  const handleDiscoverClick = () => {
    if (authUser) {
      navigate("/books"); // logged in → books page
    } else {
      navigate("/login"); // not logged in → login
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-pink-50 to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Free / Paid Books Section */}
      <section className="flex-grow px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Explore Books
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Browse through a growing collection of free and paid books uploaded by our community 🚀
          </p>
          <Freebook />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-100 via-white to-blue-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            How <span className="text-pink-600">bookStore</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple platform where you can share your knowledge by uploading books, 
            and readers can explore free or paid books easily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div
            onClick={handleUploadClick}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white mx-auto mb-4">
              <Upload size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Your Book
            </h3>
            <p className="text-gray-600 text-sm">
              Authors can upload books (PDF, ePub, etc.) and choose if it’s free or paid.
            </p>
          </div>

          {/* Step 2 */}
          <div
            onClick={handleDiscoverClick}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white mx-auto mb-4">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Discover Books
            </h3>
            <p className="text-gray-600 text-sm">
              Readers can browse a wide variety of free and paid books uploaded by authors.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white mx-auto mb-4">
              <ShoppingBag size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Get Books Instantly
            </h3>
            <p className="text-gray-600 text-sm">
              Download free books or buy paid ones securely — start reading instantly!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
