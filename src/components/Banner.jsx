import React from "react";
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="overflow-hidden max-h-[30rem]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide>
            <img
              key={index}
              src={banner}
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
