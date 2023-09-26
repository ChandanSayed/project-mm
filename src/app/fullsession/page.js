import React from 'react';
import SiteLogo from '@/components/SiteLogo';
import Image from 'next/image';
import session from '../../../public/icons/session.png';
import ReturnToHomepage from '@/components/ReturnToHomepage';

const page = () => {
  return (
    <div>
      <div>
        <>
          <header className="bg-white  p-[35px] md:px-[60px] md:py-[17px] border-t-[5px] border-blue">
            <nav className="flex items-center justify-center w-full max-w-[1440px] mx-auto">
              <SiteLogo />
            </nav>
          </header>
          <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
            <div className="max-w-[720px] mx-auto">
              <div className="mt-[35px] lg:mt-[25px] border-t border-black border-opacity-10 pt-[126px] pb-[84px] lg:pt-[121px] lg:pb-[100px] ">
                <div className="flex justify-center flex-col items-center">
                  <div className="max-w-[410px] h-[410px] w-full rounded-full bg-opacity-50 bg-blue bg-gradient-to-b from-blue-10  blur-[50px] absolute z-10"></div>
                  <div className=" relative bg-white border border-black border-opacity-10 flex justify-center flex-col items-center max-w-[720px] z-20 rounded-[10px] min-w-full">
                    <Image src={session} className="w-[128px] relative bottom-16 max-lg:bottom-14 max-sm:bottom-12 max-lg:tracking-tighter max-lg:w-[100px]  " />
                    <div className="flex justify-center flex-col items-center relative bottom-10">
                      <h1 className="text-blue text-[26px] font-bold leading-normal text-center max-lg:text-[17px] mt-[20px] max-lg:mt-[20px] max-lg:mx-[51px] mx-[125px]">The chat session is full! There are currently 10/10 users joined</h1>
                      <p className="text-base text-dark my-[30px] font-jetBrain max-lg:text-[13px] max-lg:text-center max-lg:px-4 max-lg:mt-[20px]">Unfortunately you are unable to enter the chat at this time.</p>
                      <ReturnToHomepage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-darkGrey font-medium text-[13px] text-center mb-10">Copyright © 2023 MessageMoment. All rights reserved.</p>
        </>
      </div>
    </div>
  );
};

export default page;
