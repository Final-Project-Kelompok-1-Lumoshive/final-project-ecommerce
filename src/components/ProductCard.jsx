import React, { useState, useMemo } from "react";
import { IoHeartOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/async/productSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/async/wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/async/cartSlice";
import { IoStarOutline, IoStarHalf, IoStar } from "react-icons/io5";

const ProductCard = ({ product, isInWishlistSection = false }) => {
  const {
    sku,
    image = [],
    title = "Unknown Product",
    discount = 0,
    price = 0,
    priceBeforeDiscount = null,
    rating = 0,
    reviews = 0,
    stock = 0,
  } = product || {};

  const dispatch = useDispatch();

  // Wishlist state
  const wishlist = useSelector((state) => state.wishlist.items);

  // Cart state
  const cartItems = useSelector((state) => state.cart.items);

  // Check if product is in wishlist
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // Wishlist toggle handler and for remove
  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  // Add to Cart handler
  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent click propagation
    event.preventDefault();

    console.log("stock", stock);
    const existingItem = cartItems.find((item) => item.id === product.id);
    const currentQuantityCart = existingItem ? existingItem.quantity : 0;

    // console.log(
    //   "existingItem Stock: ",
    //   existingItem.title,
    //   existingItem.quantity
    // );

    // Calculate total quantity to be added
    const totalQuantity = currentQuantityCart + 1;

    // Check if the total quantity exceeds stock
    if (totalQuantity > stock) {
      alert(
        `You can only add up to ${
          stock - currentQuantityCart
        } of this product to your cart.`
      );
      return; // Exit the function if the limit is exceeded (not added to cart)
    }

    // Check if the product is in stock
    if (stock > 0) {
      // Dispatch the addToCart action with the product and the quantity
      dispatch(addToCart({ ...product, quantity: 1 }));
    } else {
      alert("Sorry, this product is out of stock."); // Alert for out of stock
    }
  };

  // Rating
  // Calculate the number of full stars and half stars (max 5 stars)
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a decimal (half star)
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="relative flex w-full max-w-md flex-col overflow-hidden bg-white group">
      <Link
        to={`/product/${sku}`}
        onClick={() => dispatch(getProduct(sku))}
        className="relative mt-3 flex lg:h-60 h-44 overflow-hidden rounded"
      >
        {/* Product Image */}
        <img
          className="object-cover w-full h-full rounded"
          src={image[0]}
          alt={title}
        />

        {/* Discount */}
        {discount && (
          <span className="absolute top-0 left-0 m-2 rounded bg-red px-2 text-center text-sm font-medium text-white">
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
          className={`absolute top-0 right-0 m-2 rounded-full p-2 shadow-md z-10 ${
            isWishlisted ? "bg-red" : "bg-white"
          }`}
          onClick={(event) => {
            event.stopPropagation(); // Prevent click propagation
            handleWishlist();
            event.preventDefault();
          }}
        >
          {isWishlisted ? (
            isInWishlistSection ? (
              <IoTrashOutline
                className="text-white hover:text-gray-600"
                size={20}
              />
            ) : (
              <IoHeartOutline
                className="text-white hover:brightness-125"
                size={20}
              />
            )
          ) : (
            <IoHeartOutline className="text-black hover:text-red" size={20} />
          )}
        </button>

        {/* Add to Cart Button Pop-up */}
        <button
          // if stock is less than or equal to 0, always show the button
          className={`absolute bottom-0 right-0 left-0 flex items-center justify-center bg-black text-white text-xs px-4 py-2 rounded ${
            stock <= 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-300`}
          onClick={handleAddToCart}
          disabled={stock <= 0}
        >
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
            {stock > 0 ? "Add to Cart" : "Out of Stock"}
          </span>
        </button>
      </Link>

      {/* Product Details */}
      <div className="mt-4 pb-5">
        <Link
          to={`/product/${sku}`}
          onClick={() => dispatch(getProduct(sku))}
          className="block"
        >
          <h5 className="font-medium">{title}</h5>
        </Link>
        {/* Price and Rating Section */}
        <div className="mt-2 mb-5 flex items-center justify-start gap-x-4 gap-y-1 flex-wrap">
          {/* Price */}
          <p>
            <span className="font-medium text-black">${price}</span>
            {priceBeforeDiscount && (
              <span className="font-medium text-black/[.5] line-through ml-2">
                ${priceBeforeDiscount}
              </span>
            )}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center">
            {/* Stars */}
            {/* Render full stars */}
            {Array(fullStars)
              .fill(0)
              .map((_, i) => (
                <IoStar key={`full-${i}`} className="text-yellow-400 h-5 w-5" />
              ))}
            {/* Render half star if applicable */}
            {hasHalfStar && <IoStarHalf className="text-yellow-400 h-5 w-5" />}
            {/* Render empty stars */}
            {Array(emptyStars)
              .fill(0)
              .map((_, i) => (
                <IoStarOutline
                  key={`empty-${i}`}
                  className="text-gray-300 h-5 w-5"
                />
              ))}

            {/* Total Reviews */}
            <span className="mr-2 ml-2 py-0.5 text-sm text-black/[.5] font-semibold">
              ({reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
