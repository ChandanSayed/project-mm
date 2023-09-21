'use client';

import { FaAngleUp } from 'react-icons/fa6';
import SiteLogo from './SiteLogo';
import FooterBottom from './FooterBottom';
import FooterNavItems from './FooterNavItems';

const Footer = () => {
  function ToTOp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="mt-20 bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-70% to-white">
      <div className="container max-w-[1440px] mx-auto px-4 text-center flex flex-col gap-[30px] md:gap-[50px] items-center justify-center pt-10 pb-9 lg:pb-[50px] relative">
        <SiteLogo width="w-[196px]" />
        <FooterNavItems />
        <div className="block lg:hidden pt-[30px] border-t border-black border-opacity-10 w-full">
          <FooterBottom textColor="text-darkGrey" />
        </div>
        <button className="top border-[3px] border-white rounded-full bg-blue absolute -top-[25px] lg:-top-10 right-2 lg:right-0 h-[50px] w-[50px] lg:h-20 lg:w-20 flex items-center justify-center p-4" onClick={ToTOp}>
          <FaAngleUp className="text-white text-xl" />
        </button>
      </div>
      <div className="footer-bottom border-t border-black border-opacity-10 pt-[30px] pb-[35px] bg-gradient-to-b from-blue-10 from-0% to-blue-0 via-20% hidden lg:block">
        <FooterBottom textColor="text-darkGrey" />
      </div>
    </footer>
  );
};

export default Footer;
