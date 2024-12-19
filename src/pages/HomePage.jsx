import React from "react";
import AllProductSection from "../components/AllProductSection";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div className="mx-32 my-4">
      <Banner />
      <TitleSection section="Categories" title="Browse By Category" />
      <AllProductSection />
    </div>
  );
};

export default HomePage;
