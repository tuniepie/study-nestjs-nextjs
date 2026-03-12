import React from 'react';
import LoginBar from './components/LoginBar';

const Home: React.FC = () => {
 return (
 <div className="flex items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black">
 <LoginBar />
 </div>
 );
};

export default Home;