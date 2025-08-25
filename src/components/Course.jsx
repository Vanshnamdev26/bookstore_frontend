import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";


function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    }
    getBook();
  }, []);

  return (
    <div className="mt-10">
      {/* Small Friendly Intro */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We’re delighted to have you{" "}
          <span className="text-pink-500">Here! 🙂</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
          Browse through our collection of exciting courses and start your
          learning journey today!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
