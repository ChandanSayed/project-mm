'use client';

import Sidebar from '@/components/Chat';
import ChatHeader from '@/components/ChatHeader';
import { useState } from 'react';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Sidebar showMenu={showMenu} />
    </>
  );
};

export default page;
