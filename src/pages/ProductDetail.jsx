import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductCard from "../components/ProductCard";

import { IoHeartOutline } from "react-icons/io5";
import delivery from "../assets/icon-delivery.svg";
import turn from "../assets/Icon-return.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Pagination, FreeMode, Navigation, Thumbs } from "swiper/modules";
import SeoComponent from "../components/SeoComponent";

const ProductDetail = () => {
  const { sku } = useParams();
  const { item } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector((state) => state.products.items);
  const productsRelated = products.filter(
    (product) => product.category === item.category //search by category
  );
  const productsRelatedLimit = productsRelated.slice(0, 4); //limit to 4 items

  // State for variant selection
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);

  // State for quantity input
  const [quantity, setQuantity] = useState(1);

  const [isWishlisted, setIsWishlisted] = useState(false);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <SeoComponent page="productDetail" />
      <BreadCrumbs sku={sku} />
      <div className="flex max-lg:flex-col justify-between items-start gap-6 my-8">
        <div className="max-lg:hidden max-w-xl">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mb-2"
          >
            {item.image.map((image, index) => (
              <SwiperSlide key={index} className="rounded overflow-hidden">
                <img src={image} className="w-full h-80 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {item.image.map((image, index) => (
              <SwiperSlide key={index} className="rounded overflow-hidden">
                <img src={image} className="object-cover min-h-[100px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-screen -translate-x-6 lg:hidden">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            spaceBetween={10}
            modules={[Pagination, FreeMode, Navigation]}
            className="mb-2"
          >
            {item.image.map((image, index) => (
              <SwiperSlide key={index} className="overflow-hidden">
                <img src={image} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col justify-start item-center gap-4 w-full">
          <h2 className="font-inter text-xl font-semibold">{item.title}</h2>
          <div className="font-poppins text-sm flex items-center gap-2">
            <p className="opacity-50">({item.reviews} Reviews)</p>
            <p className="opacity-50">|</p>
            <p className={`${item.stock === 0 ? "text-red" : "text-green"}`}>
              {item.stock === 0 ? "Out of Stock" : "In Stock"}
            </p>
          </div>
          <h2 className="font-inter text-xl">${item.price}</h2>
          <p className="font-poppins text-sm">{item.description}</p>
          <div className="max-lg:hidden h-0.5 w-full bg-black/[.5]"></div>
          <div className="hidden lg:flex items-center gap-4">
            <h2 className="font-inter text-lg">{item.variantType}:</h2>
            <div className="font-poppins flex gap-2 items-center">
              {item.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(variant)}
                  className={`text-sm text-center min-w-10 ${
                    selectedVariant === variant
                      ? "bg-red text-white border-red"
                      : "border-black/[.5]"
                  } border p-2 rounded`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 my-6">
            <div className={`${item.stock === 0 ? "hidden" : "flex"} items-center`}>
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
                className={`flex items-center justify-center h-8 w-10 px-2 ${
                  quantity === 1
                    ? "bg-white border-black/[.5]"
                    : "bg-red border-red"
                } border rounded-l active:brightness-90`}
              >
                <div
                  className={`h-0.5 w-4 ${
                    quantity === 1 ? "bg-black" : "bg-white"
                  } rounded-full`}
                ></div>
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 h-8 border-y border-black/[.5] text-center outline-none"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === item.stock}
                className={`relative flex items-center justify-center h-8 w-10 px-2 ${
                  quantity === item.stock
                    ? "bg-white border-black/[.5]"
                    : "bg-red border-red"
                } text-white border rounded-r active:brightness-90`}
              >
                <div
                  className={`absolute h-0.5 w-4 ${
                    quantity === item.stock ? "bg-black" : "bg-white"
                  } rotate-90 rounded-full`}
                ></div>
                <div
                  className={`absolute h-0.5 w-4 ${
                    quantity === item.stock ? "bg-black" : "bg-white"
                  } rounded-full`}
                ></div>
              </button>
            </div>
            <div className="font-poppins flex w-full gap-1 items-center">
              <button className="flex justify-center items-center w-full h-8 bg-red text-medium text-white rounded active:brightness-90">
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex justify-center items-center h-8 ${
                  isWishlisted
                    ? "bg-red text-white border-red"
                    : "border-black/[.5]"
                } border px-2 rounded`}
              >
                <IoHeartOutline />
              </button>
            </div>
          </div>
          <div className="flex lg:flex-col lg:border border-black/[.5] rounded-lg max-lg:gap-2">
            <div className="flex items-center lg:gap-4 gap-1 lg:p-4">
              <img src={delivery} alt="" className="brightness-0" />
              <div>
                <p className="font-medium max-lg:text-sm">Free Delivery</p>
                <p className="lg:text-sm text-xs underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="max-lg:hidden border-b border-black/[.5] w-full h-1"></div>
            <div className="flex items-center lg:gap-4 gap-1 lg:p-4">
              <img src={turn} alt="" className="brightness-0" />
              <div>
                <p className="font-medium max-lg:text-sm">Return Delivery</p>
                <p className="lg:text-sm text-xs">
                  Free 30 Days Delivery Returns.{" "}
                  <Link className="underline">Details</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="flex gap-4 items-center">
          <div className="md:flex hidden w-5 h-10 bg-red rounded"></div>
          <p className="font-poppins font-semibold text-lg">Related Items</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-3">
          {productsRelatedLimit.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlistSection={false}
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden font-poppins fixed bottom-0 left-0 right-0 z-40 bg-white flex w-full gap-1 items-center py-4 px-6">
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`flex justify-center items-center h-10 ${
            isWishlisted ? "bg-red text-white border-red" : "border-black/[.5]"
          } border px-2 rounded`}
        >
          <IoHeartOutline />
        </button>
        <button onClick={() => setIsModalOpen(true)} className="flex justify-center items-center w-full h-10 bg-red text-medium text-white rounded active:brightness-90">
          Add to Cart
        </button>
      </div>
      <div
        className={`${isModalOpen ? "z-50" : "pointer-events-none"} fixed bottom-0 left-0 right-0 flex w-full items-center`}
      >
        <div className={`${isModalOpen ? "translate-y-0" : "translate-y-[200%]"} bg-white py-4 px-6 flex flex-col gap-3 w-full rounded-t-3xl trannsition-all duration-300`}>
          <div className="relative font-poppins font-medium flex justify-center py-4 border-b border-black/[.5]">
            Varian Product
            <div className="absolute right-0">
            <button
            onClick={() => setIsModalOpen(false)}
                className="relative flex justify-end w-full p-2"
              >
                <div className="absolute h-1 w-6 bg-black rounded-full rotate-45"></div>
                <div className="absolute h-1 w-6 bg-black rounded-full -rotate-45"></div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={item.image[0]} alt="" className="max-w-36" />
            <div className="flex flex-col gap-1">
              <p className="font-medium">${item.price}</p>
              <p className="text-xs">{item.stock === 0 ? "Out of Stock" : "In Stock"}</p>
            </div>
          </div>
          <p className="font-poppins">{item.variantType}</p>
          <div className="font-poppins flex gap-2 items-center">
              {item.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(variant)}
                  className={`text-sm text-center min-w-10 ${
                    selectedVariant === variant
                      ? "bg-red text-white border-red"
                      : "border-black/[.5]"
                  } border p-2 rounded`}
                >
                  {variant}
                </button>
              ))}
            </div>
          <p className={`${item.stock === 0 ? "hidden" : "flex"} font-poppins`}>Quantity</p>
          <div className={`${item.stock === 0 ? "hidden" : "flex"} items-center`}>
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
              className={`flex items-center justify-center h-8 w-10 px-2 ${
                quantity === 1
                  ? "bg-white border-black/[.5]"
                  : "bg-red border-red"
              } border rounded-l active:brightness-90`}
            >
              <div
                className={`h-0.5 w-4 ${
                  quantity === 1 ? "bg-black" : "bg-white"
                } rounded-full`}
              ></div>
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 h-8 border-y border-black/[.5] text-center outline-none"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === item.stock}
              className={`relative flex items-center justify-center h-8 w-10 px-2 ${
                quantity === item.stock
                  ? "bg-white border-black/[.5]"
                  : "bg-red border-red"
              } text-white border rounded-r active:brightness-90`}
            >
              <div
                className={`absolute h-0.5 w-4 ${
                  quantity === item.stock ? "bg-black" : "bg-white"
                } rotate-90 rounded-full`}
              ></div>
              <div
                className={`absolute h-0.5 w-4 ${
                  quantity === item.stock ? "bg-black" : "bg-white"
                } rounded-full`}
              ></div>
            </button>
          </div>
          <div className="font-poppins flex items-center w-full gap-2 mt-6">
            <button onClick={() => setIsModalOpen(false)} className="bg-[#F5F5F5] h-10 w-full rounded active:brightness-95">Close</button>
            <button disabled={item.stock === 0} className="bg-red text-white h-10 w-full active:brightness-95 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
