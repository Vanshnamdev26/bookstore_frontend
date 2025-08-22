import React from "react";

function Cards({ item }) {
  return (
    <div className="p-3">
      <div className="w-full max-w-sm bg-white dark:bg-slate-900 dark:text-white dark:border rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
        
        {/* Product Image */}
        <figure className="overflow-hidden rounded-t-xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
        </figure>
        
        {/* Product Details */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-600">
              {item.category}
            </span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {item.title}
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-pink-600">
              ${item.price}
            </span>
            <button className="px-4 py-2 text-sm font-medium border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
