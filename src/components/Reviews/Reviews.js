import React, { useRef, useState } from "react";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const Reviews = ({ title, name, review }) => {
  return (
    <>
      <div className="container mx-auto my-40 ">
        <h1 className="text-center my-5 px-2.5 md:px-0">{title}</h1>
        <div className="grid  md:grid-cols-2 gap-4 px-2.5 md:px-0 overflow-x-auto"></div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mx-auto container"
        >
          <SwiperSlide>
            <Review name={name} review={review} />
          </SwiperSlide>
          <SwiperSlide>
            <Review name={name} review={review} />
          </SwiperSlide>
          <SwiperSlide>
            <Review name={name} review={review} />
          </SwiperSlide>
          <SwiperSlide>
            <Review name={name} review={review} />
          </SwiperSlide>
          <SwiperSlide>
            <Review name={name} review={review} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
