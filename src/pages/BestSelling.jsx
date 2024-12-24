import React from "react";
import AllProductSection from "../components/AllProductSection";
import { useSelector } from "react-redux";

const BestSelling = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <div>
      <AllProductSection
        showMore={true}
        itemsPerPage={8}
        showPagination={false}
        products={products}
        section="Best Selling"
        title="Best Selling Products"
      />
    </div>
  );
};

export default BestSelling;
