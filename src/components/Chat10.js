'use client';

import { useState } from 'react';
import ad from '/public/icons/ad.svg';
import AutoComplete from './AutoComplete';
import { accordionCookiesList } from './AccordionList';
import ChatSidebar from './ChatSidebar';
import SidebarComponents2 from './ChatComponents2';
import ChatSticky from './ChatSticky';
import SidebarComponents from './ChatComponents';
const options = [];

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

const Chat10 = ({ children, showMenu, handleChatInput, inputField }) => {
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
            <ChatSticky />
            <div className="pb-10">
              <SidebarComponents contentLeft="[Richard]" rounded="!bg-white border-b !mt-0 !py-4 !rounded-b-none" textLeft="text-[#56ccf2]" contentRight="enean tempor nisl ut nulla sollicitudin, bibendum ultricies mi tempus. Nulla id euismod augue, fringilla mollis metus. Nulla facilisi." text=" text-errorColor" />
            </div>
            <div className="mt-2 rounded-md shadow-sm absolute left-0 right-0 bottom-0 bg-[#f5f5f5] px-6 py-5">
              <AutoComplete handleChatInput={handleChatInput} inputField={inputField} options={options} onSelect={handleSelect} />
            </div>
          </div>
        </div>
        <ChatSidebar allUsers={allUsers} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Chat10;
