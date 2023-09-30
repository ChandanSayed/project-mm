'use client';

import { FaAngleUp } from 'react-icons/fa6';
import Footer from './Footer';
import FooterNavItems from './FooterNavItems';
import SiteLogo from './SiteLogo';
import FooterBottom from './FooterBottom';

const Sidebar = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 px-20">
      <div className="col-span-4 md:col-span-4">
        <div className="  p-4 h-full overflow-y-auto">
          <div className="bg-midGray border p-4 rounded-t-lg  grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-1">
              <p className="text-blue text-[14px] font-jetBrain ">[MessageMoment.com]</p>
            </div>
            <div className="col-span-4 md:col-span-4 flex justify-between items-center">
              <p className="text-[14px] font-jetBrain">Welcome to MessageMoment.com, where your message only lasts a moment!</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.5951 7.61476L12.9676 12.2578C13.3623 13.3543 13.5258 15.1908 11.8261 17.4504C11.7072 17.6093 11.5555 17.7407 11.3812 17.8355C11.2069 17.9304 11.0141 17.9865 10.8162 18H10.7184C10.5364 18 10.3562 17.9642 10.1881 17.8946C10.02 17.8249 9.86731 17.7228 9.73869 17.5941L5.56209 13.4132L1.87274 17.1051C1.74283 17.2351 1.56663 17.308 1.3829 17.308C1.19918 17.308 1.02298 17.2351 0.893065 17.1051C0.763152 16.9752 0.690168 16.799 0.690168 16.6153C0.690168 16.4316 0.763152 16.2554 0.893065 16.1255L4.58502 12.4361L0.404959 8.25605C0.267561 8.11848 0.160675 7.95352 0.0912589 7.77191C0.0218424 7.59029 -0.00854864 7.39609 0.0020646 7.20195C0.0126778 7.00781 0.0640572 6.81808 0.152858 6.64511C0.241659 6.47214 0.36589 6.31982 0.517465 6.19805C2.7174 4.42304 4.82301 4.77181 5.7447 5.06086L10.3834 0.405681C10.512 0.277066 10.6647 0.175041 10.8327 0.105434C11.0007 0.0358268 11.1808 0 11.3627 0C11.5445 0 11.7246 0.0358268 11.8927 0.105434C12.0607 0.175041 12.2133 0.277066 12.3419 0.405681L17.5943 5.65715C17.8539 5.91669 17.9998 6.26869 17.9999 6.63578C18.0001 7.00286 17.8545 7.35499 17.5951 7.61476Z" fill="#CCCCCC" />
              </svg>
            </div>
          </div>
          <div className="border-b p-4 rounded-t-lg  grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-1">
              <p className="text-[11px] font-jetBrain">Advertisement</p>
            </div>
            <div className="col-span-4 md:col-span-4 flex justify-between items-center">
              <p className=" flex items-start justify-start text-[12px] font-jetBrain leading-5 font-normal">Big Sale on at Flight Centre! Don’t miss out. Visit www.flightcentre.com now and book your trip!</p>
            </div>
          </div>
          <div className=" bg-midGray p-4 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-1"></div>
            <div className="col-span-4 md:col-span-4 flex ">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                <path d="M1.33333 14C0.966668 14 0.652668 13.8693 0.391334 13.608C0.130001 13.3467 -0.000443313 13.0329 1.13186e-06 12.6667V6C1.13186e-06 5.63333 0.130668 5.31933 0.392001 5.058C0.653334 4.79667 0.967112 4.66622 1.33333 4.66667H2V3.33333C2 2.41111 2.32511 1.62489 2.97533 0.974667C3.62556 0.324445 4.41156 -0.000443989 5.33333 4.55373e-07C6.25556 4.55373e-07 7.04178 0.325112 7.692 0.975334C8.34222 1.62556 8.66711 2.41156 8.66667 3.33333V4.66667H9.33333C9.7 4.66667 10.014 4.79733 10.2753 5.05867C10.5367 5.32 10.6671 5.63378 10.6667 6V12.6667C10.6667 13.0333 10.536 13.3473 10.2747 13.6087C10.0133 13.87 9.69956 14.0004 9.33333 14H1.33333ZM5.33333 10.6667C5.7 10.6667 6.014 10.536 6.27533 10.2747C6.53667 10.0133 6.66711 9.69956 6.66667 9.33333C6.66667 8.96667 6.536 8.65267 6.27467 8.39133C6.01333 8.13 5.69956 7.99956 5.33333 8C4.96667 8 4.65267 8.13067 4.39133 8.392C4.13 8.65333 3.99956 8.96711 4 9.33333C4 9.7 4.13067 10.014 4.392 10.2753C4.65333 10.5367 4.96711 10.6671 5.33333 10.6667ZM3.33333 4.66667H7.33333V3.33333C7.33333 2.77778 7.13889 2.30556 6.75 1.91667C6.36111 1.52778 5.88889 1.33333 5.33333 1.33333C4.77778 1.33333 4.30556 1.52778 3.91667 1.91667C3.52778 2.30556 3.33333 2.77778 3.33333 3.33333V4.66667Z" fill="#363C4F" />
              </svg>
              <p className=" flex items-start justify-start text-[14px] font-jetBrain leading-5 font-normal pl-[12px]">
                This chat session is protected using a secure token. <br /> ... <br /> {`> Please enter the Token you received with your chat link:`}
              </p>
            </div>
          </div>
          <div className=" bg-midGray p-4 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-1"></div>
            <div className="col-span-4 md:col-span-4 flex ">
              <p className=" flex items-start justify-start text-[14px] font-jetBrain leading-5 font-normal pl-[12px]">Verifying...</p>
            </div>
          </div>
          <div className="bg-[]  p-4 rounded-b-xl mt-[15px] border-t-[3px] border-t-[#EB5757] grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-1 md:col-span-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.55556 0H12.4444C12.857 0 13.2527 0.163888 13.5444 0.455612C13.8361 0.747335 14 1.143 14 1.55556V12.4444C14 12.857 13.8361 13.2527 13.5444 13.5444C13.2527 13.8361 12.857 14 12.4444 14H1.55556C1.143 14 0.747335 13.8361 0.455612 13.5444C0.163888 13.2527 0 12.857 0 12.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0ZM7.77778 7.77778V3.11111H6.22222V7.77778H7.77778ZM7.77778 10.8889V9.33333H6.22222V10.8889H7.77778Z" fill="#EB5757" />
              </svg>
              <p className="text-blue text-[14px] font-jetBrain ">[MessageMoment.com]</p>
            </div>
            <div className="col-span-4 md:col-span-4 flex justify-between items-center">
              <p className="text-[14px] font-jetBrain">Welcome to MessageMoment.com, where your message only lasts a moment!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 bg-black h-[100vh] overflow-y-auto max-h-full rounded-xl">
        <h3 className="text-[14px] p-4 font-medium text-white ">Chat Group</h3>
        <hr />
        <div className="h-[40vh]"></div>
        <div>
          <h4 className="text-[11px] font-jetBrain font-bold leading-normal text-white">Advertisement</h4>
        </div>
        <footer className="mt-[25px] lg:mt-10  to-white">
          <div className="container max-w-[1440px] mx-auto px-4 text-center flex flex-col gap-[30px] md:gap-[50px] items-center justify-center pt-10 pb-9 lg:pb-[50px] relative">
            <SiteLogo width="w-[196px]" />
            <div className="block lg:hidden pt-[30px] border-t border-black border-opacity-10 w-full">
              <FooterBottom textColor="text-darkGrey" />
            </div>
          </div>
          <div className="footer-bottom border-t border-black border-opacity-10 pt-[30px] pb-[35px]">
            <FooterBottom textColor="text-darkGrey" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
