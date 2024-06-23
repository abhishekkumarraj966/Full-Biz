import React from "react";
// import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";
import { Link } from "react-router-dom";
const sofasData = [
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
  {
    imageUrl: "/assets/unsplash_vE7JbyPGxfA.jpg",
    title: "Comfy Sofa",
    description:
      "“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “",
  },
];

const ProductCard = () => {
  return (
   
      <div
        className=" w-full bg-[#7D3C13] pb-14"
        id="product"
      >
         <AppLayout>
        <h2 className="font-bold text-[30px] pb-10 text-center sm:text-[28px] lg:text-[32px] sm:pt-[40px] pt-[15px] lg:pt-[50px] text-white ">
          Products
        </h2>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          navigation
          className="mySwiper"
        >
          <div className="flex gap-2">
            {sofasData.map((sofa, index) => (
              <SwiperSlide key={index}>
                 <div className="w-[300px] bg-[#D4B294]  lg:w-[280px] rounded-md border shadow-xl gap-2  mx-auto">
               <Link to="/productpage">
                <img
                  src={sofa.imageUrl}
                  alt="Laptop"
                  className="h-48 w-full sm:w-[100%] lg:w-[100%] p-[5px] rounded-xl object-cover"
                />
                </Link>
                <div className="py-4 pb-10 px-2">
                  <h1 className="text-lg font-bold tracking-0.5 cursor-pointer   text-[20px] text-black self-start  mx-auto">
                   <Link to="/productpage">
                    {sofa.title}
                    </Link>
                  </h1>
                  <p className="mt-3 text-sm text-[#7D3C13] text-[5px] sm:text-[14px] lg:text-[20px] font-light   mx-auto tracking-0.5 leading-6">
                    {sofa.description}
                  </p>
                </div>
              </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        </AppLayout>
      </div>
  
  );
};

export default ProductCard;
