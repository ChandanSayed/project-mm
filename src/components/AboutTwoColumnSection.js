import Image from 'next/image';

const AboutTwoColumnSection = ({ bg, classes = '', title, des, pr, imgClass = '' }) => {
  return (
    <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
      <div className={`flex justify-center ${classes} lg:items-center gap-10 lg:gap-[60px] max-lg:flex-col`}>
        <div className="flex justify-center items-center">
          <Image src={bg} className={imgClass} alt="Image" />
        </div>
        <div>
          <h3 className={`lg:text-[60px] text-[34px] font-bold lg:leading-[70px] text-dark max-w-[538px] ${pr} max-md:tracking-[-0.5px] leading-[34px]`}>{title}</h3>
          <p className="font-jetBrain text-[13px] lg:text-[17px] font-medium mt-[20px] max-w-[538px]">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwoColumnSection;
