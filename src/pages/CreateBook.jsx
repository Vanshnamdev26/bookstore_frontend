import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import axios from "axios";
import { BookPlus } from "lucide-react";

const CreateBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    description: "",
    price: 0,
    image: "",
    category: "Free", // default
    url: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
        const payload = {
        ...formData,
        price: formData.category === "Free" ? 0 : formData.price,
      };

      const response = await axios.post(
        "https://bookstore-backend-2bof.onrender.com/book/create",
        payload
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Book added successfully!");
        setFormData({
          name: "",
          author: "",
          description: "",
          price: 0,
          image: "",
          category: "Free",
          url: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error creating book:", error);
      toast.error("Failed to create book. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-50 via-white to-blue-50">
      <Navbar />

      <main className="flex-grow px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Create <span className="text-pink-600">Book</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Add a new book to your store by filling out the details below.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookPlus className="w-6 h-6 text-pink-600" /> New Book Details
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  Book Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter book name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  Author
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter author's name"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                      price: e.target.value === "Free" ? 0 : formData.price,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                >
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>

              {/* Price → only show if paid */}
              {formData.category === "Paid" && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter book price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              )}

              {/* Image */}
              {/* Image Picker */}
<div>
  <label className="block text-sm font-medium mb-2 text-gray-600">
    Book Cover Image
  </label>

  <div
    className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-xl cursor-pointer transition hover:border-pink-500 hover:bg-pink-50"
    onClick={() => document.getElementById("fileInput").click()}
  >
    {formData.image ? (
      // ✅ Show preview if image is selected
      <img
        src={URL.createObjectURL(formData.image)}
        alt="Preview"
        className="h-40 w-full object-cover rounded-lg shadow-md"
      />
    ) : (
      <>
        <BookPlus className="w-10 h-10 text-pink-500 mb-3" />
        <p className="text-gray-600">Click or Drag & Drop to upload</p>
        <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5MB</p>
      </>
    )}
  </div>

  {/* Hidden Input */}
  <input
    type="file"
    id="fileInput"
    accept="image/*"
    className="hidden"
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        image: e.target.files[0],
      }))
    }
  />
</div>


              {/* URL */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  URL
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  Description
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Enter book description..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 resize-none"
                />
              </div>

              <button
                onClick={() => window.location.href = '/'}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-pink-600 text-white hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60"
              >
                {isSubmitting ? "Adding..." : "Add Book"}
                <BookPlus size={16} />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateBook;
