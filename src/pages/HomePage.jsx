import React from "react";
import ProductCard from "../components/ProductCard";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div className="mx-32 my-4">
        <Banner/>
        <TitleSection section="Categories" title="Browse By Category" />
        <ProductCard />
    </div>
  );
};

export default HomePage;
