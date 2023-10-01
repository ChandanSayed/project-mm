import Image from 'next/image';

const AboutTwoColumnSection = ({ bg, classes = '', title, des }) => {
  return (
    <div className="border-t bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px]">
      <div className={`flex justify-center ${classes} items-center gap-10 lg:gap-[60px] lg:py-[120px] py-24 max-lg:flex-col`}>
        <div className="flex justify-center items-center">
          <Image src={bg} className="h-[200px] min-w-full object-cover lg:w-[500px] lg:h-[300px] rounded-[20px] max-md:w-full" alt="Image" />
        </div>
        <div>
          <h3 className="lg:text-[60px] text-[34px] font-bold lg:leading-[70px] text-dark max-w-[538px] pr-16 max-md:tracking-[-0.5px] leading-[34px]">{title}</h3>
          <p className="font-jetBrain text-[13px] lg:text-[17px] font-medium mt-[20px] max-w-[538px]">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwoColumnSection;
