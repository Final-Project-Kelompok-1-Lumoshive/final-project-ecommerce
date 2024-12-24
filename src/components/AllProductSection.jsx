import React, { useState } from "react";
import ProductCard from "./ProductCard";
import TitleSection from "./TitleSection";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//itemsPerPage is the default number of items to show per page
//itemsToShow is the number of items to show initially based on itemsPerPage
//showMore is a boolean that determines whether to show the "Show More" button or not
//showPagination is a boolean that determines whether to show the pagination buttons or not

const AllProductSection = ({
  showMore = false,
  showPagination = true,
  itemsPerPage = 4,
  products,
  section = "Our Products",
  title = "Explore Our Products",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsToShow);

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

  // Handle "Show More" button click, load more items
  const handleShowMore = () => {
    setItemsToShow((prev) => prev + itemsPerPage);
  };

  // Pagination logic: get current page items
  const startIndex = (currentPage - 1) * itemsToShow;
  const currentItems = showMore
    ? products.slice(0, itemsToShow) // For "Show More"
    : products.slice(startIndex, startIndex + itemsPerPage); // For pagination

  return (
    <section className="bg-white py-12">
      <div className="mx-auto">
        {/* Title and Pagination Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Title and Description */}
          <TitleSection section={section} title={title} />

          {/* Pagination */}
          <div className="text-center">
            {showPagination && (
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
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
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
          {showMore ? (
            <button
              onClick={handleShowMore}
              className="px-4 py-2 text-white bg-red rounded hover:bg-orange-600"
            >
              Show More
            </button>
          ) : (
            <Link
              to="/all-product"
              className="px-4 py-2 text-white bg-red rounded hover:bg-orange-600"
            >
              View all Products
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProductSection;
