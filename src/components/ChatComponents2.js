import Image from 'next/image';

const SidebarComponents2 = ({ img, bg, textLeft, textRight, contentLeft, contentRight }) => {
  return (
    <div className={`bg-errorColor ${bg} bg-opacity-5  p-4 rounded-b-xl mt-[15px] border-t-[3px] border-t-[#EB5757] grid grid-cols-1 lg:grid-cols-5`}>
      <div className="col-span-1 md:col-span-1 flex items-center">
        <Image src={img} alt="" className="w-[14px] h-[14px]" />
        <p className={`text-blue ${textLeft} text-[14px] font-jetBrain pl-[10px]`}>{contentLeft}</p>
      </div>
      <div className="col-span-4 md:col-span-4 flex justify-between items-center">
        <p className={`text-dark ${textRight} text-[14px] font-jetBrain font-semibold`}>{contentRight}</p>
      </div>
    </div>
  );
};

export default SidebarComponents2;
