
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-mapleRed p-2 rounded">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L14.19,8.63L21.16,8.63L15.53,12.73L17.72,19.37L12,15.27L6.28,19.37L8.47,12.73L2.84,8.63L9.81,8.63L12,2Z" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            MapleKing<span className="text-mapleRed">Renovation</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-gray-600">
          <a href="#" className="hover:text-brightBlue transition-colors">Home</a>
          <a href="#services" className="hover:text-brightBlue transition-colors">Services</a>
          <a href="#workflow" className="hover:text-brightBlue transition-colors">Process</a>
          <a href="#contact-section" className="bg-brightBlue text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-md active:scale-95">
            Free Estimate
          </a>
        </nav>
        
        <div className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
