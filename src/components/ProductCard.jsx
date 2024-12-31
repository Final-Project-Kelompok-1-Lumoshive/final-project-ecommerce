import React, { useState, useMemo } from "react";
import { IoHeartOutline, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {getProduct} from "../redux/async/productSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/async/wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/async/cartSlice";

const ProductCard = ({ product, isInWishlistSection = false }) => {
  const {
    sku,
    image = "",
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

  // Wishlist icon

  // const wishlistIcon = isWishlisted ? (
  //   isInWishlistSection ? (
  //     <FaTrash className="text-black hover:text-gray-600" size={20} />
  //   ) : (
  //     <FaHeart className="text-red hover:text-orange-400" size={20} />
  //   )
  // ) : (
  //   <FaHeart className="text-gray-400 hover:text-orange-500" size={20} />
  // );

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

  return (
    <div className="relative flex w-full max-w-md flex-col overflow-hidden bg-white group">
      <Link to={`/product/${sku}`} onClick={() => dispatch(getProduct(sku))} className="relative mt-3 flex lg:h-60 h-44 overflow-hidden rounded">
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
              <IoTrashOutline className="text-white hover:text-gray-600" size={20} />
            ) : (
              <IoHeartOutline className="text-white hover:brightness-125" size={20} />
            )
          ) : (
            <IoHeartOutline
              className="text-black hover:text-red"
              size={20}
            />
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
        <Link to={`/product/${sku}`} onClick={() => dispatch(getProduct(sku))} className="block">
          <h5 className="font-medium">{title}</h5>
        </Link>
        {/* Price and Rating Section */}
        <div className="mt-2 mb-5 flex items-center justify-start gap-x-4 gap-y-1 flex-wrap">
          {/* Price */}
          <p>
            <span className="font-medium text-red text-black">${price}</span>
            {priceBeforeDiscount && (
              <span className="font-medium text-black/[.5] line-through ml-2">
                ${priceBeforeDiscount}
              </span>
            )}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center">
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
