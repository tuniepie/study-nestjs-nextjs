import React from 'react';

const LoginBar: React.FC = () => {
 return (
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
 <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
 <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Hello World</h2>
 <form className="space-y-6">
 <div>
 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
 <input type="text" id="username" placeholder="Username" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
 </div>
 <div>
 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
 <input type="password" id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
 </div>
 <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">Login</button>
 </form>
 </div>
 </div>
 );
};

export default LoginBar;