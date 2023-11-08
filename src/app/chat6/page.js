'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat6 from '@/components/Chat6';
import ChatLandscape from '@/components/ChatLandscape';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat6 showMenu={showMenu} />
      <ChatLandscape />
    </>
  );
};

export default page;
