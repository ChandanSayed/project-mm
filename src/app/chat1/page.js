'use client';

import { useState } from 'react';
import Chat from '@/components/Chat1';
import ChatHeader from '@/components/ChatHeader';
import CookiesContainer from '@/components/CookiesContainer';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat showMenu={showMenu} />
      <ChatLandscape />
      <CookiesContainer />
    </>
  );
};

export default page;
