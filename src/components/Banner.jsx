import React from "react";
import Books from "../../public/Books.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row items-center my-12 md:my-20">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            et totam. Tempora amet atque expedita, quae corrupti totam sed
            pariatur corporis at veniam est voluptas animi!
          </p>

          {/* Email Input */}
          <div className="flex items-center border rounded-lg overflow-hidden max-w-md shadow-sm">
            <input
              type="text"
              className="flex-1 px-4 py-2 outline-none"
              placeholder="Enter your email"
            />
            <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-600 duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Right Banner Image */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
        {/* Background Circle */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-pink-200 via-pink-100 to-blue-200 rounded-full blur-2xl opacity-70 animate-pulse"></div>

        {/* Image */}
        <img
          src={Books}
          className="relative w-[320px] h-[260px] md:w-[550px] md:h-[460px] object-cover rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-float"
          alt="Learning Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
