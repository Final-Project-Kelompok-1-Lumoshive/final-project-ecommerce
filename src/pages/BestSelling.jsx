import React from "react";
import AllProductSection from "../components/AllProductSection";
import { useSelector } from "react-redux";
import SeoComponent from "../components/SeoComponent";

const BestSelling = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <div>
      <SeoComponent page="bestSelling" />
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
