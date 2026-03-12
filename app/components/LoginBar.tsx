import React from 'react';

const LoginBar: React.FC = () => {
 return (
 <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
 <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Hello World</h2>
 <form className="space-y-4">
 <div>
 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
 <input type="text" id="username" placeholder="Username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
 </div>
 <div>
 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
 <input type="password" id="password" placeholder="Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
 </div>
 <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
 </form>
 </div>
 );
};

export default LoginBar;