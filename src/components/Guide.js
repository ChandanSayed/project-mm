import Image from 'next/image';
import React from 'react';
import img from '/public/home/img.png';
import Steps from './Steps';

const Guide = () => {
  return (
    <div className="bg-blue px-[15px] pt-[40px] pb-[60px] lg:pt-[70px] lg:pb-[75px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-bold text-[34px] text-center lg:text-[60px] tracking-[-.5px] lg:tracking-normal sm:max-w-[450px] lg:max-w-[934px] mx-auto text-white">Say what you want, when you want, with those you know</h2>
        <Image src={img} alt="Image" className="mx-auto" />
        <Steps />
      </div>
    </div>
  );
};

export default Guide;
