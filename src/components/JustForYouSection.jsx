import React, { useState } from "react";
import ProductCard from "./ProductCard";
import TitleSection from "./TitleSection";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JustForYouSection = () => {
  const products = useSelector((state) => state.products.items);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Pagination logic: get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto">
        {/* Title and Pagination Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Title */}
          <div className='flex gap-4 items-center'>
                <div className='md:flex hidden w-5 h-10 bg-red rounded'></div>
                <p className='font-poppins font-semibold text-lg'>Just For You</p>
          </div>

          {/* View All Products Button */}
          <div className="text-center">
            <Link
              to={"/best-selling"}
              className="bg-white md:text-black text-red py-3 px-6 rounded md:border border-black/[.5] md:hover:bg-black md:hover:text-white"
            >
              See all
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlistSection={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JustForYouSection;
