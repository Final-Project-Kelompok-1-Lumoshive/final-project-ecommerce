// src/pages/AllProduct.jsx

import React, { useState } from "react";
import AllProductSection from "../components/AllProductSection";
import CategorySidebar from "../components/CategorySidebar";
import { useSelector } from "react-redux";
import { getUniqueCategories } from "../redux/async/productSlice";

const AllProduct = () => {
  const products = useSelector((state) => state.products.items);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Get unique categories from the products
  const categories = ["All Products", ...getUniqueCategories(products)];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex">
      {/* Categories sidebar*/}
      <CategorySidebar
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />

      {/* All products section */}
      <div className="flex-1">
        <AllProductSection
          showMore={true}
          itemsPerPage={6}
          showPagination={false}
          products={filteredProducts}
        />
      </div>
    </div>
  );
};

export default AllProduct;
