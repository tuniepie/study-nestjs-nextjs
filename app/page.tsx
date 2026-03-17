import React from 'react';
import LoginBar from './components/LoginBar';

const Home: React.FC = () => {
  return (
    <div className="animated-gradient-background flex items-center justify-center min-h-screen font-sans">
      <div className="backdrop-blur-lg bg-white/30 dark:bg-black/30 p-8 rounded-lg shadow-lg">
        <LoginBar />
      </div>
    </div>
  );
};

export default Home;
