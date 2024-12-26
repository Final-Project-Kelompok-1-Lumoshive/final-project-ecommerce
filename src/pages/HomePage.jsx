import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AllProductSection from "../components/AllProductSection";
import BestSellingSection from "../components/BestSellingSection";
import TitleSection from "../components/TitleSection";
import Banner from "../components/Banner";

import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import delivery from "../assets/icon-delivery.svg";
import customer from "../assets/Icon-Customer service.svg";
import secure from "../assets/Icon-secure.svg";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import CategoryButton from "../components/CategoryButton";
import RecommendSection from "../components/RecommendSection";

const HomePage = () => {
  const { category } = useSelector((state) => state.fetch);
  const products = useSelector((state) => state.products.items);
  const [slides, setSlides] = useState(6);
  const swiperRef = useRef(null);

  const updateSlides = () => {
    if (window.innerWidth < 640) {
      setSlides(2.5);
    } else if (window.innerWidth < 1024) {
      setSlides(4);
    } else {
      setSlides(6);
    }
  };

  useEffect(() => {
    updateSlides(); // Set initial slides count
    window.addEventListener("resize", updateSlides); // Add resize event listener

    return () => {
      window.removeEventListener("resize", updateSlides); // Clean up event listener
    };
  }, []);
  return (
    <div>
      <Banner />
      <div className="lg:py-14 pt-12">
        <div className="flex justify-between items-end w-full">
          <TitleSection section="Categories" title="Browse By Category" />
          <div className="md:flex hidden gap-2">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="bg-[#F5F5F5] hover:bg-black/[.1] active:bg-black/[.2] h-10 w-10 rounded-full flex justify-center items-center"
            >
              <IoArrowBackOutline className="text-2xl" />
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="bg-[#F5F5F5] hover:bg-black/[.1] active:bg-black/[.2] h-10 w-10 rounded-full flex justify-center items-center"
            >
              <IoArrowForwardOutline className="text-2xl" />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={slides}
          spaceBetween={30}
          modules={[Navigation, Pagination, A11y]}
          className="flex items-center lg:my-10 mt-10"
        >
          <div className="hidden">
          <CategoryButton ref={swiperRef} />
          </div>
          {category.map((item) => (
            <SwiperSlide key={item.name}>
              <Link className="font-poppins text-center flex flex-col justify-center items-center gap-4 border border-black/[.3] rounded p-6 w-full select-none hover:bg-black/[.05]">
                <img src={item.icon} alt="" />
                <p>{item.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BestSellingSection />
      <Banner />
      <AllProductSection
        showMore={false}
        itemsPerPage={8}
        showPagination={true}
        products={products}
      />
      <RecommendSection />
      <div className="grid md:grid-cols-6 grid-cols-2 lg:gap-20 gap-4">
        <div className="md:col-span-2 col-span-1 mx-auto font-poppins text-center md:py-14 py-4 max-md:max-w-40">
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
        <div className="md:col-span-2 col-span-1 mx-auto font-poppins text-center md:py-14 py-4 max-md:max-w-40">
          <img
            src={customer}
            className="text-black bg-black text-white p-2 rounded-full outline outline-8 outline-black/[.3] mx-auto mb-8 max-md:scale-75"
          />
          <h2 className="font-bold md:text-xl text-xs my-2">
            24/7 CUSTOMER SERVICE
          </h2>
          <p className="md:text-base text-xs">Friendly 24/7 customer support</p>
        </div>
        <div className="md:col-span-2 col-span-2 mx-auto font-poppins text-center md:py-14 py-4 max-md:max-w-40">
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
