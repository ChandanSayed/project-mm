'use client';

import { useState } from 'react';
import Chat from '@/components/Chat';
import ChatHeader from '@/components/ChatHeader';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleLeave() {
    window.close();
    let win = window.open('about:blank', '_self');
    win.close();
  }
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} handleLeave={handleLeave} />
      <Chat showMenu={showMenu} handleLeave={handleLeave} />
      <ChatLandscape />
    </>
  );
};

export default page;
