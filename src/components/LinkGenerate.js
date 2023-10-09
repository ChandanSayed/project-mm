'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import lock from '/public/home/lock.png';
import standard from '/public/home/standard.svg';
import down from '/public/home/down.png';
import reload from '/public/home/reload.png';
import qr from '/public/home/qr.png';
import copy from '/public/home/copy.png';
import CloudflareTurnstile from './CloudflareTurnstile';

const links = ['https://messagemoment.com/sqjgcf9', 'https://messagemoment.com/sqjgcf8', 'https://messagemoment.com/sqjgcf7', 'https://messagemoment.com/sqjgcf6'];

const LinkGenerate = () => {
  const [secure, setSecure] = useState(false);
  return (
    <>
      <div className="bg-blue max-w-[1096px] rounded-[20px] absolute -bottom-[110px] left-1/2 transform -translate-x-1/2 w-full mx-auto">
        <p className="py-7 font-medium text-sm lg:text-[17px] max-w-[261px] lg:max-w-none text-white text-center">Click the button below to receive your random link that you can share with your friends any way you like!</p>
        <div className="link bg-black bg-opacity-20 rounded-[0_0_20px_20px] pt-[18px] px-[15px]  lg:px-[30px] lg:pt-[35px] lg:pb-[25px] pb-5">
          <div className="flex">
            <div className="flex items-center cursor-pointer rounded-[5px_0_0_5px] bg-white h-[50px] relative">
              {secure ? (
                <>
                  <Image src={lock} alt="Lock" className="ml-3" /> <p className="mx-[10px] text-dark">Secure</p>
                  <Image src={down} alt="down" className="mr-[22px]" />
                </>
              ) : (
                <>
                  <Image src={standard} alt="Lock" className="ml-3" /> <p className="mx-[10px] text-dark">Standard</p>
                  <Image src={down} alt="down" className="mr-[22px]" />
                </>
              )}
              <div className="select absolute top-full left-0 w-full bg-black z-10">
                <div className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <Image src={lock} alt="Lock" className="ml-3" /> <p className="mx-5 text-white">Secure</p>
                </div>
                <div className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <Image src={standard} alt="Lock" className="ml-3" /> <p className="mx-5 text-white">Standard</p>
                </div>
              </div>
            </div>

            <p className="flex-1 flex items-center font-jetBrain text-sm lg:text-[15px] border-l border-[#ddd] pl-5 rounded-[0_5px_5px_0] bg-white font-bold h-[50px]">https://messagemoment.com/sqjgcf9</p>
            <div className="buttons pl-[6px] flex gap-[5px]">
              <button disabled className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] " title="reload">
                <Image src={reload} alt="reload" />
              </button>
              <button className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] bg-white">
                <Image src={qr} alt="qr" />
              </button>
              <button className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] bg-white">
                <Image src={copy} alt="copy" />
              </button>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="w-[300px]">
              <CloudflareTurnstile />
            </div>{' '}
            <button className="bg-white h-[65px] text-blue hover:text-opacity-90 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center">Open Chat</button>
          </div>
          <p className="text-[11px] lg:text-[13px] font-medium text-white text-center mt-[15px]">
            By starting this chat session, you agree to our <Link href={`/terms`}>Terms of Use</Link> and <Link href={`/privacy`}>Privacy Policy</Link>, and that you and everybody you share the chat link with is above 16 years of age.
          </p>
        </div>
      </div>
    </>
  );
};

export default LinkGenerate;
