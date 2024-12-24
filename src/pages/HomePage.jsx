import React from "react";
import AllProductSection from "../components/AllProductSection";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";
import delivery from "../assets/icon-delivery.svg";
import customer from "../assets/Icon-Customer service.svg";
import secure from "../assets/Icon-secure.svg";
import { useSelector } from "react-redux";
import BestSellingSection from "../components/BestSellingSection";

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <div>
      <Banner />
      <TitleSection section="Categories" title="Browse By Category" />
      <BestSellingSection />
      <AllProductSection
        showMore={false}
        itemsPerPage={8}
        showPagination={true}
        products={products}
      />
      <div className="flex flex-wrap justify-center items-center lg:gap-20 gap-4">
        <div className="font-poppins text-center md:py-14 py-4 max-md:max-w-40">
          <img
            src={delivery}
            className="text-black bg-black text-white p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8 max-md:scale-75"
          />
          <h2 className="font-bold md:text-xl text-xs my-2">
            FREE AND FAST DELIVERY
          </h2>
          <p className="md:text-base text-xs">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="font-poppins text-center md:py-14 py-4 max-md:max-w-40">
          <img
            src={customer}
            className="text-black bg-black text-white p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8 max-md:scale-75"
          />
          <h2 className="font-bold md:text-xl text-xs my-2">
            24/7 CUSTOMER SERVICE
          </h2>
          <p className="md:text-base text-xs">Friendly 24/7 customer support</p>
        </div>
        <div className="font-poppins text-center md:py-14 py-4 max-md:max-w-40">
          <img
            src={secure}
            className="text-black bg-black text-white p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8 max-md:scale-75"
          />
          <h2 className="font-bold md:text-xl text-xs my-2">
            MONEY BACK GUARANTEE
          </h2>
          <p className="md:text-base text-xs">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
