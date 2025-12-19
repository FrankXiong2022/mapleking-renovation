
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="bg-mapleRed p-1 rounded">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L14.19,8.63L21.16,8.63L15.53,12.73L17.72,19.37L12,15.27L6.28,19.37L8.47,12.73L2.84,8.63L9.81,8.63L12,2Z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              MapleKing<span className="text-mapleRed">Renovation</span>
            </span>
          </div>
          
          <div className="text-gray-400 text-sm font-semibold">
            &copy; {new Date().getFullYear()} MapleKing Renovation Inc. All Rights Reserved. Serving GTA: Toronto, Markham, Richmond Hill, Vaughan, Mississauga.
          </div>
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-brightBlue transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.791h-2.96v-3.434h2.96v-2.532c0-2.934 1.791-4.532 4.41-4.532 1.254 0 2.333.093 2.647.135v3.069h-1.815c-1.424 0-1.7.677-1.7 1.67v2.19h3.398l-.443 3.434h-2.955v8.791h6.05c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-brightBlue transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
