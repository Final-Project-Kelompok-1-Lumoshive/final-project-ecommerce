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
      <div className="max-w-7xl mx-auto">
        {/* Title and Pagination Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Title and Description */}
          <TitleSection section="" title="Just For You" />

          {/* View All Products Button */}
          <div className="text-center mt-8">
            <Link
              to={"/best-selling"}
              className="px-4 py-2 text-white bg-red rounded-md hover:bg-gray-800"
            >
              See all
            </Link>
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
      </div>
    </section>
  );
};

export default JustForYouSection;
