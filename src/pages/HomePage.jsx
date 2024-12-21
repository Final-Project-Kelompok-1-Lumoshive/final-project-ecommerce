import React from "react";
import AllProductSection from "../components/AllProductSection";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";
import delivery from "../assets/icon-delivery.svg";
import customer from "../assets/Icon-Customer service.svg";
import secure from "../assets/Icon-secure.svg";

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <TitleSection section="Categories" title="Browse By Category" />
        <ProductCard />
        <AllProductSection />
        <div className="flex justify-center items-center gap-20">
          <div className="font-poppins text-center py-14">
            <img
              src={delivery}
              className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
            />
            <h2 className="font-bold text-xl my-2">FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="font-poppins text-center py-14">
            <img
              src={customer}
              className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
            />
            <h2 className="font-bold text-xl my-2">24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="font-poppins text-center py-14">
            <img
              src={secure}
              className="text-black bg-black text-white text-6xl p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8"
            />
            <h2 className="font-bold text-xl my-2">MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
