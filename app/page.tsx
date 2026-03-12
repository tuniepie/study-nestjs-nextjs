import React from 'react';
import LoginBar from './components/LoginBar';

const Home: React.FC = () => {
 return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
 <LoginBar />
 <h1 className="text-3xl font-semibold text-center text-black dark:text-zinc-50 mt-4">Hello World</h1>
 </div>
 );
};

export default Home;