import React from "react";
import { Link } from "react-router-dom";

import plane from "../assets/plane.svg";
import qrcode from "../assets/qrcode.png";
import gplay from "../assets/gplay.png";
import appstore from "../assets/appstore.png";

const Footer = () => {
  return (
    <div className="relative flex justify-between items-start bg-black text-white px-32 py-20 pb-28">
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-2xl font-bold">Exclusive</h3>
        <h4 className="text-xl font-medium">Subscribe</h4>
        <p>Get 10% off your first order</p>
        <form className="relative border-2 border-white rounded-md p-1 min-w-52">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black rounded-md outline-0 p-2 max-w-36"
          />
          <button className="absolute bottom-0 top-0 right-4 bg-black">
            <img src={plane} alt="" />
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-bold">Support</h3>
        <p className="max-w-36">
          Jl. Gatot Subroto Jakarta, 12930, Indonesia. exclusive@gmail.com
        </p>
        <a href="tel:+62815-8888-9999">+62815-8888-9999</a>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-bold">Exclusive</h3>
        <ul className="flex flex-col gap-4">
          <Link className="hover:underline">My Account</Link>
          <Link className="hover:underline">Login / Register</Link>
          <Link className="hover:underline">Cart</Link>
          <Link className="hover:underline">Wishlist</Link>
          <Link className="hover:underline">Shop</Link>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-bold">Exclusive</h3>
        <ul className="flex flex-col gap-4">
          <Link className="hover:underline">Privacy Policy</Link>
          <Link className="hover:underline">Term Of Use</Link>
          <Link className="hover:underline">FAQ</Link>
          <Link className="hover:underline">Contact</Link>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-2xl font-bold">Exclusive</h3>
        <p className="text-xs text-white/[.7]">
          Save $3 with App New User Only
        </p>
        <div className="grid grid-cols-2 grid-rows-2 max-w-48">
          <img src={qrcode} alt="" className="row-span-2 w-20" />
          <a href="">
            <img src={gplay} alt="" className="row-span-1 w-28 h-full py-1" />
          </a>
          <a href="">
            <img
              src={appstore}
              alt=""
              className="row-span-1 w-28 h-full py-1"
            />
          </a>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 border-t-[0.5px] border-white/[.2] flex justify-center items-center w-full text-white/[.24] py-4">
        Copyright Lumoshive. All right reserved
      </div>
    </div>
  );
};

export default Footer;
