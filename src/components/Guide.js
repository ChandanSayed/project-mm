import Image from 'next/image';
import React from 'react';
import img from '/public/home/img.png';
import Steps from './Steps';

const Guide = () => {
  return (
    <div className="bg-blue px-[15px] pt-[40px] pb-[60px] lg:pt-[70px] lg:pb-[75px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-bold text-[34px] text-center lg:text-[60px] tracking-[-.5px] lg:tracking-normal sm:max-w-[450px] lg:max-w-[934px] mx-auto text-white">Express yourself freely, anytime, with those you know.</h2>
        <div className="relative w-max mx-auto pt-[14px] mb-14">
          <Image src={img} alt="Image" className="mx-auto relative z-10" />
          <div className="absolute w-[396px] h-[396px] blur-[50px] -z-0 rounded-full bg-black bg-opacity-20 top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <Steps />
      </div>
    </div>
  );
};

export default Guide;
