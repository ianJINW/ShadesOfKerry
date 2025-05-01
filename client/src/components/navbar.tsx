import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-mustard-yellow border-b border-mustard-yellow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-600">
          Shades Of Kerry
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/about" className="hover:text-yellow-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;