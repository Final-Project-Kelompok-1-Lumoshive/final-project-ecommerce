import React, { useEffect, useState } from "react";
import apiClient from "../services/api";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const fetchProducts = (page) => {
    apiClient
      .get(`/products?page=${page}&limit=8`)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
      });
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  if (!products) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden text-left">
              <img
                src={product.image}
                alt={product.title}
                className="h-72 w-full object-cover border rounded-lg shadow-sm "
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600">
                  {product.price_after_discount ? (
                    <>
                      <span className="text-primary-default font-semibold mr-2">
                        ${product.price_after_discount}
                      </span>
                      <span className="line-through text-gray-400">
                        ${product.price}
                      </span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </p>
              </div>
            </div>
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

export default ProductCard;
