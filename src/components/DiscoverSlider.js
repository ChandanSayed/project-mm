'use client';

import { useRef } from 'react';
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';
import Image from 'next/image';
import discover1 from '/public/home/discover1.png';
import discover2 from '/public/home/discover2.png';
import discover3 from '/public/home/discover3.png';
import discover4 from '/public/home/discover4.png';
import discoverPlus from '/public/home/discover-plus.png';
import left from '/public/home/left.png';
import right from '/public/home/right.png';

import 'swiper/css';

const DiscoverSlider = () => {
  const swiperRef = useRef();
  return (
    <div className="relative max-w-[1200px] mx-auto">
      {/* <div className="slider-container max-w-[1200px] mx-auto relative">
        <div className="sliders flex gap-5 max-w-[1100px] mx-auto">
          <div className="bg-white rounded-[20px] w-[260px] pt-[70px] pb-[30px]">
            <Image src={discover1} className="mx-auto" alt="Image" />
            <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Secure</p>
          </div>
          <div className="bg-white rounded-[20px] w-[260px] pt-[70px] pb-[30px]">
            <Image src={discover2} className="mx-auto" alt="Image" />
            <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Private</p>
          </div>
          <div className="bg-white rounded-[20px] w-[260px] pt-[70px] pb-[30px]">
            <Image src={discover3} className="mx-auto" alt="Image" />
            <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Browser Based</p>
          </div>
          <div className="bg-white rounded-[20px] w-[260px] pt-[70px] pb-[30px] relative">
            <Image src={discover4} className="mx-auto" alt="Image" />
            <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Project Mode</p>
            <Image src={discoverPlus} alt="Discover" className="absolute top-[10px] right-[10px]" />
          </div>
        </div>
        <div className="left absolute top-1/2 transform -translate-y-1/2 left-0">
          <Image src={left} alt="Left" />
        </div>
        <div className="left absolute top-1/2 transform -translate-y-1/2 right-0">
          <Image src={right} alt="Right" />
        </div>
      </div> */}
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        // centeredSlides={true}
        breakpoints={{
          375: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4
          }
        }}
        spaceBetween={20}
        modules={[]}
        loop={true}
        // autoplay={true}
        className="mySwiper max-w-[1100px]"
      >
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover1} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Secure</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover2} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Private</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover3} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Browser Based</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px] relative">
          <Image src={discover4} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Project Mode</p>
          <Image src={discoverPlus} alt="Discover" className="absolute top-[10px] right-[10px]" />
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover1} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Secure</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover2} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Private</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px]">
          <Image src={discover3} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Browser Based</p>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-[20px] w-1/4 pt-[70px] pb-[30px] relative">
          <Image src={discover4} className="mx-auto" alt="Image" />
          <p className="text-dark text-[26px] mt-[27px] text-center font-bold">Project Mode</p>
          <Image src={discoverPlus} alt="Discover" className="absolute top-[10px] right-[10px]" />
        </SwiperSlide>
      </Swiper>

      <div className="left absolute top-1/2 transform -translate-y-1/2 left-0">
        <Image src={left} alt="Left" className="cursor-pointer" onClick={() => swiperRef.current.swiper.slidePrev()} />
      </div>
      <div className="left absolute top-1/2 transform -translate-y-1/2 right-0">
        <Image src={right} alt="Right" className="cursor-pointer" onClick={() => swiperRef.current.swiper.slideNext()} />
      </div>
    </div>
  );
};

export default DiscoverSlider;
