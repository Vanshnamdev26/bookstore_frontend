import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Books from "./pages/Books.jsx";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import CreateBook from "./pages/CreateBook.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={authUser ? <Books /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>

      {/* Global Toaster for Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
