'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat4 from '@/components/Chat4';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat4 showMenu={showMenu} />
      <ChatLandscape />
    </>
  );
};

export default page;
