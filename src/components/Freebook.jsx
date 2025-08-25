import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-2bof.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {book.filter((item) => item.category === "Free").map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Freebook;
