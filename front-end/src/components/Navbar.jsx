import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-900">
          Mixtas
        </a>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <a href="#shop" className="block md:inline hover:text-gray-900">
            Shop
          </a>
          <a href="#pages" className="block md:inline hover:text-gray-900">
            Produk
          </a>
          <a href="#blog" className="block md:inline hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="block md:inline hover:text-gray-900">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#cart" className="text-gray-700 hover:text-gray-900">
            🛒
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

