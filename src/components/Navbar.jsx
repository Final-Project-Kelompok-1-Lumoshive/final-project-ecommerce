import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { langToggle } from "../redux/slices/langSlice";
import DOMPurify from "dompurify";

import { IoChevronDownSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const [openLang, setOpenLang] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setSearch(sanitizedValue);
  };

  const handleLangToggle = () => {
    dispatch(langToggle());
    setOpenLang(false);
  };

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
      <div className="relative font-poppins text-sm bg-black text-white justify-center items-center py-4">
        <div className="text-lg text-center md:px-56">
          {lang === "en"
            ? "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            : "Penawaran Panas Untuk Semua Baju Renang dan Pengiriman Express Gratis - Diskon 50%!"}
          <a href="" className="mx-1 underline font-semibold">
            {lang === "en" ? "Shop Now" : "Beli Sekarang"}
          </a>
        </div>
        <div className="max-md:hidden absolute lg:right-24 right-6 top-4">
          <button
            onClick={() => setOpenLang(!openLang)}
            className="flex items-center gap-2 justify-self-center text-lg"
          >
            {lang === "en" ? "English" : "Indonesia"} <IoChevronDownSharp />
          </button>
          <div
            className={`${
              openLang ? "flex" : "hidden"
            } flex-col absolute -bottom-18 bg-white text-black z-[100]`}
          >
            <button
              onClick={() => handleLangToggle()}
              disabled={lang === "en"}
              className="py-2 px-4 hover:bg-black/[.1]"
            >
              English
            </button>
            <button
              onClick={() => handleLangToggle()}
              disabled={lang === "id"}
              className="py-2 px-4 hover:bg-black/[.1]"
            >
              Indonesia
            </button>
          </div>
        </div>
      </div>
      <div
        className={` w-full flex justify-between items-center bg-white pt-4 pb-1 lg:px-24 px-6 md:border-b border-black/[.3] z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="py-3 flex justify-between items-center w-full">
          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              className="bg-transparent focus:outline-none p-2"
              onClick={toggleMenu}
            >
              <div className="bg-black rounded-full h-1 w-6 mb-1"></div>
              <div className="bg-black rounded-full h-1 w-6 mb-1"></div>
              <div className="bg-black rounded-full h-1 w-6"></div>
            </button>
          </div>

          {/* Logo */}
          <div className="text-black font-bold text-xl">
            <a href="/">Exclusive</a>
          </div>

          {/* Desktop Menu */}
          <ul className="font-poppins hidden lg:flex space-x-8 text-black">
            <Link
              to={"/"}
              className={
                location.pathname === "/"
                  ? "underline underline-offset-8 decoration-black/[.5]"
                  : "hover:underline underline-offset-8"
              }
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/contact"}
              className={
                location.pathname === "/contact"
                  ? "underline underline-offset-8 decoration-black/[.5]"
                  : "hover:underline underline-offset-8"
              }
            >
              <li>Contact</li>
            </Link>
            <Link
              to={"/about"}
              className={
                location.pathname === "/about"
                  ? "underline underline-offset-8 decoration-black/[.5]"
                  : "hover:underline underline-offset-8"
              }
            >
              <li>About</li>
            </Link>
            <Link
              to={"/auth"}
              className={
                location.pathname === "/auth"
                  ? "underline underline-offset-8 decoration-black/[.5]"
                  : "hover:underline underline-offset-8"
              }
            >
              <li>Sign Up</li>
            </Link>
          </ul>

          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <form
              onSubmit={handleSubmit}
              className="max-lg:hidden relative bg-[#F5F5F5] rounded p-1 min-w-64"
            >
              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="What are you looking for?"
                className="bg-transparent rounded outline-0 p-2 min-w-56"
              />
              <button className="absolute bottom-0 top-0 right-4">
                <LuSearch size={20} />
              </button>
            </form>
            <Link className="max-lg:hidden hover:text-red" to={"/wishlist"}>
              <IoHeartOutline size={28} />
            </Link>
            <button className="hover:text-red">
              <IoCartOutline size={28} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
              <ul className="text-xl text-center flex flex-col gap-6">
                <Link to={"/"} onClick={toggleMenu}>
                  <li>Home</li>
                </Link>
                <Link to={"/contact"} onClick={toggleMenu}>
                  <li>Contact</li>
                </Link>
                <Link to={"/about"} onClick={toggleMenu}>
                  <li>About</li>
                </Link>
                <Link to={"/wishlist"} onClick={toggleMenu}>
                  <li>Wishlist</li>
                </Link>
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
