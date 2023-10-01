'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import bg1 from '/public/about/slider1.png';
import bg2 from '/public/about/slider2.png';
import bg3 from '/public/about/slider3.png';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

// import './style.css';

const Slider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        initialSlide={1}
        className="mySwiper w-full flex items-center"
      >
        <SwiperSlide className="flex justify-end items-end text-center">
          <Image src={bg1} className="h-[200px] object-contain rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <Image src={bg2} className="object-contain h-[200px]  rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <Image src={bg3} className="object-contain h-[200px]  rounded-[20px] " alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
