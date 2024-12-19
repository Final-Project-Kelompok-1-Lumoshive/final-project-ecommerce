import React, { useState } from "react";
import ProductCard from "./ProductCard";

const AllProductSection = () => {
  // Updated product data
  const hardcodedProducts = [
    {
      id: 1,
      title: "Product 1",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=60",
      price: 100,
      priceBeforeDiscount: 130,
      discount: 23,
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      title: "Product 2",
      image:
        "https://images.unsplash.com/photo-1589396570284-901e7dca5c0c?auto=format&fit=crop&w=500&q=60",
      price: 120,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 48,
    },
    {
      id: 3,
      title: "Product 3",
      image:
        "https://images.unsplash.com/photo-1571583035141-bcdb96e85314?auto=format&fit=crop&w=500&q=60",
      price: 150,
      priceBeforeDiscount: 200,
      discount: 25,
      rating: 4,
      reviews: 76,
    },
    {
      id: 4,
      title: "Product 4",
      image:
        "https://images.unsplash.com/photo-1517959105827-e88c704fbd2d?auto=format&fit=crop&w=500&q=60",
      price: 90,
      priceBeforeDiscount: null,
      discount: null,
      rating: 3,
      reviews: 23,
    },
    {
      id: 5,
      title: "Product 5",
      image:
        "https://images.unsplash.com/photo-1536431312212-49977d22c0b5?auto=format&fit=crop&w=500&q=60",
      price: 200,
      priceBeforeDiscount: 250,
      discount: 20,
      rating: 5,
      reviews: 89,
    },
    {
      id: 6,
      title: "Product 6",
      image:
        "https://images.unsplash.com/photo-1565692775698-4c4bd1be2a56?auto=format&fit=crop&w=500&q=60",
      price: 75,
      priceBeforeDiscount: 100,
      discount: 25,
      rating: 3,
      reviews: 33,
    },
    {
      id: 7,
      title: "Product 7",
      image:
        "https://images.unsplash.com/photo-1545239705-98aef7b636aa?auto=format&fit=crop&w=500&q=60",
      price: 300,
      priceBeforeDiscount: 400,
      discount: 25,
      rating: 4,
      reviews: 71,
    },
    {
      id: 8,
      title: "Product 8",
      image:
        "https://images.unsplash.com/photo-1575224945835-fc03c17dd275?auto=format&fit=crop&w=500&q=60",
      price: 140,
      priceBeforeDiscount: null,
      discount: null,
      rating: 4,
      reviews: 49,
    },
  ];

  const [products, setProducts] = useState(hardcodedProducts);
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
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-3xl font-bold mb-4">All Products</h2>
        <p className="text-lg mb-8">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
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
    </section>
  );
};

export default AllProductSection;
