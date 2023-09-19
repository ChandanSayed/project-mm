'use client';
import Image from 'next/image';
import { FaAngleUp } from 'react-icons/fa6';
import Logo from 'public/images/logo.png';
import SocialIcons from './SocialIcons';
import devIcon from 'public/images/icon.png';
import SiteLogo from './SiteLogo';

const Footer = () => {
  function ToTOp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer className="mt-20 bg-gradient-to-b from-blue-10 from-0% to-blue-0 via-20%">
      <div className="container max-w-[1440px] mx-auto px-4 text-center flex flex-col gap-[50px] items-center justify-center pt-10 pb-[50px] relative">
        <SiteLogo />
        <ul className="flex gap-[30px] justify-center">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help & Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
        <button className="top border-[3px] border-white rounded-full bg-blue absolute -top-10 right-0 h-20 w-20 flex items-center justify-center p-4" onClick={ToTOp}>
          <FaAngleUp className="text-white text-xl" />
        </button>
      </div>
      <div className="footer-bottom border-t border-black border-opacity-10 pt-[30px] pb-[35px] bg-gradient-to-b from-blue-10 from-0% to-blue-0 via-20% ">
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4">
          <p className="text-darkGrey font-medium text-[13px]">Copyright © 2023 MessageMoment. All rights reserved.</p>
          <SocialIcons />
          <p className="text-darkGrey font-medium text-[13px] w-[318px] text-right flex justify-end items-center gap-[10px]">
            Designed By <Image src={devIcon} alt="Dev Icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
