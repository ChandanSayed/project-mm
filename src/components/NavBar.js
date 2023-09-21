'use client';

import SiteLogo from './SiteLogo';
import NavItems from './NavItems';
import { useAppContext } from '@/context/AppContext';
import SiteLogoWhite from './SiteLogoWhite';
import FooterBottom from './FooterBottom';
import SocialIcons from './SocialIcons';
import HeaderButton from './HeaderButton';
import FooterNavItems from './FooterNavItems';
import Image from 'next/image';
import X from '/public/images/x.png';
import Bar from '/public/images/ham.png';

const NavBar = () => {
  const { mobileNav, setMobileNav } = useAppContext();
  return (
    <header className={`lg:static lg:h-auto lg:bg-white border-t-[5px] border-t-blue ${mobileNav ? 'bg-blue border-b border-b-white h-screen fixed z-50 w-full' : 'bg-white'}`}>
      <nav className={`flex items-center w-full max-w-[1440px] mx-auto px-[17px] py-[20px] md:px-[60px] md:py-[17px] ${mobileNav ? 'pb-[19px] border-b border-b-white border-opacity-10' : ''}`}>
        <SiteLogo width="w-[150px]" />
        <SiteLogoWhite />
        <div className="hidden lg:flex items-center justify-between grow">
          <NavItems classes={` text-black`} />
          <div className="right lg:flex items-center">
            <SocialIcons />
            <HeaderButton classes={`bg-blue text-white`} />
          </div>
        </div>
        <button className="mobile-menu lg:hidden ml-auto mr-[7px] bg-blue rounded-md h-[46px] w-[46px] text-center" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <Image src={X} alt="X" className="mx-auto w-[14px]" /> : <Image src={Bar} alt="Bar" className="mx-auto w-[14px]" />}
        </button>
      </nav>
      <div className={`lg:hidden ${mobileNav ? 'flex flex-col items-center justify-between p-5 pt-0' : 'hidden'}`} style={{ height: 'calc(100vh - 190px)' }}>
        <FooterNavItems color="text-white" classes={`text-center py-[50px] pl-[0px] w-full border-b border-b-white border-opacity-10`} />
        <div className="grow w-full">
          <HeaderButton classes="text-blue bg-white w-full mt-10" />
        </div>
        <FooterBottom classes="pt-[30px] border-t border-t-white border-opacity-10 text-white" textColor="text-white" />
      </div>
    </header>
  );
};

export default NavBar;
