'use client';

import { useRef, useState } from 'react';
import ChatHeader from '@/components/ChatHeader';
import Chat10 from '@/components/Chat10';

const page = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(120);
  const [darkText, setDarkText] = useState(true);
  const inputField = useRef();

  function handleChatInput() {
    return console.log('Clicked!');
    setTimer(inputField.current.value.replace('/timer', ''));
    setDarkText(true);
  }

  return (
    <>
      <ChatHeader timer={timer} darkText={darkText} setShowMenu={setShowMenu} showMenu={showMenu} />
      <Chat10 showMenu={showMenu} inputField={inputField} handleChatInput={handleChatInput} />
    </>
  );
};

export default page;
