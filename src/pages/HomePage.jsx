import React from "react";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <TitleSection section="Categories" title="Browse By Category" />
    </div>
  );
};

export default HomePage;
