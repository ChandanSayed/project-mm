'use client';

import { useState } from 'react';
import SidebarComponents3 from './ChatComponents3';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
const options = [];

const users = [];

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

const Chat1 = ({ children, showMenu }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [accordions, setAccordions] = useState(accordionCookiesList);
  const [disable, setDisable] = useState(true);
  const [allUsers, setAllUsers] = useState(users);

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
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_220px] gap-[30px] lg:mt-6 max-w-[1440px] mx-auto bg-white pb-5">
        <div className="bg-white max-lg:h-[calc(100vh-200px)] max-lg:pb-10 h-[calc(100vh-136px)]">
          <div className="px-4 h-full overflow-y-auto custom-scrollbar relative">
            {/* {chats[1].joinedMessage.map(chat => (
                <div key={chat.id}>
                  <SidebarComponents color={chat.color} contentLeft={chat.name} text />
                </div>
              ))} */}
            <div className="sticky top-0 w-full bg-white pt-4">
              <div className="bg-midGray border px-4 py-5 rounded-t-lg  grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1 md:col-span-1">
                  <p className="text-blue text-sm font-jetBrain ">[MessageMoment.com]</p>
                </div>
                <div className="col-span-4 md:col-span-4 flex justify-between items-center">
                  <p className="text-sm text-dark font-jetBrain">Welcome to MessageMoment.com, where your message only lasts a moment!</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.5951 7.61476L12.9676 12.2578C13.3623 13.3543 13.5258 15.1908 11.8261 17.4504C11.7072 17.6093 11.5555 17.7407 11.3812 17.8355C11.2069 17.9304 11.0141 17.9865 10.8162 18H10.7184C10.5364 18 10.3562 17.9642 10.1881 17.8946C10.02 17.8249 9.86731 17.7228 9.73869 17.5941L5.56209 13.4132L1.87274 17.1051C1.74283 17.2351 1.56663 17.308 1.3829 17.308C1.19918 17.308 1.02298 17.2351 0.893065 17.1051C0.763152 16.9752 0.690168 16.799 0.690168 16.6153C0.690168 16.4316 0.763152 16.2554 0.893065 16.1255L4.58502 12.4361L0.404959 8.25605C0.267561 8.11848 0.160675 7.95352 0.0912589 7.77191C0.0218424 7.59029 -0.00854864 7.39609 0.0020646 7.20195C0.0126778 7.00781 0.0640572 6.81808 0.152858 6.64511C0.241659 6.47214 0.36589 6.31982 0.517465 6.19805C2.7174 4.42304 4.82301 4.77181 5.7447 5.06086L10.3834 0.405681C10.512 0.277066 10.6647 0.175041 10.8327 0.105434C11.0007 0.0358268 11.1808 0 11.3627 0C11.5445 0 11.7246 0.0358268 11.8927 0.105434C12.0607 0.175041 12.2133 0.277066 12.3419 0.405681L17.5943 5.65715C17.8539 5.91669 17.9998 6.26869 17.9999 6.63578C18.0001 7.00286 17.8545 7.35499 17.5951 7.61476Z" fill="#CCCCCC" />
                  </svg>
                </div>
              </div>

              <SidebarComponents3 contentLeft="Advertisement" contentRight="Big Sale on at Flight Centre! Don’t miss out. Visit" linkContent="www.flightcentre.com" href="/https://www.flightcentre.com" contentRight2="now and book your trip!" />
            </div>
            <div className="">
              <div className=" bg-midGray px-4 py-5 rounded-lg mt-[15px] grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1 md:col-span-1"></div>
                <div className="col-span-4 md:col-span-4 flex flex-col gap-2  ">
                  <p className="text-dark  text-sm font-jetBrain font-normal">{`> Please enter your Display Name to proceed:`}</p>
                  <p className="text-sm leading-5 font-normal font-jetBrain">---</p>
                  <p className="text-[10px] text-[#777] font-jetBrain font-normal">By proceeding, you agree that you are solely responsible for your actions and any content that you post or share during the chat session. MessageMoment does not assume any liability for the content posted by users or for any damages that may result from using this service.</p>
                </div>
              </div>
            </div>
            <div className="mt-2 rounded-md shadow-sm absolute left-0 right-0 bottom-0 bg-[#f5f5f5] px-6 py-5">
              <AutoComplete options={options} onSelect={handleSelect} />
            </div>
          </div>
        </div>
        <ChatSidebar allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat1;
