import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center py-4 md:py-6 px-10 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-default shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <a href="/">Exclusive</a>
        </div>

        {/* Hamburger Button */}
        <div>
          <button
            className="bg-transparent focus:outline-none p-2 md:hidden"
            onClick={toggleMenu}
          >
            <div className="bg-white h-1 w-6 mb-1"></div>
            <div className="bg-white h-1 w-6 mb-1"></div>
            <div className="bg-white h-1 w-6"></div>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>

        {/* Search Box */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Wishlist and Cart Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600">
            <span className="material-icons">favorite_border</span>
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <span className="material-icons">shopping_cart</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white text-primary-default flex flex-col items-center justify-center z-50">
            <div className="text-2xl text-center mb-8 font-semiBold">
              FurniShop
            </div>
            <ul className="text-xl text-center space-y-6">
              <li>
                <a href="/" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/" onClick={toggleMenu}>
                  Sign Up
                </a>
              </li>
            </ul>
            <button
              className="absolute bottom-8 bg-white text-primary-default font-bold py-2 px-4 text-2xl"
              onClick={toggleMenu}
            >
              X
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
