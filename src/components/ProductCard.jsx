import React, { useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/async/wishlistSlice";

const ProductCard = ({ product, isInWishlistSection = false }) => {
  const {
    image,
    title,
    discount,
    price,
    priceBeforeDiscount,
    rating,
    reviews,
  } = product;

  const dispatch = useDispatch();

  // Wishlist state
  const wishlist = useSelector((state) => state.wishlist.items);

  // Check if product is in wishlist
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // Wishlist toggle handler
  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-l"
        href="#"
      >
        {/* Product Image */}
        <img
          className="object-cover w-full h-full rounded-l"
          src={image}
          alt={title}
        />

        {/* Discount */}
        {discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-red px-2 text-center text-sm font-medium text-white">
            {discount}% OFF
          </span>
        )}

        {/* New Arrival */}
        {/* {discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-red px-2 text-center text-sm font-medium text-white">
            New
          </span>
        )} */}

        {/* Wishlist/Trash Icon */}
        <button
          className="absolute top-0 right-0 m-2 rounded-full bg-white p-2 shadow-md z-10"
          onClick={handleWishlist}
        >
          {isWishlisted ? (
            isInWishlistSection ? (
              <FaTrash className="text-black hover:text-gray-600" size={20} />
            ) : (
              <FaHeart className="text-red hover:text-orange-400" size={20} />
            )
          ) : (
            <FaHeart
              className="text-gray-400 hover:text-orange-500"
              size={20}
            />
          )}
        </button>

        {/* Add to Cart Button Pop-up */}
        <button className="absolute bottom-0 right-0 left-0 flex items-center justify-center bg-black text-white text-xs px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-md font-bold text-black">${price}</span>
            {priceBeforeDiscount && (
              <span className="text-md text-slate-900 line-through ml-2">
                ${priceBeforeDiscount}
              </span>
            )}
          </p>

          {/* Stars */}
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  aria-hidden="true"
                  className={`h-5 w-5 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}

            {/* Total Reviews */}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              ({reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
