import React from "react";
import Teams from "../components/Teams.jsx";

import { PiCurrencyCircleDollarLight } from "react-icons/pi";

import about from "../assets/about.png";
import shop from "../assets/icon_shop.svg";
import bag from "../assets/Icon-Shopping bag.svg";
import moneybag from "../assets/money-bag.svg";
import dollarbag from "../assets/dollar-bag.svg";
import delivery from "../assets/icon-delivery.svg";
import customer from "../assets/Icon-Customer service.svg";
import secure from "../assets/Icon-secure.svg";

const About = () => {
  return (
    <div>
      <div className="font-poppins flex gap-3">
        <p className="opacity-50">Home</p>
        <p className="opacity-50">/</p>
        <p>About</p>
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="flex flex-col gap-10">
          <h1 className="font-inter text-6xl font-semibold">Our Story</h1>
          <div className="font-poppins flex flex-col gap-6 max-w-xl">
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <img src={about} alt="" className="max-h-[38rem] max-w-xl translate-x-24" />
      </div>
      <div className="font-inter grid grid-cols-4 gap-6 my-32">
        <div className="group border border-black/[.3] hover:border-red rounded-md text-center py-14 hover:bg-red hover:text-white hover:shadow-xl duration-200 px-7">
          <div className="w-fit mx-auto bg-black group-hover:bg-white outline outline-8 outline-black/[.3] group-hover:outline-white/[.3] p-2 mb-8 rounded-full duration-200">
            <img
              src={shop}
              alt=""
              className="mx-auto group-hover:brightness-0 duration-200"
            />
          </div>
          <h2 className="font-inter font-bold text-3xl my-2">10.5k</h2>
          <p className="font-poppins">Sallers active our site</p>
        </div>
        <div className="group border border-black/[.3] hover:border-red rounded-md text-center py-14 hover:bg-red hover:text-white hover:shadow-xl duration-200">
          <PiCurrencyCircleDollarLight className="text-black bg-black group-hover:bg-white text-white text-6xl group-hover:text-black p-1 rounded-full outline outline-8 outline-black/[.3] group-hover:outline-white/[.3] mx-auto mb-8 duration-200" />
          <h2 className="font-inter font-bold text-3xl my-2">33k</h2>
          <p className="font-poppins">Monthly Product Sale</p>
        </div>
        <div className="group border border-black/[.3] hover:border-red rounded-md text-center py-14 hover:bg-red hover:text-white hover:shadow-xl duration-200">
          <div className="w-fit mx-auto bg-black group-hover:bg-white outline outline-8 outline-black/[.3] group-hover:outline-white/[.3] p-2 mb-8 rounded-full duration-200">
            <img
              src={bag}
              alt=""
              className="mx-auto group-hover:brightness-0 duration-200"
            />
          </div>
          <h2 className="font-inter font-bold text-3xl my-2">45.5k</h2>
          <p className="font-poppins">Customer active in our site</p>
        </div>
        <div className="group border border-black/[.3] hover:border-red rounded-md text-center py-14 hover:bg-red hover:text-white hover:shadow-xl duration-200">
          <div className="relative w-fit mx-auto bg-black group-hover:bg-white outline outline-8 outline-black/[.3] group-hover:outline-white/[.3] p-2 mb-8 rounded-full duration-200">
            <img
              src={moneybag}
              alt=""
              className="mx-auto group-hover:brightness-0 duration-200"
            />
            <img
              src={dollarbag}
              alt=""
              className="absolute brightness-0 group-hover:brightness-100 bottom-0 my-3 mx-2.5 group-hover:brightness-0 duration-200"
            />
          </div>
          <h2 className="font-inter font-bold text-3xl my-2">25k</h2>
          <p className="font-poppins">Anual gross sale in our site</p>
        </div>
      </div>
      <div className="mb-32">
        <Teams />
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="font-poppins text-center py-14">
          <img
            src={delivery}
            className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
          />
          <h2 className="font-bold text-xl my-2">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="font-poppins text-center py-14">
          <img
            src={customer}
            className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
          />
          <h2 className="font-bold text-xl my-2">24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="font-poppins text-center py-14">
          <img
            src={secure}
            className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
          />
          <h2 className="font-bold text-xl my-2">MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;
