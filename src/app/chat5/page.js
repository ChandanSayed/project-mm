'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat5 from '@/components/Chat5';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat5 showMenu={showMenu} />
    </>
  );
};

export default page;
