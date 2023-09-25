import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FiCheck } from 'react-icons/fi';
const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`relative inline-block w-14 h-8 rounded-full p-1 ${isActive ? 'bg-dark' : 'bg-lightGrey'}`} onClick={toggleButton}>
      <div className="flex justify-between items-center p-[5px] text-white">
        <div>
          <FiCheck size={14} />
        </div>{' '}
        <div>
          <RxCross2 size={14} />
        </div>
      </div>
      <div className={`relative bottom-6 left-0 w-[25px] h-6 bg-white rounded-full transition-transform transform ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className={`absolute inset-0 flex items-center justify-center text-gray-600 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`absolute inset-0 flex items-center justify-center text-dark-600 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
