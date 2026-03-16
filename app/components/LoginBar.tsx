import React from 'react';
import { User, Lock } from 'lucide-react';

const LoginBar: React.FC = () => {
 return (
 <div className="flex items-center justify-center min-h-screen bg-slate-50">
 <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-md">
 <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h2>
 <form className="space-y-6">
 <div className="relative">
 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
 <input type="text" id="username" placeholder="Username" className="mt-1 block w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out" />
 <User className="absolute left-3 top-3 text-gray-400" />
 </div>
 <div className="relative">
 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
 <input type="password" id="password" placeholder="Password" className="mt-1 block w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out" />
 <Lock className="absolute left-3 top-3 text-gray-400" />
 </div>
 <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out active:scale-95">Login</button>
 </form>
 </div>
 </div>
 );
};

export default LoginBar;