'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import QRCode from 'react-qr-code';

import CloudflareTurnstile from './CloudflareTurnstile';
import Tooltip from './Tooltip';
import qrBg from '/public/home/qr-bg.svg';

const LinkGenerate = () => {
  const [secure, setSecure] = useState(false);
  const [selectList, setSelectList] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [code, setCode] = useState('');
  const [showQr, setShowQr] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [openChatButton, setOpenChatButton] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  function handleSelect() {
    setSelectList(true);
  }
  function handleSecure() {
    setSecure(true);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
    setOpenChat(false);
    setOpenChatButton(false);
  }
  function handleStandard() {
    setSecure(false);
    setGeneratedLink('');
    setCode('');
    setSelectList(false);
    setOpenChat(false);
    setOpenChatButton(false);
  }

  const generateLink = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);
    const link = 'https://messagemoment.com/sqjgcf' + randIdx;
    setGeneratedLink(link);
  };
  const generateLinkSecure = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);
    const link = 'https://messagemoment.com/sqjgcf' + randIdx;
    setGeneratedLink(link);
    generateCodes();
  };

  function handleGenerateTip() {
    setShowGenerate(true);
    setTimeout(() => {
      setShowGenerate(false);
    }, 3000);
  }

  function handleGenerateTipLeave() {
    setShowGenerate(false);
  }

  function handleCopy() {
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 3000);
  }
  function handleCopyLeave() {
    setShowCopy(false);
  }

  const generateCodes = function () {
    let randIdx = Math.floor(1000 + Math.random() * 9000);

    setCode(randIdx);
  };
  function copyTOClip() {
    navigator.clipboard.writeText(generatedLink);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 400);
  }
  function copyTOClipSecure() {
    navigator.clipboard.writeText(generatedLink + ' ' + code);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false);
    }, 400);
  }

  function handleQr() {
    setShowQr(prev => !prev);
  }

  function handleChat() {
    setOpenChatButton(true);
    setOpenChat(true);
    generateLink();
    generateLinkSecure();
  }

  function handleChatApply() {
    console.log('Please wait till the CloudflareTurnstile completes!');
  }

  useEffect(() => {
    setTimeout(() => {
      setActiveButton(true);
    }, 4000);
  }, []);

  function hideSelect() {
    setSelectList(false);
  }

  return (
    <>
      <div className="bg-blue max-w-[1096px] rounded-[20px] absolute z-50 -bottom-[110px] left-1/2 transform -translate-x-1/2 w-full mx-auto">
        <p className="py-7 font-medium text-sm lg:text-[17px] max-w-[261px] lg:max-w-none text-white text-center">Click the button below to receive your random link that you can share with your friends any way you like!</p>
        <div className="link bg-black bg-opacity-20 rounded-[0_0_20px_20px] pt-[18px] px-[15px]  lg:px-[30px] lg:pt-[35px] lg:pb-[25px] pb-5">
          <div className="flex">
            <div className="flex items-center w-[140px] rounded-[5px_0_0_5px] bg-white h-[50px] relative">
              {secure ? (
                <>
                  <div className="flex items-center flex-1 pr-[15px]">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                      <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                    </svg>{' '}
                    <div className="cursor-pointer flex-1 flex items-center justify-between handle-select" onClick={handleSelect}>
                      <p className="mx-[10px] text-dark hover:text-opacity-70">Secure</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center flex-1 pr-[15px]">
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="#CCCCCC" />
                    </svg>{' '}
                    <div className="cursor-pointer flex items-center justify-between handle-select" onClick={handleSelect}>
                      <p className="mx-[10px] text-dark hover:text-opacity-70">Standard</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M8.01986 0.201134C8.15 0.0722816 8.32573 0 8.50886 0C8.692 0 8.86773 0.0722816 8.99786 0.201134C9.06211 0.264407 9.11314 0.339828 9.14796 0.423006C9.18279 0.506184 9.20073 0.595459 9.20073 0.685634C9.20073 0.775809 9.18279 0.865083 9.14796 0.948261C9.11314 1.03144 9.06211 1.10686 8.99786 1.17013L5.08986 5.00013C4.95943 5.12881 4.78358 5.20095 4.60036 5.20095C4.41714 5.20095 4.24129 5.12881 4.11086 5.00013L0.202863 1.17013C0.138613 1.10686 0.0875897 1.03144 0.0527625 0.948261C0.0179353 0.865083 0 0.775809 0 0.685634C0 0.595459 0.0179353 0.506184 0.0527625 0.423006C0.0875897 0.339828 0.138613 0.264407 0.202863 0.201134C0.332997 0.0722816 0.50873 0 0.691863 0C0.874996 0 1.05073 0.0722816 1.18086 0.201134L4.60186 3.34213L8.01986 0.201134Z" fill="#363C4F" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
              <div className={`select absolute top-full left-0 w-full bg-black z-20 ${selectList ? 'block' : 'hidden'}`}>
                <div onClick={handleStandard} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="#CCCCCC" />
                  </svg>{' '}
                  <p className="mx-5 cursor-pointer text-white">Standard</p>
                </div>
                <div onClick={handleSecure} className="flex items-center bg-[#151515] py-2 text-[13px] lg:text-[15px] font-jetBrain">
                  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                  </svg>{' '}
                  <p className="mx-5 cursor-pointer text-white">Secure</p>
                </div>
              </div>
            </div>
            <div onClick={hideSelect} className={`select-overlay fixed inset-0 z-10 bg-white opacity-[0.01] ${selectList ? 'block' : 'hidden'}`}></div>
            <div className="flex-1 flex">
              <p className={`flex-1 flex items-center font-jetBrain text-dark text-sm lg:text-[15px] border-l border-[#ddd] px-5 bg-white font-bold h-[50px] ${!secure && 'rounded-[0_5px_5px_0]'}`}>{generatedLink}</p>
              {secure && (
                <div className="w-[220px] flex items-center px-5 rounded-[0_5px_5px_0] font-jetBrain bg-white font-bold text-sm lg:text-[15px] border-l border-[#ddd]">
                  <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M1.52381 16C1.10476 16 0.745906 15.8507 0.447239 15.552C0.148573 15.2533 -0.000506643 14.8947 1.29356e-06 14.4762V6.85714C1.29356e-06 6.4381 0.149334 6.07924 0.448001 5.78057C0.746668 5.4819 1.10527 5.33283 1.52381 5.33333H2.28572V3.80952C2.28572 2.75556 2.65727 1.85702 3.40038 1.11391C4.14349 0.370794 5.04178 -0.000507416 6.09524 5.20427e-07C7.14921 5.20427e-07 8.04775 0.371556 8.79086 1.11467C9.53397 1.85778 9.90527 2.75606 9.90476 3.80952V5.33333H10.6667C11.0857 5.33333 11.4446 5.48267 11.7432 5.78133C12.0419 6.08 12.191 6.4386 12.1905 6.85714V14.4762C12.1905 14.8952 12.0411 15.2541 11.7425 15.5528C11.4438 15.8514 11.0852 16.0005 10.6667 16H1.52381ZM6.09524 12.1905C6.51429 12.1905 6.87314 12.0411 7.17181 11.7425C7.47048 11.4438 7.61956 11.0852 7.61905 10.6667C7.61905 10.2476 7.46972 9.88876 7.17105 9.5901C6.87238 9.29143 6.51378 9.14235 6.09524 9.14286C5.67619 9.14286 5.31733 9.29219 5.01867 9.59086C4.72 9.88952 4.57092 10.2481 4.57143 10.6667C4.57143 11.0857 4.72076 11.4446 5.01943 11.7432C5.3181 12.0419 5.6767 12.191 6.09524 12.1905ZM3.80953 5.33333H8.38095V3.80952C8.38095 3.1746 8.15873 2.63492 7.71429 2.19048C7.26984 1.74603 6.73016 1.52381 6.09524 1.52381C5.46032 1.52381 4.92064 1.74603 4.47619 2.19048C4.03175 2.63492 3.80953 3.1746 3.80953 3.80952V5.33333Z" fill="#CCCCCC" />
                  </svg>{' '}
                  <p className="mx-5 text-dark">{code}</p>
                </div>
              )}
            </div>

            <div className="buttons pl-[6px] flex gap-[5px]">
              <div className="relative">
                <Tooltip showCopy={showGenerate} message={`Regenerate`} />
                {openChat ? (
                  <button onMouseEnter={handleGenerateTip} onMouseLeave={handleGenerateTipLeave} onClick={secure ? generateLinkSecure : generateLink} className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] hover:bg-dark hover:bg-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                      <path d="M21.0374 9.74766C20.7312 7.54382 19.7088 5.50181 18.1278 3.93618C16.5468 2.37055 14.4949 1.36816 12.2882 1.08342C10.0814 0.79868 7.84231 1.24739 5.91568 2.36042C3.98906 3.47345 2.48183 5.18907 1.62617 7.24298M1 2.23363V7.24298H6.00936M1 12.2523C1.30627 14.4562 2.32865 16.4982 3.90964 18.0638C5.49063 19.6295 7.54252 20.6318 9.74925 20.9166C11.956 21.2013 14.1951 20.7526 16.1217 19.6396C18.0484 18.5265 19.5556 16.8109 20.4113 14.757M21.0374 19.7664V14.757H16.0281" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <button className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                      <path d="M21.0374 9.74766C20.7312 7.54382 19.7088 5.50181 18.1278 3.93618C16.5468 2.37055 14.4949 1.36816 12.2882 1.08342C10.0814 0.79868 7.84231 1.24739 5.91568 2.36042C3.98906 3.47345 2.48183 5.18907 1.62617 7.24298M1 2.23363V7.24298H6.00936M1 12.2523C1.30627 14.4562 2.32865 16.4982 3.90964 18.0638C5.49063 19.6295 7.54252 20.6318 9.74925 20.9166C11.956 21.2013 14.1951 20.7526 16.1217 19.6396C18.0484 18.5265 19.5556 16.8109 20.4113 14.757M21.0374 19.7664V14.757H16.0281" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="relative">
                <div style={{ backgroundImage: `url(${qrBg.src})` }} className={`qr-code bg-cover bg-no-repeat p-[10px] py-4 rounded-[8px_8px_14px_14px] w-[280px] overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[58px] ${!showQr && 'hidden'}`}>
                  <QRCode className="bg-white rounded-[10px] p-5 w-[260px] h-[260px]" value={generatedLink} />
                </div>
                {openChat ? (
                  <button onClick={handleQr} className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white hover:bg-opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M3.83333 3.83333H9.58333V9.58333H3.83333V3.83333ZM19.1667 3.83333V9.58333H13.4167V3.83333H19.1667ZM13.4167 14.375H15.3333V12.4583H13.4167V10.5417H15.3333V12.4583H17.25V10.5417H19.1667V12.4583H17.25V14.375H19.1667V17.25H17.25V19.1667H15.3333V17.25H12.4583V19.1667H10.5417V15.3333H13.4167V14.375ZM15.3333 14.375V17.25H17.25V14.375H15.3333ZM3.83333 19.1667V13.4167H9.58333V19.1667H3.83333ZM5.75 5.75V7.66667H7.66667V5.75H5.75ZM15.3333 5.75V7.66667H17.25V5.75H15.3333ZM5.75 15.3333V17.25H7.66667V15.3333H5.75ZM3.83333 10.5417H5.75V12.4583H3.83333V10.5417ZM8.625 10.5417H12.4583V14.375H10.5417V12.4583H8.625V10.5417ZM10.5417 5.75H12.4583V9.58333H10.5417V5.75ZM1.91667 1.91667V5.75H0V1.91667C0 1.40833 0.201934 0.920823 0.561379 0.561379C0.920823 0.201934 1.40833 0 1.91667 0L5.75 0V1.91667H1.91667ZM21.0833 0C21.5917 0 22.0792 0.201934 22.4386 0.561379C22.7981 0.920823 23 1.40833 23 1.91667V5.75H21.0833V1.91667H17.25V0H21.0833ZM1.91667 17.25V21.0833H5.75V23H1.91667C1.40833 23 0.920823 22.7981 0.561379 22.4386C0.201934 22.0792 0 21.5917 0 21.0833V17.25H1.91667ZM21.0833 21.0833V17.25H23V21.0833C23 21.5917 22.7981 22.0792 22.4386 22.4386C22.0792 22.7981 21.5917 23 21.0833 23H17.25V21.0833H21.0833Z" fill="#494AF8" />
                    </svg>
                  </button>
                ) : (
                  <button className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M3.83333 3.83333H9.58333V9.58333H3.83333V3.83333ZM19.1667 3.83333V9.58333H13.4167V3.83333H19.1667ZM13.4167 14.375H15.3333V12.4583H13.4167V10.5417H15.3333V12.4583H17.25V10.5417H19.1667V12.4583H17.25V14.375H19.1667V17.25H17.25V19.1667H15.3333V17.25H12.4583V19.1667H10.5417V15.3333H13.4167V14.375ZM15.3333 14.375V17.25H17.25V14.375H15.3333ZM3.83333 19.1667V13.4167H9.58333V19.1667H3.83333ZM5.75 5.75V7.66667H7.66667V5.75H5.75ZM15.3333 5.75V7.66667H17.25V5.75H15.3333ZM5.75 15.3333V17.25H7.66667V15.3333H5.75ZM3.83333 10.5417H5.75V12.4583H3.83333V10.5417ZM8.625 10.5417H12.4583V14.375H10.5417V12.4583H8.625V10.5417ZM10.5417 5.75H12.4583V9.58333H10.5417V5.75ZM1.91667 1.91667V5.75H0V1.91667C0 1.40833 0.201934 0.920823 0.561379 0.561379C0.920823 0.201934 1.40833 0 1.91667 0L5.75 0V1.91667H1.91667ZM21.0833 0C21.5917 0 22.0792 0.201934 22.4386 0.561379C22.7981 0.920823 23 1.40833 23 1.91667V5.75H21.0833V1.91667H17.25V0H21.0833ZM1.91667 17.25V21.0833H5.75V23H1.91667C1.40833 23 0.920823 22.7981 0.561379 22.4386C0.201934 22.0792 0 21.5917 0 21.0833V17.25H1.91667ZM21.0833 21.0833V17.25H23V21.0833C23 21.5917 22.7981 22.0792 22.4386 22.4386C22.0792 22.7981 21.5917 23 21.0833 23H17.25V21.0833H21.0833Z" fill="#CCCCCC" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="relative">
                <Tooltip showCopy={showCopy} classes="animate-fade2" message={`Copied`} />

                {openChat ? (
                  <button onClick={secure ? copyTOClipSecure : copyTOClip} className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white hover:bg-opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M15.4545 18.1818H5.45455V5.45455H15.4545M15.4545 3.63636H5.45455C4.97233 3.63636 4.50987 3.82792 4.1689 4.1689C3.82792 4.50987 3.63636 4.97233 3.63636 5.45455V18.1818C3.63636 18.664 3.82792 19.1265 4.1689 19.4675C4.50987 19.8084 4.97233 20 5.45455 20H15.4545C15.9368 20 16.3992 19.8084 16.7402 19.4675C17.0812 19.1265 17.2727 18.664 17.2727 18.1818V5.45455C17.2727 4.97233 17.0812 4.50987 16.7402 4.1689C16.3992 3.82792 15.9368 3.63636 15.4545 3.63636ZM12.7273 0H1.81818C1.33597 0 0.873508 0.191558 0.532533 0.532533C0.191558 0.873508 0 1.33597 0 1.81818V14.5455H1.81818V1.81818H12.7273V0Z" fill="#494AF8" />
                    </svg>
                  </button>
                ) : (
                  <button className="cursor-pointer h-[50px] w-[50px] flex items-center justify-center border-[1.5px] border-white border-opacity-20 rounded-[5px] bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <path d="M15.4545 18.1818H5.45455V5.45455H15.4545M15.4545 3.63636H5.45455C4.97233 3.63636 4.50987 3.82792 4.1689 4.1689C3.82792 4.50987 3.63636 4.97233 3.63636 5.45455V18.1818C3.63636 18.664 3.82792 19.1265 4.1689 19.4675C4.50987 19.8084 4.97233 20 5.45455 20H15.4545C15.9368 20 16.3992 19.8084 16.7402 19.4675C17.0812 19.1265 17.2727 18.664 17.2727 18.1818V5.45455C17.2727 4.97233 17.0812 4.50987 16.7402 4.1689C16.3992 3.82792 15.9368 3.63636 15.4545 3.63636ZM12.7273 0H1.81818C1.33597 0 0.873508 0.191558 0.532533 0.532533C0.191558 0.873508 0 1.33597 0 1.81818V14.5455H1.81818V1.81818H12.7273V0Z" fill="#CCCCCC" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="w-[300px]">
              <CloudflareTurnstile />
            </div>{' '}
            {openChatButton ? (
              <button className="bg-white h-[65px] text-blue hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center">Open Chat</button>
            ) : (
              <button onClick={activeButton ? handleChat : handleChatApply} className={`bg-white h-[65px] ${activeButton ? 'text-blue' : 'text-[#ccc]'} hover:text-opacity-80 grow font-jetBrain font-bold text-[14px] rounded-md lg:text-[15px] flex items-center justify-center`}>
                Generate Link
              </button>
            )}
          </div>
          <p className="text-[11px] lg:text-[13px] font-medium text-white text-center mt-[15px]">
            By starting this chat session, you agree to our <Link href={`/terms`}>Terms of Use</Link> and <Link href={`/privacy`}>Privacy Policy</Link>, and that you and everybody you share the chat link with is above 16 years of age.
          </p>
        </div>
      </div>
      <div onClick={hideSelect} className={`select-overlay fixed inset-0 z-10 bg-white opacity-[0.01] ${selectList ? 'block' : 'hidden'}`}></div>
    </>
  );
};

export default LinkGenerate;
