import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-black">Your wishlist is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
