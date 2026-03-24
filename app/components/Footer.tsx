import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glassmorphism text-center p-4">
      <div className="container mx-auto">
        <p className="text-gray-800 dark:text-white">&copy; 2026 MyCompany. All rights reserved.</p>
        <nav className="mt-2">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2 transition duration-300">Terms of Service</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2 transition duration-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
