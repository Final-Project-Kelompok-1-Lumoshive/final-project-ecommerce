import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <nav className="fixed flex w-full flex-col z-50">
      <div className="bg-black text-white grid grid-cols-[1fr,2fr,1fr] justify-center items-center py-2">
        <div className="col-start-2 text-lg text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="" className="mx-1">
            ShopNow
          </a>
        </div>

        <span className="justify-self-center text-lg">English</span>
      </div>
      <div
        className={` w-full flex justify-between items-center py-4 md:py-6 px-10 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-black font-bold text-xl">
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
          <ul className="hidden md:flex space-x-4 text-black">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
            <Link to={"/about"}><li>About</li></Link>
            <Link to={"/auth"}><li>Sign Up</li></Link>
          </ul>

          {/* Search Box */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-4 py-1 rounded-lg hover:bg-black">
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
            <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
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
                className="absolute bottom-8 bg-white text-black font-bold py-2 px-4 text-2xl"
                onClick={toggleMenu}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
