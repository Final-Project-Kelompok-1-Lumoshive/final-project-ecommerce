import React, { useState } from "react";
import ProductCard from "./ProductCard";
import TitleSection from "./TitleSection";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        <div className="flex justify-between items-center md:items-end gap-3 mb-8">
          {/* Title and Description */}
          <TitleSection section={"This Month"} title="Best Selling Products" />

          {/* View All Products Button */}
            <Link
              to={"/best-selling"}
              className="font-poppins px-4 py-2 md:text-white text-red md:bg-red rounded min-w-24 active:brightness-90"
            >
              View all
            </Link>
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

export default BestSellingSection;
