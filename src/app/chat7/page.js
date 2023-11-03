'use client';

import { useRef, useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat7 from '@/components/Chat7';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(30);
  const [darkText, setDarkText] = useState(false);
  const inputField = useRef();

  function handleChatInput() {
    setTimer(inputField.current.value.replace('/timer', ''));
    setDarkText(true);
  }
  return (
    <>
      <ChatHeader timer={timer} darkText={darkText} setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat7 showMenu={showMenu} inputField={inputField} handleChatInput={handleChatInput} />
    </>
  );
};

export default page;
