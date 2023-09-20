import Image from 'next/image';
import SocialIcons from './SocialIcons';
import devIcon from 'public/images/icon.png';
import devIconWhite from 'public/images/white-icon.png';

const FooterBottom = ({ classes = '', textColor = 'text-darkGrey' }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-7 items-center justify-between w-full max-w-[1440px] mx-auto px-4 ${classes}`}>
      <p className={`${textColor} font-medium text-[10px] lg:text-[13px] order-1 lg:order-none`}>Copyright © 2023 MessageMoment. All rights reserved.</p>
      <SocialIcons textColor={textColor} />
      <p className={`${textColor} font-medium text-[10px] lg:text-[13px] w-[318px] text-right flex justify-center order-1 lg:order-none lg:justify-end items-center gap-[10px]`}>
        Designed By <Image className="hidden lg:block" src={devIcon} alt="Dev Icon" />
        <Image className="lg:hidden" src={devIconWhite} alt="Dev Icon" />
      </p>
    </div>
  );
};

export default FooterBottom;
