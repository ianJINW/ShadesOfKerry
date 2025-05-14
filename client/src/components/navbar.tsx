import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon, LogOutIcon } from "lucide-react";
import useAuthStore from '../store/auth.store';

const Navbar: React.FC = () => {
  const { isDark, toggleDarkMode, token, logout } = useAuthStore();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <nav className="bg-gray-800 text-mustard-yellow border-b border-mustard-yellow shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link to="/" className="text-3xl font-extrabold hover:text-yellow-400">
          Shades Of Kerry
        </Link>
        <div className="flex items-center space-x-6">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
            {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
          </button>
          <ul className="flex space-x-6">
            <li>
              <Link to="/playground" className="hover:text-yellow-400">
                Kerry's Playground
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="hover:text-yellow-400">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-yellow-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Me
              </Link>
            </li>
          </ul>
          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;