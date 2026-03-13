import React from 'react';

const LoginBar: React.FC = () => {
 return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-8">
 <div className="bg-white rounded-lg shadow-xl p-10 w-full max-w-md">
 <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
 <form className="space-y-6">
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
 <input type="email" id="email" placeholder="Email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
 </div>
 <div>
 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
 <input type="password" id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
 </div>
 <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">Sign In</button>
 <div className="text-center mt-4">
 <a href="#" className="text-blue-600 hover:text-blue-700">Forgot Password?</a>
 </div>
 </form>
 </div>
 </div>
 );
};

export default LoginBar;