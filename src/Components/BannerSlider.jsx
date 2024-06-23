import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';


function BannerSlider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.bizzata.in/api/banners'); // Adjust URL as per your setup
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
        // Handle errors (e.g., display error message)
      }
    };

    fetchData();
  }, []);

  return (

    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
  >
    {sliderData.map((image, index) => (
      <SwiperSlide key={index}>
       <div className="pb-4">
       <Link
                to={`/${image.business.city.name}/${image.business.slug}`}
                target="_blank"
              >
        <img
              src={`https://admin.bizzata.in/storage/${image.business.banner}`}
              alt={image.business.name}
          className="w-full lg:h-[650px]  object-cover rounded-md mb-3 shadow-lg px-[2%] md:px-[.5%]"
        />
              
              </Link>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default BannerSlider;