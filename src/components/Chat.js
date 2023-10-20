'use client';

import SiteLogo from './SiteLogo';
import FooterBottom from './FooterBottom';
import Image from 'next/image';
import Vector from '/public/icons/Vector.png';
import tokenImage from '/public/icons/locked2.png';
import error from '/public/icons/error.png';
import SidebarComponents from './ChatComponents';
import SidebarComponents2 from './ChatComponents2';
import SidebarComponents3 from './ChatComponents3';
import icon from '/public/icons/inputIcon.png';
import ad from '/public/icons/ad.png';
import adIcon from '/public/icons/adIcon.png';
import blueError from '../../public/icons/blueError.png';
import { useState } from 'react';
import AutoComplete from './AutoComplete';
import FileUploadPopup from './FileUploadPopup';
import CookiesComponent from './CookiesComponent';
import CookiesMore from './CookiesMore';
import Link from 'next/link';
import report from '/public/icons/report.png';
import CookiesFirstAccordion from './CookiesFirstAccordion';
import CookiesAccordion from './CookiesAccordion';
import { accordionCookiesList } from './AccordionList';
const options = [];

const users = [
  {
    id: 1,
    name: '[Laura]'
  },
  {
    id: 2,
    name: '[Richard]'
  },
  {
    id: 3,
    name: '[michael]'
  },
  {
    id: 4,
    name: '[joannah]'
  },
  {
    id: 5,
    name: '[Nina]'
  },
  {
    id: 6,
    name: '[michael]'
  },
  {
    id: 7,
    name: '[theresa]'
  }
];

const chats = [
  {
    errorMessage: [
      {
        id: 1,
        img: 'error',
        errorHEading: '[MessageMoment.com]',
        errorText: 'The token you entered is incorrect! Please try again.'
      },
      {
        id: 2,
        img: 'error',
        errorHEading: '[MessageMoment.com]',
        errorText: 'The chat session is full! There are currently 10/10 users joined.'
      }
    ]
  },
  {
    joinedMessage: [
      {
        id: 1,
        name: '[Richard]',
        text: 'Joined',
        color: 'red'
      },
      {
        id: 2,
        name: '[Aron]',
        text: 'Left',
        color: '#CCCCCC'
      },
      {
        id: 3,
        name: '[catalina]',
        text: 'Joined',
        color: 'red'
      }
    ]
  },
  {
    token: [
      {
        id: 1,
        image: 'tokenImage',
        text1: 'This chat session is protected using a secure token.',
        text2: '...',
        text3: '> Please enter the Token you received with your chat link:'
      }
    ]
  },
  {
    verify: [
      {
        id: 1,
        text: 'Verifying'
      }
    ]
  },
  {
    textMessage: [
      {
        id: 1,
        name: '[Laura]',
        message: 'hello everybody'
      },
      {
        id: 1,
        name: '[Theresa]',
        message: 'hi richard 👋🏻'
      }
    ]
  }
];

// for (let i = 0; i < chats[1].length; i++) {
//   console.log(chats[1].joinedMessage[i]);
// }

