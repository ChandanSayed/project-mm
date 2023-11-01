'use client';

import { useState } from 'react';
import Chat from '@/components/Chat2';
import ChatHeader from '@/components/ChatHeader';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat showMenu={showMenu} />
    </>
  );
};

export default page;
