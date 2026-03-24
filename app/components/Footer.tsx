import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glassmorphism text-center p-4 hover-lift">
      <div className="container mx-auto">
        <p className="text-slate-800 dark:text-slate-50">&copy; 2026 MyCompany. All rights reserved.</p>
        <nav className="mt-2">
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-50 mx-2 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-50 mx-2 transition duration-300">Terms of Service</a>
          <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-50 mx-2 transition duration-300">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
