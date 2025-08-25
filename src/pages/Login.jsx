import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log("User Login successfully", res.data);
      if(res.data){
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      }
    }).catch((error) => {
      console.log("Login error:", error);
      toast.error("Error: " + error.response.data.message);
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-50 via-white to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center px-6 py-16">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border">
          {/* Header */}
          <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-2">
            Welcome Back
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-6 rounded-full"></div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Footer Text */}
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Not registered?{" "}
            <Link to="/signup" className="text-pink-600 font-semibold hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
