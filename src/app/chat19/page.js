'use client';

import { useState } from 'react';
import Chat19 from '@/components/Chat19';
import ChatHeader from '@/components/ChatHeader';
import CookiesContainer from '@/components/CookiesContainer';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleLeave() {
    window.close();
    // let win = window.open('about:blank', '_self');
    // win.close();
  }
  return (
    <>
      <ChatHeader handleLeave={handleLeave} setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat19 showMenu={showMenu} />
      <ChatLandscape />
      <CookiesContainer />
    </>
  );
};

export default page;
