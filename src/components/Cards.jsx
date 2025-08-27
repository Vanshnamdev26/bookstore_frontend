import React from "react";
import { ShoppingCart } from "lucide-react";

function Cards({ item }) {
  // Handle both string and object for image
  const imageUrl = typeof item.image === "string" ? item.image : item.image?.url;

  return (
    <div className="p-4">
      <div className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
            {item.category}
          </span>

          {/* Hover Action Button */}
          <button className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Details Section */}
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 truncate">
            {item.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
            {item.title}
          </p>

          {/* Price + Button */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-600">
              ${item.price}
            </span>
            <button className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
