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
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-50 mb-2">Welcome back</h2>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-8">Sign in to your account to continue</p>
      <form className="space-y-6">
        <div className="relative">
          <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
            <User className="mr-2" /> Email
          </label>
          <input type="email" id="username" placeholder="Email" className="mt-1 block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition duration-150 ease-in-out bg-slate-50 dark:bg-slate-800" />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center">
            <Lock className="mr-2" /> Password
          </label>
          <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition duration-150 ease-in-out bg-slate-50 dark:bg-slate-800" />
          <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-3 text-slate-400">
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline transition duration-300">Forgot password?</a>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150 ease-in-out active:scale-95">
          Login
        </button>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
          <span className="mx-4 text-slate-500 dark:text-slate-400">or continue with</span>
          <div className="flex-grow border-t border-slate-300 dark:border-slate-600"></div>
        </div>
        <div className="flex justify-between">
          <button type="button" className="flex items-center justify-center w-full py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-150 ease-in-out mr-2">
            <Github className="mr-2" /> GitHub
          </button>
          <button type="button" className="flex items-center justify-center w-full py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-150 ease-in-out ml-2">
            {/* Insert Google G SVG Icon here */}
            Google
          </button>
        </div>
        <div className="text-center mt-4">
          <span className="text-slate-500 dark:text-slate-400">Don't have an account? </span><a href="#" className="text-indigo-600 hover:underline transition duration-300">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginBar;
