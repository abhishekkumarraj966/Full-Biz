// import AppLayout from "./AppLayout";
import slidesData from "./Mock/Blog";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import imgblog from "./assites/blog.jpg";
import { Navigation } from "swiper/modules";
import AppLayout from "./AppLayout";

import { Link } from "react-router-dom";
const RecentBlog = () => {
  return (
    <AppLayout>
      <div className="my-4 mb-8  mx-auto">
        <h1 className="text-center font-bold text-4xl text-[#000] tracking-1 sm:tracking-2 font-serif mb-8">
          Our Recent Blogs
        </h1>

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
            800: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            970: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          navigation
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-[320px] sm:w-[300px] lg:w-[280px] rounded-md border shadow-xl gap-2  bg-[#EAEAEA] mx-auto">
                <Link to={`/blogpg/${slide.id}`}>
                  <img
                    src={imgblog}
                    alt="Laptop"
                    className="h-48 w-full sm:w-[100%] lg:w-[100%] rounded-t-md object-cover cursor-pointer"
                  />
                </Link>
                <div className="py-4 pb-10 px-2">
                  <div className="flex gap-12 pb-1">
                    <p className="text-xs font-light ">
                      <Link to={`/blogpg/${slide.id}`}>{slide.date}</Link>
                    </p>
                    <p className="text-xs font-light">{slide.category}</p>
                  </div>
                  <h1 className="text-lg font-bold tracking-0.5 cursor-pointer">
                    <Link to={`/blogpg/${slide.id}`}>{slide.title}</Link>
                  </h1>
                  <p className="mt-3 text-sm text-gray-600 tracking-0.5 leading-6">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AppLayout>
  );
};

export default RecentBlog;
