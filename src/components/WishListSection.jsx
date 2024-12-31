import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { addToCart } from "../redux/async/cartSlice";

const WishlistSection = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleMoveAllToBag = () => {
    items.forEach((item) => {
      // Dispatch an action to add each item to the cart with a quantity of 1, quantity is not declared in the reducer
      dispatch(addToCart({ ...item, quantity: 1 }));
    });
  };

  return (
    <div className="bg-white py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-poppins font-semibold text-lg">
          Wishlist ({items.length})
        </h2>
        <button
          className="bg-white md:text-black text-red py-3 px-6 rounded md:border border-black/[.5] md:hover:bg-black md:hover:text-white"
          onClick={handleMoveAllToBag}
        >
          Move All To Bag
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            isInWishlistSection={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistSection;
