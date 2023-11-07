'use client';

import { useState } from 'react';
import Chat from '@/components/Chat';
import ChatHeader from '@/components/ChatHeader';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="overflow-hidden">
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat showMenu={showMenu} />
    </div>
  );
};

export default page;
