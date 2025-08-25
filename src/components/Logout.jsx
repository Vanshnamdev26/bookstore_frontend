import React from 'react'
import { useAuth } from '../context/AuthProvider.jsx';
import toast from 'react-hot-toast';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
            ...authUser,
            user: null
        });
        localStorage.removeItem("user");
        window.location.href = "/login";
        toast.success("Logout successful");
      } catch (error) {
        console.error("Logout failed:", error);
        toast.error("Logout failed");
      }
  };

  return (
    <div>
      <button
        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default Logout