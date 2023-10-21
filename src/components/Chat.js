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
import CookiesFirstAccordion from './CookiesFirstAccordion';
import CookiesAccordion from './CookiesAccordion';
import { accordionCookiesList } from './AccordionList';
import ChatFooter from './ChatFooter';
import ReportModal from './ReportModal';
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
  const [disable, setDisable] = useState(true);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSelect = options => {
    setSelectedOption(options);
  };
  const handleReportFile = () => {
    setDisable(false);
  };
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px] gap-[30px] mt-6 max-w-[1440px] mx-auto bg-white">
        <div className="bg-white h-[calc(100vh-110px)]">
          <div className="px-4 pt-4 h-full overflow-y-auto custom-scrollbar">
            {/* {chats[1].joinedMessage.map(chat => (
                <div key={chat.id}>
                  <SidebarComponents color={chat.color} contentLeft={chat.name} text />
                </div>
              ))} */}

            <div className="">
              <div className="sticky-0 w-full top-0 bg-white">
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
              {show ? <ReportModal handleClose={handleClose} /> : null}
              {/* <FileUploadPopup /> */}
            </div>
            <div className="mt-2 rounded-md shadow-sm sticky bottom-0 bg-[#f5f5f5] px-6 py-5">
              <AutoComplete options={options} onSelect={handleSelect} />
            </div>
          </div>
        </div>
        <div className="hidden xl:block bg-black h-[calc(100vh-110px)] overflow-y-auto overflow-x-hidden rounded-[10px] custom-scrollbar">
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

          <ChatFooter />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
