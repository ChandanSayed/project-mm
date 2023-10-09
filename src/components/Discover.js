import phone from '/public/home/cellphone.png';
import laptop from '/public/home/laptop.png';
import tablet from '/public/home/tablet.png';
import television from '/public/home/television.png';
import controller from '/public/home/controller.png';
import Image from 'next/image';
import DiscoverSlider from './DiscoverSlider';

const Discover = () => {
  return (
    <div className="bg-dark px-[15px]">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-bold text-[34px] text-center lg:text-[60px] tracking-[-.5px] lg:tracking-normal sm:max-w-[450px] lg:max-w-[934px] mx-auto text-white lg:pt-[70px] lg:pb-10">Discover more from MessageMoment</h2>
        <DiscoverSlider />
        <p className="text-white text-[26px] text-center mt-10 lg:mt-[60px] mb-10">
          Use MessageMoment on any device via Browser<sup className="text-[60%]">1</sup>
        </p>
        <div className="flex justify-center gap-6 lg:gap-12 pb-10 lg:pb-[58px]">
          <div className="device text-center">
            <Image src={phone} className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" alt="Device" />
            <p className="text-white">Phone</p>
          </div>
          <div className="device text-center">
            <Image src={laptop} className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" alt="Device" />
            <p className="text-white">Desktop</p>
          </div>
          <div className="device text-center">
            <Image src={tablet} className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" alt="Device" />
            <p className="text-white">Tablet</p>
          </div>
          <div className="device text-center">
            <Image src={television} className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" alt="Device" />
            <p className="text-white">Smart Tv</p>
          </div>
          <div className="device text-center">
            <Image src={controller} className="w-[36px] h-[36px] mb-5 lg:h-[48px] lg:w-[48px] mx-auto" alt="Device" />
            <p className="text-white">Consoles</p>
          </div>
        </div>
        <div className="disclaimer max-w-[1096px] mx-auto pt-5 border-t border-t-white border-opacity-20 pb-9 text-center">
          <p className="text-[11px] text-white lg:text-[13px] font-medium">
            <sup className="text-[60%]">1</sup>Disclaimer: Compatibility may vary across different devices and operating systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
