'use client';
import { useAppContext } from '@/context/AppContext';
import React, { useState } from 'react';
import SiteLogo from './SiteLogo';
import SiteLogoWhite from './SiteLogoWhite';
import FooterBottom from './FooterBottom';
import SocialIcons from './SocialIcons';
import HeaderButton from './HeaderButton';
import FooterNavItems from './FooterNavItems';
import Image from 'next/image';
import X from '/public/images/x.png';
import Bar from '/public/images/ham.png';
import NavItems from './NavItems';
import share from '/public/icons/share.png';
import locked2 from '/public/icons/locked3.png';
import Logo from '/public/images/logo2.png';
const ChatHeader = () => {
  const { mobileChatNav, setMobileChatNav } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <header className={`lg:static lg:h-auto lg:bg-white border-t-[5px] border-t-blue ${mobileChatNav ? 'bg-blue border-b border-b-white h-screen fixed z-50 w-full' : 'bg-white'}`}>
        <nav className={`flex items-center w-full max-w-[1440px] mx-auto px-[17px] py-[20px] md:px-[60px] md:py-[17px] ${mobileChatNav ? 'pb-[19px] border-b border-b-white border-opacity-10' : ''}`}>
          {/* <SiteLogo width="w-[150px]" /> */}
          <Image className="lg:w-[50px] pr-4" src={Logo} alt="Logo" />
          <div className="border h-[] border-lightGray" />

          <div className="hidden lg:flex items-center justify-between grow">
            <div className="flex items-center justify-center">
              <Image src={locked2} alt="" className="mr-[15px] " />
              <p>https://messagemoment.com/*********</p>
            </div>
            <div className="right lg:flex items-center">
              <HeaderButton classes="bg-midGray mr-[10px] font-bold w-[66px] !text-[14px] text-lightGrey mr-[15px]" name="30" />
              <div className="border h-[40px] border-lightGray" />
              <HeaderButton classes="border mr-[10px] font-bold ml-[15px] !text-[14px]" data-modal-target="defaultModal" data-modal-toggle="defaultModal" name="Disconnected" />
              <button className="flex items-center justify-evenly rounded-md h-[46px] w-[150px] px-5 bg-blue text-white hover:bg-opacity-80 text-[14px] font-jetBrain font-bold">
                <Image src={share} alt="" />
                Share
              </button>
            </div>
          </div>
          <button className="mobile-menu lg:hidden ml-auto mr-[7px] bg-blue rounded-md h-[46px] w-[46px] text-center" onClick={() => setMobileChatNav(!mobileChatNav)}>
            {mobileChatNav ? <Image src={X} alt="X" className="mx-auto w-[14px]" /> : <Image src={Bar} alt="Bar" className="mx-auto w-[14px]" />}
          </button>
        </nav>
        <div className={`lg:hidden ${mobileChatNav ? 'flex flex-col items-center justify-between p-5 pt-0' : 'hidden'}`} style={{ height: 'calc(100vh - 190px)' }}>
          <FooterNavItems color="text-white" classes={`text-center py-[50px] pl-[0px] w-full border-b border-b-white border-opacity-10`} />
          <div className="grow w-full">
            <HeaderButton classes="text-blue bg-white w-full mt-10" />
          </div>
          <FooterBottom classes="pt-[30px] border-t border-t-white border-opacity-10 text-white" textColor="text-white" />
        </div>
        <hr />
      </header>

      <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
            </div>

            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                I accept
              </button>
              <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