const Sidebar = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accordions, setAccordions] = useState(accordionCookiesList);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSelect = options => {
    setSelectedOption(options);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 px-20 max-w-[1440px] mx-auto bg-[#f5f5f5] ">
        <div>
          <div className="col-span-4 md:col-span-4 fixed w-[80%] max-lg:w-full h-[75%] left-0 bg-white">
            <div className="  p-4 h-full overflow-y-auto custom-scrollbar">
              <div className="sticky-0 w-full left-0 right-0 bg-white">
                <div className="bg-midGray border p-4 rounded-t-lg  grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue text-[14px] font-jetBrain ">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex justify-between items-center">
                    <p className="text-[14px] text-dark font-jetBrain">Welcome to MessageMoment.com, where your message only lasts a moment!</p>
                    <Image src={Vector} alt="" />
                  </div>
                </div>

                <SidebarComponents3 contentLeft="Advertisement" contentRight="Big Sale on at Flight Centre! Don’t miss out. Visit" linkContent="www.flightcentre.com" href="/https://www.flightcentre.com" contentRight2="now and book your trip!" />
              </div>

              {/* {chats[1].joinedMessage.map(chat => (
                <div key={chat.id}>
                  <SidebarComponents color={chat.color} contentLeft={chat.name} text />
                </div>
              ))} */}

              <div className="">
                <div className=" bg-midGray p-4 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex  ">
                    <div className="pt-[3px]">
                      <Image src={tokenImage} alt="" className="w-[10.667px] h-[14px]  " />
                    </div>
                    <p className="text-dark flex items-start justify-start text-[14px] font-jetBrain  font-normal pl-[12px]">
                      This chat session is protected using a secure token. <br /> ... <br /> {`> Please enter the Token you received with your chat link:`}
                    </p>
                  </div>
                </div>
                <SidebarComponents contentRight="Verifying..." textRight="font-normal" />

                <SidebarComponents2 img={error} contentLeft="[MessageMoment.com]" contentRight="The chat session is full! There are currently 10/10 users joined." />
                <SidebarComponents2 img={error} contentLeft="[MessageMoment.com]" contentRight="The token you entered is incorrect! Please try again." />

                <SidebarComponents contentLeft="[MessageMoment.com]" textLeft="text-blue" contentRight="Verifying..." text=" text-errorColor" />
                <div className=" bg-midGray p-4 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[14px] font-jetBrain font-normal">Thank you!</p>
                    <p className="text-[14px] leading-5 font-normal font-jetBrain">...</p>
                    <p className="text-dark  text-[14px] font-jetBrain font-normal">{`> Please enter your Display Name to proceed:`}</p>
                    <p className="text-[10px] text-[#777] font-jetBrain font-normal">By proceeding, you agree that you are solely responsible for your actions and any content that you post or share during the chat session. MessageMoment does not assume any liability for the content posted by users or for any damages that may result from using this service.</p>
                  </div>
                </div>
                <SidebarComponents contentLeft="[Richard]" textLeft="text-[#56CCF2]" contentRight="joined" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Laura]" rounded="bg-white border-b" textLeft="text-[#219653]" contentRight="hello everybody" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Theresa]" rounded="bg-white" textLeft="text-[#EE5353]" contentRight="hi richard 👋🏻" text=" text-errorColor" />
                <div className=" bg-midGray p-4 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue text-[14px] font-jetBrain ">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[14px] font-jetBrain font-normal">{`> Please enter the Message Expiration Time (in seconds) between 3 and 300. This can only be set once for all users, by any user, at any time. If this value is is not defined, the default will be 30 seconds.`}</p>
                    <p className="text-[14px] leading-5 font-normal font-jetBrain">...</p>
                    <p className="text-dark  text-[14px] font-jetBrain font-normal">
                      * Set it with the command <span className="text-blue">/timer [seconds]</span> *
                    </p>
                  </div>
                </div>
                <SidebarComponents contentLeft="[joannah]" rounded="bg-white border-b" textLeft="text-[#5F27CD]" contentRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />
                <SidebarComponents contentLeft="[Nina]" rounded="bg-white" textLeft="text-[#F368E0]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />
                <SidebarComponents contentLeft="[Marcus]" rounded="bg-[#F7F7F7] rounded-lg" textLeft="text-[#704F2C]" contentRight="Left" text=" text-errorColor" />
                <SidebarComponents2 img={blueError} contentLeft="[MessageMoment.com]" contentRight="Message Expiry Time must be a value between 3 and 300." textRight=" !font-normal" bg="border-t-blue" />
                <SidebarComponents contentLeft="[Richard]" rounded="!bg-blue rounded-lg" textLeft="text-white" textRight="text-white font-semibold" contentRight="* Message Expiration Time set for 120 secs *" text=" text-errorColor" />
                <SidebarComponents rounded="bg-white" contentLeft="[william]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis " textLeft="text-[#6FCF97]" />
                <SidebarComponents contentLeft="[Aron]" contentRight="Joined " textLeft="text-[#704F2C]" />
                <SidebarComponents contentLeft="[catalina]" contentRight="Joined " textLeft="text-[#EDC447]" />
                <div className=" p-4 rounded-t-lg grid grid-cols-1 lg:grid-cols-5 mt-[15px]">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-[14px] font-jetBrain text-[#5F27CD]">[joannah]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4">
                    <p className="text-dark text-[14px] font-jetBrain leading-5 ">Richard, please check this image. I guess you know what’s about!</p>
                    <p className="text-blue text-[14px] font-jetBrain mt-[15px] mb-[18px]">https://filemoment.com/sqjgcf9o2s5narz8k</p>
                    <div className="flex justify-between items-center bg-midGray pl-[11px] pr-[20px] rounded-xl">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.9 10.98L8 13.51L11.1 9.52C11.3 9.26 11.7 9.26 11.9 9.53L15.41 14.21C15.4657 14.2843 15.4996 14.3726 15.508 14.4651C15.5163 14.5576 15.4987 14.6506 15.4572 14.7336C15.4157 14.8167 15.3519 14.8865 15.2729 14.9353C15.1939 14.9841 15.1029 15.01 15.01 15.01H3.02C2.6 15.01 2.37 14.53 2.63 14.2L5.12 11C5.31 10.74 5.69 10.73 5.9 10.98Z" fill="#CCCCCC" />
                        </svg>
                        <p className="text-dark font-jetBrain text-[14px] leading-5 ml-[11px]">img_12839_03.jpg</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-dark text-[14px] leading-5 font-normal font-jetBrain pr-5 border-r py-[11px]">7.5 MB</p>
                        <button className="text-blue text-[14px] font-jetBrain leading-5 font-medium ml-5 ">Download</button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-[11px]">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6.88173 10.7453L4.18164 8.04457L5.08146 7.14476L6.88173 8.94439L10.481 5.34448L11.3815 6.24494L6.88173 10.744V10.7453Z" fill="#CCCCCC" stroke="#CCCCCC" stroke-width="0.2" stroke-linejoin="round" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 4.13409 4.13409 1 8 1C11.8659 1 15 4.13409 15 8C15 11.8659 11.8659 15 8 15C4.13409 15 1 11.8659 1 8ZM8 13.7273C7.24788 13.7273 6.50313 13.5791 5.80827 13.2913C5.1134 13.0035 4.48203 12.5816 3.95021 12.0498C3.41838 11.518 2.99651 10.8866 2.70869 10.1917C2.42087 9.49687 2.27273 8.75212 2.27273 8C2.27273 7.24788 2.42087 6.50313 2.70869 5.80827C2.99651 5.1134 3.41838 4.48203 3.95021 3.95021C4.48203 3.41838 5.1134 2.99651 5.80827 2.70869C6.50313 2.42087 7.24788 2.27273 8 2.27273C9.51897 2.27273 10.9757 2.87613 12.0498 3.95021C13.1239 5.02428 13.7273 6.48103 13.7273 8C13.7273 9.51897 13.1239 10.9757 12.0498 12.0498C10.9757 13.1239 9.51897 13.7273 8 13.7273Z" fill="#CCCCCC" stroke="#CCCCCC" stroke-width="0.2" stroke-linejoin="round" />
                        </svg>
                        <p className="text-[10px] text-[#777] font-jetBrain ml-[6px]">
                          Securely checked and hosted by FileMomment. Visit{' '}
                          <a href="#" className="underline">
                            www.filemoment.com
                          </a>
                          !
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M6.84444 0H3.15556C3.01111 0 2.86667 0.0611111 2.76667 0.161111L0.161111 2.76667C0.0611111 2.86667 0 3.01111 0 3.15556V6.83889C0 6.98889 0.0611111 7.12778 0.161111 7.23333L2.76111 9.83333C2.86667 9.93889 3.01111 10 3.15556 10H6.83889C6.98889 10 7.12778 9.93889 7.23333 9.83889L9.83333 7.23889C9.88507 7.18716 9.92597 7.12563 9.95364 7.0579C9.9813 6.99017 9.99517 6.9176 9.99444 6.84444V3.15556C9.99444 3.00556 9.93333 2.86667 9.83333 2.76111L7.23333 0.161111C7.13333 0.0611111 6.98889 0 6.84444 0ZM5 7.94444C4.6 7.94444 4.27778 7.62222 4.27778 7.22222C4.27778 6.82222 4.6 6.5 5 6.5C5.4 6.5 5.72222 6.82222 5.72222 7.22222C5.72222 7.62222 5.4 7.94444 5 7.94444ZM5 5.55556C4.69444 5.55556 4.44444 5.30556 4.44444 5V2.77778C4.44444 2.47222 4.69444 2.22222 5 2.22222C5.30556 2.22222 5.55556 2.47222 5.55556 2.77778V5C5.55556 5.30556 5.30556 5.55556 5 5.55556Z" fill="#CCCCCC" />
                        </svg>
                        <button onClick={handleOpen} className="text-[10px] text-[#777] font-jetBrain underline ml-[6px] cursor-pointer">
                          Report File
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {show ? (
                  <div className="justify-center items-end lg:items-center flex h-screen w-screen overflow-x-hidden overflow-y-auto fixed lg:inset-0 z-50 outline-none focus:outline-none bottom-0 ">
                    {/*content*/}
                    <div className="border border-black border-opacity-10 rounded-lg shadow-lg relative flex flex-col w-[calc(100%-20px)] h-[calc(100vh-220px)] mt-12 lg:pt-0 lg:max-h-[570px] xl:max-h-[650px] max-w-[670px] bg-white outline-none focus:outline-none mb-[10px] lg:mb-0">
                      {/*header*/}
                      <div className="px-5 border-b border-solid border-black border-opacity-10 rounded-t gap-5 relative">
                        <Image src={report} alt="Cookies" className="w-[60px] lg:w-[80px] absolute -top-4 lg:-top-6 " />
                        <h3 className="text-[17px] lg:text-[26px] text-blue font-bold py-4 lg:py-5 text-center">Report a FileMoment.com File</h3>
                        <button className="p-1 ml-auto bg-transparent border-0 text-black  absolute top-5 lg:top-7 right-5 lg:right-[30px] outline-none focus:outline-none" onClick={handleClose}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="#363C4F" />
                          </svg>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-5 flex-auto px-[18px] overflow-y-auto max-h-[calc(100vh-300px)] custom-scrollbar">
                        <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Welcome to our File Report Center</h5>

                        <p className="text-[15px] pb-[10px] max-lg:text-[13px]  font-jetBrain leading-[23px] font-normal text-justify ">MessageMoment was designed to provide a safe and secure environment for all our members. If you believe that a sent file violates our guidelines or Terms of Use, please use this reporting feature to bring it to our attention. This process is totally anonymous.</p>

                        <h5 className="text-blue text-[17px] leading-6 font-medium pb-[10px]">Welcome to our File Report Center</h5>

                        <div className="accordion-lists">
                          <div className="accordion-item border border-light-gray border-solid px-4 rounded-md my-[10px]" onClick={() => setIsOpen(prev => !prev)}>
                            <CookiesFirstAccordion isOpen={isOpen} />
                          </div>
                          {accordions.map(list => {
                            return (
                              <div key={list.id}>
                                <CookiesAccordion items={list.listItem} />
                              </div>
                            );
                          })}
                        </div>

                        {/* <CookiesMore /> */}
                      </div>
                      {/*footer*/}
                      {/* <CookiesFooterButtons cookiesRejected={cookiesRejected} cookiesAccepted={cookiesAccepted} cookiesSaved={cookiesSaved} /> */}
                    </div>
                  </div>
                ) : null}
                {/* <FileUploadPopup /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 max-lg:hidden bg-black fixed w-[222px] mr-6 h-[86%] right-0 overflow-y-auto overflow-x-hidden rounded-xl custom-scrollbar">
          <div className="flex justify-between items-center p-4">
            <h3 className="text-[14px] font-medium text-white ">Chat Group</h3>
            <p className="text-white opacity-40 text-[13px] font-jetBrain"> {users.length} /10</p>
          </div>
          <hr />

          {users.map(user => (
            <div key={user.id} className="">
              <a href="#" className="block w-full pl-5 py-[6px] cursor-pointer text-white opacity-40 dark:focus:opacity-100 border-b border-darkGrey dark:hover:text-white dark:focus:text-white">
                {user.name}
              </a>
            </div>
          ))}
          <div className="relative mt-20">
            <h4 className="text-[11px] font-jetBrain font-bold leading-normal text-white text-center bg-[#fff] bg-opacity-20 mx-2 py-[10px] rounded-t-lg">Advertisement</h4>
            <div className="flex justify-center items-center">
              <Image src={ad} alt="" />
              <Image src={adIcon} alt="" className="absolute top-1/2 left-[40%]" />
            </div>
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

      <div className=" h-20% w-[80%] bg-red-800">
        {/* <input type="text" placeholder="> " className="w-[75%] h-12 text-base outline-none pl-5 absolute bottom-3 left-6 border " /> */}
        {/* <SidebarInput /> */}
        <div className=" mt-2 ml-5 rounded-md shadow-sm fixed bottom-3 w-[75%]">
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"> {`>`} </span>
          </div>
          <input type="text" name="text" id="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="" />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Image src={icon} alt="" />
          </div> */}
          <AutoComplete options={options} onSelect={handleSelect} />
          {/* <p>Selected Option: {selectedOption}</p> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
