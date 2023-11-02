'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat7 from '@/components/Chat7';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleChatInput() {
    console.log(this);
  }
  return (
    <>
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat7 showMenu={showMenu} handleChatInput={handleChatInput} />
    </>
  );
};

export default page;
