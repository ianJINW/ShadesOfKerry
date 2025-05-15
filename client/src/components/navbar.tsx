import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon, LogOutIcon, Menu, X } from "lucide-react";
import useAuthStore from '../store/auth.store';

const Navbar: React.FC = () => {
  const { isDark, toggleDarkMode, token, logout } = useAuthStore();
  const nav = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    nav('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold hover:text-[var(--mustard-yellow)]">
          Shades Of Kerry
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
            {isDark ? (
              <SunIcon size={24} className="text-[var(--mustard-yellow)]" />
            ) : (
              <MoonIcon size={24} className="text-[var(--dark-teal)]" />
            )}
          </button>
          <ul className="flex space-x-6">
            <li><Link to="/playground" className="hover:text-[var(--dark-teal)]">Kerry's Playground</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--dark-teal)]">Sustainability</Link></li>
            <li><Link to="/portfolio" className="hover:text-[var(--dark-teal)]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--dark-teal)]">Contact Me</Link></li>
          </ul>
          {token ? (
            <button
              onClick={handleLogout}
              className="button button-danger flex items-center space-x-2"
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </button>
          ) : (
            <Link to="/login" className="button button-primary">
              Login
            </Link>
          )}
        </div>
        <button onClick={toggleSidebar} className="md:hidden p-2 rounded-full hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isSidebarOpen && (
        <div className="md:hidden bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] p-6">
          <ul className="space-y-4">
            <li><Link to="/playground" className="hover:text-[var(--mustard-yellow)]">Kerry's Playground</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--mustard-yellow)]">Sustainability</Link></li>
            <li><Link to="/portfolio" className="hover:text-[var(--mustard-yellow)]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--mustard-yellow)]">Contact Me</Link></li>
          </ul>
          <div className="mt-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
              {isDark ? <SunIcon size={24} className="text-[var(--mustard-yellow)]" /> : <MoonIcon size={24} className="text-gray-400" />}
            </button>
            {token ? (
              <button
                onClick={handleLogout}
                className="button button-danger mt-4 w-full"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="button button-primary mt-4 w-full block">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;