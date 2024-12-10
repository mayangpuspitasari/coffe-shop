import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Menyimpan status login

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Mixtas
        </a>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links with Animation */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } md:max-h-full md:opacity-100 md:flex md:space-x-6 absolute md:static bg-gray-900 w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 shadow-md md:shadow-none overflow-hidden`}
        >
          <a
            href="#shop"
            className="block md:inline text-white hover:text-gray-400 transition duration-200"
          >
            Shop
          </a>
          <a
            href="#pages"
            className="block md:inline text-white hover:text-gray-400 transition duration-200"
          >
            Produk
          </a>
          <a
            href="#blog"
            className="block md:inline text-white hover:text-gray-400 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="block md:inline text-white hover:text-gray-400 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#cart" className="text-white hover:text-gray-400">
            🛒
          </a>

          {/* Tombol Login/Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="text-white hover:text-gray-400 transition duration-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

