import React from 'react';
import { User, Lock, Github } from 'lucide-react';

const LoginBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" id="username" placeholder="Email" className="mt-1 block w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800" />
            <User className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800" />
            <Lock className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out active:scale-95">Login</button>
          <div className="flex justify-between mt-4">
            <button type="button" className="flex items-center justify-center w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out mr-2">
              <Github className="mr-2" /> GitHub
            </button>
            <button type="button" className="flex items-center justify-center w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out ml-2">
              {/* Replace with a valid Google icon if needed */}
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBar;
