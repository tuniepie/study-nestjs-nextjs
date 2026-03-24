"use client";
import React, { useState } from 'react';
import { User, Lock, Github, Eye, EyeOff } from 'lucide-react';

const LoginBar: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="glassmorphism p-8 rounded-3xl shadow-lg fade-in">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">Welcome back</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Sign in to your account to continue</p>
      <form className="space-y-6">
        <div className="relative">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
            <User className="mr-2" /> Email
          </label>
          <input type="email" id="username" placeholder="Email" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800" />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
            <Lock className="mr-2" /> Password
          </label>
          <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800" />
          <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3 text-gray-400">
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline transition duration-300">Forgot password?</a>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-3 px-6 rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out active:scale-95">
          Login
        </button>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-4 text-gray-500 dark:text-gray-400">or continue with</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="flex justify-between">
          <button type="button" className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out mr-2">
            <Github className="mr-2" /> GitHub
          </button>
          <button type="button" className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out ml-2">
            {/* Insert Google G SVG Icon here */}
            Google
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-500 dark:text-gray-400">Don't have an account? </span><a href="#" className="text-indigo-600 hover:underline transition duration-300">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginBar;
