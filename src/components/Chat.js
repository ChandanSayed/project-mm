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
