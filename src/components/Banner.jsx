import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  const { banners } = useSelector((state) => state.fetch);
  return (
    <div>
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="max-md:-translate-x-6 max-md:w-screen overflow-hidden max-h-[20rem]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to="/best-selling">
            <img
              src={banner}
              alt=""
              className="h-full w-full object-cover"
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
