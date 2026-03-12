import React from 'react';

const LoginBar: React.FC = () => {
 return (
 <div className="flex justify-end w-full p-4 bg-blue-500 text-white">
 <button className="bg-white text-blue-500 px-4 py-2 rounded">Login</button>
 </div>
 );
};

export default LoginBar;