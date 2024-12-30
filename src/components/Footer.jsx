import React, { useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import plane from "../assets/plane.svg";
import qrcode from "../assets/qrcode.png";
import gplay from "../assets/gplay.png";
import appstore from "../assets/appstore.png";

import { FaRegCopyright } from "react-icons/fa6";
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setEmail(sanitizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className="relative font-poppins flex flex-wrap justify-between items-start gap-8 bg-black text-white lg:px-24 px-6 py-20 pb-28">
      <div className="max-md:order-1 flex max-md:justify-between items-center max-md:w-full">
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-bold">Exclusive</h3>
          <h4 className="text-xl font-medium">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <form onSubmit={handleSubmit} className="relative border-2 border-white rounded-md p-1 min-w-56">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-black rounded-md outline-0 p-2 max-w-36"
            />
            <button className="absolute bottom-0 top-0 right-4 bg-black">
              <img src={plane} alt="" />
            </button>
          </form>
        </div>
        <div className="flex md:hidden flex-col justify-between gap-6">
          <a href="">
            <RiFacebookLine className="text-2xl" />
          </a>
          <a href="">
            <RiInstagramLine className="text-2xl" />
          </a>
          <a href="">
            <RiTwitterLine className="text-2xl" />
          </a>
          <a href="">
            <RiLinkedinLine className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="max-md:order-3 flex flex-col justify-center gap-6 max-md:min-w-48">
        <h3 className="text-2xl font-medium">Support</h3>
        <p className="max-w-36">
          Jl. Gatot Subroto Jakarta, 12930, Indonesia. exclusive@gmail.com
        </p>
        <a href="tel:+62815-8888-9999">+62815-8888-9999</a>
      </div>
      <div className="max-md:order-4 flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-medium">Account</h3>
        <ul className="flex flex-col gap-4">
          <Link to={"/account/profile"} className="hover:underline">My Account</Link>
          <Link to={"/auth"} className="hover:underline">Login / Register</Link>
          <Link to={"/cart"} className="hover:underline">Cart</Link>
          <Link to={"/wishlist"} className="hover:underline">Wishlist</Link>
          <Link className="hover:underline">Shop</Link>
        </ul>
      </div>
      <div className="max-md:order-2 flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-medium">Quick Link</h3>
        <ul className="flex flex-col gap-4">
          <Link className="hover:underline">Privacy Policy</Link>
          <Link className="hover:underline">Term Of Use</Link>
          <Link className="hover:underline">FAQ</Link>
          <Link to={"/contact"} className="hover:underline">Contact</Link>
        </ul>
      </div>
      <div className="max-md:order-5 flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-medium">Download App</h3>
        <p className="text-xs text-white/[.7]">
          Save $3 with App New User Only
        </p>
        <div className="grid grid-cols-2 grid-rows-2 max-w-48">
          <img src={qrcode} alt="" className="row-span-2 w-20" />
          <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
            <img src={gplay} alt="" className="row-span-1 w-28 h-full py-1" />
          </a>
          <a href="https://www.apple.com/id/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={appstore}
              alt=""
              className="row-span-1 w-28 h-full py-1"
            />
          </a>
        </div>
        <div className="md:flex hidden gap-6 w-48">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <RiFacebookLine className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <RiInstagramLine className="text-2xl" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <RiTwitterLine className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 border-t-[0.5px] border-white/[.2] flex justify-center items-center w-full text-white/[.24] py-4">
        <FaRegCopyright className="me-2" /> Copyright Lumoshive. All right
        reserved
      </div>
    </div>
  );
};

export default Footer;