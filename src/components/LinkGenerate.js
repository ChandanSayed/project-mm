'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';

import lock from '/public/home/lock.png';
import standard from '/public/home/standard.svg';
import down from '/public/home/down.png';
import downBlack from '/public/home/down-black.png';
import reload from '/public/home/reload.png';
import qr from '/public/home/qr.png';
import copy from '/public/home/copy.png';
import CloudflareTurnstile from './CloudflareTurnstile';

const links = ['https://messagemoment.com/sqjgcf9', 'https://messagemoment.com/sqjgcf8', 'https://messagemoment.com/sqjgcf7', 'https://messagemoment.com/sqjgcf6'];
const codes = [7475, 7795, 2574, 9632];

const LinkGenerate = () => {
  const [secure, setSecure] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [code, setCode] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  function handleSelect() {
    setSelectList(prev => !prev);
  }
  function handleSecure() {
    setSecure(true);
    setGeneratedLink('');
    setCode('');
  }
  function handleStandard() {
    setSecure(false);
    setGeneratedLink('');
    setCode('');
  }

  const generateLink = function () {
    let randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    setGeneratedLink(links[randIdx]);
  };
  const generateLinkSecure = function () {
    let randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    setGeneratedLink(links[randIdx]);
    generateCodes();
  };

  function handleGenerateTip() {
    setShowGenerate(prev => !prev);
  }
  const generateCodes = function () {
    let randIdx = Math.random() * codes.length;
    randIdx = parseInt(randIdx, 10);
    setCode(codes[randIdx]);
  };
  function copyTOClip() {
    navigator.clipboard.writeText(generatedLink);
  }
  function copyTOClipSecure() {
    navigator.clipboard.writeText(generatedLink + ' ' + code);
  }

  function handleCopy() {
    setShowCopy(prev => !prev);
  }

  function handleQr() {
    setShowQr(prev => !prev);
  }

  return (
    <>
      <div className="bg-blue max-w-[1096px] rounded-[20px] absolute -bottom-[110px] left-1/2 transform -translate-x-1/2 w-full mx-auto">
        <p className="py-7 font-medium text-sm lg:text-[17px] max-w-[261px] lg:max-w-none text-white text-center">Click the button below to receive your random link that you can share with your friends any way you like!</p>
        <div className="link bg-black bg-opacity-20 rounded-[0_0_20px_20px] pt-[18px] px-[15px]  lg:px-[30px] lg:pt-[35px] lg:pb-[25px] pb-5">
          <div className="flex">
            <div onClick={handleSelect} className="flex items-center w-[140px] cursor-pointer rounded-[5px_0_0_5px] bg-white h-[50px] relative">
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
              <div className={`select absolute top-full left-0 w-full bg-black z-10 ${selectList ? 'block' : 'hidden'}`}>
                <div onClick={handleSecure} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <Image src={lock} alt="Lock" className="ml-3" /> <p className="mx-5 text-white">Secure</p>
                </div>
                <div onClick={handleStandard} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <Image src={standard} alt="Lock" className="ml-3" /> <p className="mx-5 text-white">Standard</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex">
              <p className={`flex-1 flex items-center font-jetBrain text-dark text-sm lg:text-[15px] border-l border-[#ddd] px-5 bg-white font-bold h-[50px] ${!secure && 'rounded-[0_5px_5px_0]'}`}>{generatedLink}</p>
              {secure && (
                <div className="w-[220px] flex items-center px-5 rounded-[0_5px_5px_0] font-jetBrain bg-white font-bold text-sm lg:text-[15px] border-l border-[#ddd]">
                  <Image src={lock} alt="Lock" className="ml-3" /> <p className="mx-5 text-dark">{code}</p>
                </div>
              )}
            </div>

            <div className="buttons pl-[6px] flex gap-[5px]">
              <div className="relative">
                <div className={`qr-code bg-black p-[10px] rounded-[10px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[70px] ${!showGenerate && 'hidden'}`}>
                  <p className="text-white font-medium text-sm font-jetBrain">Regenerate</p>
                </div>
                <button onMouseEnter={handleGenerateTip} onMouseLeave={handleGenerateTip} onClick={secure ? generateLinkSecure : generateLink} className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] " title="reload">
                  <Image src={reload} alt="reload" />
                </button>
              </div>
              <div className="relative">
                <div className={`qr-code bg-black p-[10px] rounded-[10px] w-[280px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[70px] ${!showQr && 'hidden'}`}>
                  <Image className="absolute -bottom-1" src={downBlack} alt="Down" />
                  <QRCode className="bg-white rounded-[10px] p-5 w-[260px] h-[260px]" value={generatedLink} />
                </div>
                <button onClick={handleQr} className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] bg-white">
                  <Image src={qr} alt="qr" />
                </button>
              </div>
              <div className="relative">
                <div className={`qr-code bg-black p-[10px] w-max rounded-[10px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[70px] ${!showCopy && 'hidden'}`}>
                  <p className="text-white font-medium text-sm font-jetBrain">Copy URL</p>
                </div>
                <button onMouseEnter={handleCopy} onMouseLeave={handleCopy} onClick={secure ? copyTOClipSecure : copyTOClip} className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] bg-white">
                  <Image src={copy} alt="copy" />
                </button>

                {/* <button onClick={copyTOClip} className="cursor-pointer h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] px-[15px] bg-white">
                    <Image src={copy} alt="copy" />
                  </button> */}
              </div>
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
