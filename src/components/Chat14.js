'use client';

import { useState } from 'react';
import ad from '/public/icons/ad.svg';
import clip from '/public/icons/clip.svg';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
import SidebarComponents2 from './ChatComponents2';
import ChatSticky from './ChatSticky';
import SidebarComponents from './ChatComponents';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';

const users = [
  {
    id: 1,
    name: '[Laura]'
  },
  {
    id: 2,
    name: '[Richard]',
    active: true
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
  },
  {
    id: 8,
    name: '[Aron]'
  },
  {
    id: 9,
    name: '[catalina]'
  },
  {
    id: 10,
    name: '[Robert]'
  }
];

const Chat14 = ({ showMenu, handleChatInput, inputField }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accordions, setAccordions] = useState(accordionCookiesList);
  const [disable, setDisable] = useState(true);
  const [allUsers, setAllUsers] = useState(users);
  const { chatScroll } = useAppContext();
  const options = ['/project off', '/download'];

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
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px] gap-3 lg:mt-6 max-w-[1440px] mx-auto bg-white lg:pb-5">
        <div className="bg-white max-lg:h-[calc(100vh-220px)] max-lg:overflow-hidden h-[calc(100vh-136px)]">
          <div className={`h-full ${chatScroll ? 'overflow-y-auto' : 'overflow-hidden'} custom-scrollbar flex flex-col justify-between`}>
            <div className={`h-[calc(100%-120px)] ${chatScroll ? 'overflow-y-auto' : 'overflow-hidden lg:pr-1.5'} custom-scrollbar`}>
              <ChatSticky />
              <div className="pb-8 px-3 lg:px-4">
                <div className=" bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex  ">
                    <div className="pt-[3px]"></div>
                    <p className="text-dark text-[13px] leading-5 lg:text-sm font-jetBrain  font-normal pl-[12px]">
                      <span className="flex lg:items-center">
                        <span className="w-[14px] mr-3 max-lg:mt-[2px]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                            <path d="M1.33333 14C0.966668 14 0.652668 13.8693 0.391334 13.608C0.130001 13.3467 -0.000443313 13.0329 1.13186e-06 12.6667V6C1.13186e-06 5.63333 0.130668 5.31933 0.392001 5.058C0.653334 4.79667 0.967112 4.66622 1.33333 4.66667H2V3.33333C2 2.41111 2.32511 1.62489 2.97533 0.974667C3.62556 0.324445 4.41156 -0.000443989 5.33333 4.55373e-07C6.25556 4.55373e-07 7.04178 0.325112 7.692 0.975334C8.34222 1.62556 8.66711 2.41156 8.66667 3.33333V4.66667H9.33333C9.7 4.66667 10.014 4.79733 10.2753 5.05867C10.5367 5.32 10.6671 5.63378 10.6667 6V12.6667C10.6667 13.0333 10.536 13.3473 10.2747 13.6087C10.0133 13.87 9.69956 14.0004 9.33333 14H1.33333ZM5.33333 10.6667C5.7 10.6667 6.014 10.536 6.27533 10.2747C6.53667 10.0133 6.66711 9.69956 6.66667 9.33333C6.66667 8.96667 6.536 8.65267 6.27467 8.39133C6.01333 8.13 5.69956 7.99956 5.33333 8C4.96667 8 4.65267 8.13067 4.39133 8.392C4.13 8.65333 3.99956 8.96711 4 9.33333C4 9.7 4.13067 10.014 4.392 10.2753C4.65333 10.5367 4.96711 10.6671 5.33333 10.6667ZM3.33333 4.66667H7.33333V3.33333C7.33333 2.77778 7.13889 2.30556 6.75 1.91667C6.36111 1.52778 5.88889 1.33333 5.33333 1.33333C4.77778 1.33333 4.30556 1.52778 3.91667 1.91667C3.52778 2.30556 3.33333 2.77778 3.33333 3.33333V4.66667Z" fill="#363C4F" />
                          </svg>
                        </span>
                        This chat session is protected using a secure token.
                      </span>
                      <span className="inline-block my-2">...</span> <span className="flex"> {`> Please enter the Token you received with your chat link:`}</span>
                    </p>
                  </div>
                </div>
                <SidebarComponents contentRight="Verifying..." textRight="font-normal" />
                <SidebarComponents2 contentLeft="[MessageMoment.com]" contentRight="The token you entered is incorrect! Please try again." />
                <SidebarComponents contentRight="Verifying..." textRight="font-normal" />
                <div className=" bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1"></div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">Thank you!</p>
                    <p className="text-[13px] leading-5 lg:text-sm font-normal font-jetBrain">...</p>
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">{`> Please enter your Display Name to proceed:`}</p>
                    <p className="text-[13px] leading-5 lg:text-sm font-normal font-jetBrain">---</p>
                    <p className="text-[10px] text-[#777] font-jetBrain font-normal">By proceeding, you agree that you are solely responsible for your actions and any content that you post or share during the chat session. MessageMoment does not assume any liability for the content posted by users or for any damages that may result from using this service.</p>
                  </div>
                </div>
                <SidebarComponents contentLeft="[Richard]" textLeft="text-[#56CCF2]" contentRight="joined" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Laura]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#219653]" contentRight="hello everybody" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Theresa]" rounded="bg-white !mt-0 !py-4" textLeft="text-[#EE5353]" contentRight="hi richard 👋🏻" text=" text-errorColor" />
                <div className=" bg-midGray px-4 py-5 rounded-lg grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain ">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">{`> Please enter the Message Expiration Time (in seconds) between 3 and 300. This can only be set once for all users, by any user, at any time. If this value is is not defined, the default will be 30 seconds.`}</p>
                    <p className="text-[13px] leading-5 lg:text-sm font-normal font-jetBrain">...</p>
                    <p className="text-dark text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">
                      * Set it with the command <span className="text-blue">/timer [seconds]</span> *
                    </p>
                  </div>
                </div>

                <SidebarComponents contentLeft="[joannah]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#5F27CD]" contentRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />

                <SidebarComponents contentLeft="[Nina]" rounded="bg-white !mt-0 !py-4" textLeft="text-[#F368E0]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis. Duis porttitor felis nulla, eget pellentesque nulla blandit eu. Pellentesque porta ipsum orci, sit amet." text=" text-errorColor" />

                <SidebarComponents contentLeft="[Nina]" rounded="bg-white !mt-0 !py-4" textLeft="text-[#F368E0]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis " text=" text-errorColor" />

                <SidebarComponents contentLeft="[Marcus]" rounded="bg-[#F7F7F7] rounded-lg !mt-0" textLeft="text-[#704F2C]" contentRight="Left" text=" text-errorColor" />

                <SidebarComponents contentLeft="[Richard]" rounded="!bg-blue rounded-lg" textLeft="text-white" textRight="text-white font-semibold" contentRight="* Message Expiration Time set for 120 secs *" text=" text-errorColor" />

                <SidebarComponents rounded="bg-white !mt-0 !py-4" contentLeft="[william]" contentRight="Quisque posuere magna id lorem consectetur, a dapibus eros lobortis " textLeft="text-[#6FCF97]" />

                <SidebarComponents contentLeft="[Aron]" rounded={'!mt-0'} contentRight="Joined " textLeft="text-[#704F2C]" />

                <SidebarComponents contentLeft="[catalina]" contentRight="Joined " textLeft="text-[#EDC447]" />

                <SidebarComponents contentLeft="[Theresa]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#EE5353]" contentRight="Sed fringilla nisl diam, ac congue quam fermentum sit amet?" text=" text-errorColor" />

                <SidebarComponents contentLeft="[Laura]" rounded="bg-white !mt-0 !py-4 !rounded-b-none" textLeft="text-[#219653]" contentRight="Quisque eros massa!" text=" text-errorColor" />

                <SidebarComponents contentLeft="[Robert]" contentRight="Joined " textLeft="text-[#BB6BD9]" />

                <div className="bg-blue bg-opacity-5 px-4 py-5 rounded-b-xl mt-[15px] border-t-[3px] border-t-blue grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1 flex items-center max-lg:mb-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12.4444 0H1.55556C1.143 0 0.747334 0.163879 0.455612 0.455597C0.163887 0.747345 0 1.14301 0 1.55554V12.4445C0 12.857 0.163887 13.2527 0.455612 13.5444C0.747334 13.8361 1.143 14 1.55556 14H12.4444C12.857 14 13.2527 13.8361 13.5444 13.5444C13.8361 13.2527 14 12.857 14 12.4445V1.55554C14 1.14301 13.8361 0.747345 13.5444 0.455597C13.2527 0.163879 12.857 0 12.4444 0Z" fill="#494AF8" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.8488 4.15403C10.9474 4.25257 11.0027 4.38621 11.0027 4.52555C11.0027 4.66489 10.9474 4.79853 10.8488 4.89707L6.91013 8.83578C6.85808 8.88785 6.79628 8.92914 6.72827 8.95732C6.66026 8.9855 6.58736 9 6.51374 9C6.44012 9 6.36722 8.9855 6.29921 8.95732C6.23119 8.92914 6.1694 8.88785 6.11734 8.83578L4.16043 6.87921C4.11024 6.83074 4.0702 6.77275 4.04266 6.70864C4.01512 6.64453 4.00063 6.57558 4.00002 6.5058C3.99941 6.43603 4.01271 6.36683 4.03913 6.30225C4.06555 6.23767 4.10457 6.179 4.15391 6.12966C4.20325 6.08032 4.26192 6.0413 4.3265 6.01488C4.39108 5.98846 4.46028 5.97516 4.53005 5.97577C4.59983 5.97637 4.66878 5.99087 4.73289 6.01841C4.79701 6.04595 4.85499 6.08598 4.90347 6.13617L6.51356 7.74627L10.1055 4.15403C10.1543 4.1052 10.2122 4.06646 10.276 4.04003C10.3398 4.0136 10.4081 4 10.4771 4C10.5462 4 10.6145 4.0136 10.6783 4.04003C10.7421 4.06646 10.8 4.1052 10.8488 4.15403Z" fill="white" />
                    </svg>
                    <p className="text-blue  text-[13px] leading-5 lg:text-sm font-jetBrain pl-[10px] font-semibold">[MessageMoment]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex justify-between items-center">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-semibold">Project Mode Enabled</p>
                  </div>
                </div>
                <div className=" bg-midGray px-4 py-5 mt-[15px] rounded-lg grid grid-cols-1 lg:grid-cols-5">
                  <div className="col-span-1 md:col-span-1">
                    <p className="text-blue text-[13px] leading-5 lg:text-sm font-jetBrain ">[MessageMoment.com]</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                    <p className="text-dark  text-[13px] leading-5 lg:text-sm font-jetBrain font-normal">
                      Should you wish to exit Project Mode at any point, please use the <span className="text-blue">/project off</span> command. <br />
                      If you would like to save a transcript of your chat, you can do so by using the <span className="text-blue">/download</span> command. <br />
                      To interact with ChatGPT, use the <span className="text-blue">/mm</span> command.
                    </p>
                  </div>
                </div>

                <SidebarComponents contentLeft="[catalina]" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#EDC447]" contentRight="Nulla id euismod augue, fringilla mollis metus. Nulla facilisi. Cras volutpat, lorem vitae fermentu" text=" text-errorColor" />
                <SidebarComponents contentLeft="" rounded="bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#EDC447]" contentRight="Etiam bibendum velit ex, sollicitudin porttitor massa pretium quis" text=" text-errorColor" />
                <SidebarComponents contentLeft="[Laura]" rounded="bg-white !mt-0 !py-4 !rounded-b-none" textLeft="text-[#219653]" contentRight="Donec interdum convallis sem et accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam mattis lacus ut quam volutpat euismod. Nullam id blandit odio, eu luctus justo. Vestibulum rhoncus tincidunt eros" text=" text-errorColor" />
              </div>
            </div>
            <AutoComplete timer={false} projectOff={false} handleChatInput={handleChatInput} inputField={inputField} options={options} onSelect={handleSelect} />
          </div>
        </div>
        <ChatSidebar allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat14;
