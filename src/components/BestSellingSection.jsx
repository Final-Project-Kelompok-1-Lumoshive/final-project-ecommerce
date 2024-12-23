import React, { useState } from "react";
import ProductCard from "./ProductCard";
import TitleSection from "./TitleSection";
import { useSelector } from "react-redux";

const BestSellingSection = () => {
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
      <div className="max-w-7xl mx-auto">
        {/* Title and Pagination Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Title and Description */}
          <TitleSection
            section={"Best Selling Products"}
            title="Best Selling Products"
          />

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-black-500 font-medium ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:underline"
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-black-500 font-medium ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:underline"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlistSection={false}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-8">
          <a
            href=""
            className="px-4 py-2 text-white bg-red rounded-md hover:bg-gray-800"
          >
            View all Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;
