import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { langToggle } from "../redux/slices/langSlice";
import { authToggle } from "../redux/async/authSlice";
import DOMPurify from "dompurify";

import {
  IoChevronDownSharp,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosStarOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { RiChatSmileLine } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const auth = useSelector((state) => state.auth.auth);

  const [openLang, setOpenLang] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  const handleLogout = () => {
    setIsOpenModal(false);
    dispatch(authToggle());
    navigate("/");
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
        <div className="text-center md:px-56">
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
            className="flex items-center gap-2 justify-self-center"
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
          <div className="font-inter text-black font-bold text-xl">
            <Link to="/">Exclusive</Link>
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
              <li className={auth ? "hidden" : ""}>Sign Up</li>
            </Link>
          </ul>

          <div className="relative flex items-center space-x-4">
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
            <Link className="hover:text-red" to={"/cart"}>
              <IoCartOutline size={28} />
            </Link>
            <div
              onMouseOver={() => setIsOpenProfile(true)}
              onMouseOut={() => setIsOpenProfile(false)}
              className={`${
                auth ? "max-lg:hidden" : "hidden"
              } bg-red text-white p-1 cursor-pointer rounded-full`}
            >
              <BsPerson size={28} />
            </div>
            <ul
              onMouseOver={() => setIsOpenProfile(true)}
              onMouseOut={() => setIsOpenProfile(false)}
              className={`${
                isOpenProfile ? "flex" : "hidden"
              } absolute right-0 -bottom-32 flex-col gap-2 text-sm font-poppins text-white bg-gradient-to-b from-gray-300 to-black rounded p-4 transition-all duration-300`}
            >
              <Link to="/account/profile">
                <li className="flex items-center hover:text-red gap-2">
                  <BsPerson /> Manage My Account
                </li>
              </Link>
              <Link>
                <li className="flex items-center hover:text-red gap-2">
                  <FiShoppingBag /> My Order
                </li>
              </Link>
              <Link>
                <li className="flex items-center hover:text-red gap-2">
                  <IoIosStarOutline /> My Reviews
                </li>
              </Link>
              <li
                onClick={() => setIsOpenModal(true)}
                className="flex items-center hover:text-red cursor-pointer gap-2"
              >
                <TbLogout2 /> Logout
              </li>
            </ul>
          </div>

          <div
            className={`${
              isOpenModal
                ? "bg-black/[.2] z-50"
                : "bg-transparent pointer-events-none"
            } fixed bottom-0 top-0 left-0 right-0 flex items-center justify-center transition duration-300`}
          >
            <div
              className={`${
                isOpenModal ? "translate-y-0" : "translate-y-[200%]"
              } bg-white max-md:rounded-t-3xl rounded max-md:w-full max-md:h-96 p-4 flex flex-col items-center justify-center gap-4 transition duration-300`}
            >
              <button
                onClick={() => setIsOpenModal(false)}
                className="relative flex justify-end w-full p-2"
              >
                <div className="absolute h-1 w-6 bg-black rounded-full rotate-45"></div>
                <div className="absolute h-1 w-6 bg-black rounded-full -rotate-45"></div>
              </button>
              <RiChatSmileLine className="size-32 bg-red rounded-full text-white my-4" />
              <p className="font-poppins text-xl font-semibold">
                Get 10% off your first order by subscribe
              </p>
              <button
                onClick={() => setIsOpenModal(false)}
                className="bg-red text-white py-2 rounded w-full font-semibold hover:brightness-95 active:brightness-90 duration-200"
              >
                Subscribe
              </button>
              <button
                onClick={() => handleLogout()}
                className="bg-white border border-red text-red py-2 rounded w-full font-semibold active:brightness-90 duration-200"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen
                ? "bg-black/[.2] z-50"
                : "bg-transparent pointer-events-none"
            } fixed inset-0 text-black flex flex-col items-center transition duration-300`}
          >
            <div
              className={`${
                isOpen ? "translate-y-0" : "-translate-y-[100%]"
              } flex flex-col items-center bg-white w-full gap-2 rounded-b-2xl shadow-md transition duration-300`}
            >
              <div className="flex justify-between items-center w-full px-6 py-6">
                <Link to="/" className="font-poppins font-bold text-xl">
                  Exclusive
                </Link>
                <button
                  onClick={toggleMenu}
                  className="relative flex justify-center items-center border border-black rounded-full size-10"
                >
                  <div className="absolute h-1 w-6 bg-black rounded-full rotate-45"></div>
                  <div className="absolute h-1 w-6 bg-black rounded-full -rotate-45"></div>
                </button>
              </div>
              <div className="flex w-full px-6">
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-[#F5F5F5] rounded p-1 w-full"
                >
                  <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="What are you looking for?"
                    className="bg-transparent rounded outline-0 p-2 min-w-72"
                  />
                  <button className="absolute bottom-0 top-0 right-4">
                    <LuSearch size={20} />
                  </button>
                </form>
              </div>
              <ul className="font-poppins flex justify-start w-full flex-col">
                <Link
                  to={"/"}
                  onClick={toggleMenu}
                  className={`${
                    location.pathname === "/"
                      ? "font-medium border-red text-black"
                      : "border-white text-black/[.5]"
                  } border-l-8 pl-4 py-4`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to={"/contact"}
                  onClick={toggleMenu}
                  className={`${
                    location.pathname === "/contact"
                      ? "font-medium border-red text-black"
                      : "border-white text-black/[.5]"
                  } border-l-8 pl-4 py-4`}
                >
                  <li>Contact</li>
                </Link>
                <Link
                  to={"/about"}
                  onClick={toggleMenu}
                  className={`${
                    location.pathname === "/about"
                      ? "font-medium border-red text-black"
                      : "border-white text-black/[.5]"
                  } border-l-8 pl-4 py-4`}
                >
                  <li>About</li>
                </Link>
                <Link
                  to={"/wishlist"}
                  onClick={toggleMenu}
                  className={`${
                    location.pathname === "/wishlist"
                      ? "font-medium border-red text-black"
                      : "border-white text-black/[.5]"
                  } border-l-8 pl-4 py-4`}
                >
                  <li>Wishlist</li>
                </Link>
              </ul>
              <div className="w-full px-6">
                <div className={`${auth ? "flex" : "hidden"} items-center w-full gap-4`}>
                  <div className="bg-red text-white rounded-full p-2"><BsPerson size={28} /></div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                </div>
                <div className="w-full h-0.5 bg-black/[.3] rounded-full my-4"></div>
                <div className={`${auth ? "hidden" : "flex"} justify-end gap-3 w-full mt-6 py-6`}>
                  <Link
                    to="/auth"
                    onClick={toggleMenu}
                    className="border-2 border-red active:bg-red active:text-white rounded px-6 py-1.5"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/auth"
                    onClick={toggleMenu}
                    className="border-2 border-red bg-red active:brightness-75 text-white rounded px-6 py-1.5"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
