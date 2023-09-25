'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import bg1 from '../../../public/about/Background.png';
import bg2 from '../../../public/about/Background2.png';
import bg3 from '../../../public/about/bg3.jpg';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

import './style.css';

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper w-full flex justify-between items-center"
      >
        <SwiperSlide className="flex justify-end items-end text-center">
          <Image src={bg1} className=" w-[240px] h-[242px]  rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <Image src={bg2} className=" w-[540px] h-[242px]  rounded-[20px] " alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <Image src={bg3} className=" w-[240px] h-[242px]  rounded-[20px] " alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
