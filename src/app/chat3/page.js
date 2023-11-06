'use client';

import { useState } from 'react';
import Chat3 from '@/components/Chat3';
import ChatHeader from '@/components/ChatHeader';
import CookiesContainer from '@/components/CookiesContainer';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat3 showMenu={showMenu} />
    </>
  );
};

export default page;
