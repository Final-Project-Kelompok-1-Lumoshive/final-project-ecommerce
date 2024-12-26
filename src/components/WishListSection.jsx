import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const WishlistSection = () => {
  const items = useSelector((state) => state.wishlist.items);

  return (
    <div className="bg-white py-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-poppins font-semibold text-lg">Wishlist ({items.length})</h2>
        <button className="bg-white md:text-black text-red py-3 px-6 rounded md:border border-black/[.5] md:hover:bg-black md:hover:text-white">
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
