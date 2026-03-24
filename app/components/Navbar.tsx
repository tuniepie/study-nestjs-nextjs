"use client";
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className="flex justify-between items-center p-4 glassmorphism hover-lift">
      <div className="text-xl font-bold text-slate-800 dark:text-slate-50">Brand</div>
      <button 
        onClick={toggleTheme} 
        className="p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-300"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-slate-500" />}
      </button>
    </nav>
  );
};

export default Navbar;
