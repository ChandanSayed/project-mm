'use client';

import { useState } from 'react';
import Chat from '@/components/Chat';
import ChatHeader from '@/components/ChatHeader';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* <div> */}
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat showMenu={showMenu} />
      {/* </div> */}
      <ChatLandscape />
    </>
  );
};

export default page;
