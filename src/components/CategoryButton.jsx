import React, { forwardRef } from "react";
import { useSwiper } from "swiper/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const CategoryButton = forwardRef((props, ref) => {
  const swiper = useSwiper();

  // Assign swiper to ref
  React.useImperativeHandle(ref, () => ({
    slidePrev: () => swiper.slidePrev(),
    slideNext: () => swiper.slideNext(),
  }));

  return (
    <div className="flex gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-[#F5FF5F5] hover:bg-black/[.1] h-10 w-10 rounded-full flex justify-center items-center"
      >
        <IoArrowBackOutline className="text-2xl" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-[#F5F5F5] hover:bg-black/[.1] h-10 w-10 rounded-full flex justify-center items-center"
      >
        <IoArrowForwardOutline className="text-2xl" />
      </button>
    </div>
  );
});

export default CategoryButton;