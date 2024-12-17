import React, { useEffect, useState } from "react";
import Product1 from "../assets/img/product_1.jpg";

const ProductCard = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover w-full h-full"
            src={Product1}
            alt="product image"
          />

          {/* Discount */}
          <span className="absolute top-0 left-0 m-2 rounded-full bg-red px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>

          {/* Add to Cart Button Pop-up */}
          <button className="absolute bottom-0 right-0 left-0 flex items-center justify-center bg-transparent text-white text-xs px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-1 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </span>
          </button>
        </a>

        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              The north coat
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-md font-bold text-black">$449</span>
              <span className="text-md text-slate-900 line-through ml-2">
                $699
              </span>
            </p>

            {/* Stars */}
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="orange"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}

              {/* Total Rating */}
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                (65)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;