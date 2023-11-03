'use client';

import { useState } from 'react';
const options = ['leave', 'unlock', 'timer'];

const AutoComplete = ({ value = '', activeIcon = false, textColor = 'text-dark', handleChatInput = () => console.log(), inputField }) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showActiveIcon, setShowActiveIcon] = useState(activeIcon);

  const handleInputChange = e => {
    const value = e.target.value;

    setInputValue(value);

    // Filter the options based on the input value
    const filtered = options.filter(option => option.toLowerCase().includes(value.replace('/', '').toLowerCase()));
    setFilteredOptions(filtered);

    if (value.trim()) {
      setShowList(true);
      setShowActiveIcon(true);
      if (filtered.length == 0) setShowList(false);
      return;
    }

    setShowList(false);
    setShowActiveIcon(false);
  };

  const handleSelectOption = option => {
    setInputValue(option);
    // onSelect(option);
    setFilteredOptions([]);
    setShowList(false);
  };

  const handleOnBlur = () => {
    // setInputValue('');
    // setFilteredOptions([]);
    // setShowList(false);
  };

  return (
    <div className="autocomplete-input">
      <div className="relative">
        <ul className={`autocomplete-options w-[220px] hidden bg-[#000] text-white rounded-xl absolute overflow-hidden bottom-full ${!showList && 'hidden'}`}>
          <h3 className="py-[14px] pl-[22px] leading-[23px] font-medium border-b border-dark">Commands</h3>
          {filteredOptions.map((option, index) => (
            <li key={index} className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleSelectOption(option)}>
              <span className="text-white">/</span>
              {option}
            </li>
          ))}
        </ul>

        <div className="pointer-events-none flex items-center pl-3 absolute left-3 top-1/2 transform -translate-y-1/2">
          <span className="text-gray-500 sm:text-sm"> {`>`} </span>
        </div>
        {/* <input type="text" className="block w-full text-dark" placeholder="Test Zoom" /> */}
        <input value={inputValue} ref={inputField} onChange={handleInputChange} onBlur={handleOnBlur} type="text" name="text" id="text" className={`block w-full h-[50px] rounded-md border-none py-1.5 pl-10 pr-20 ${textColor}`} placeholder="" />
        {showActiveIcon ? (
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleChatInput} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#363C4F" />
            <path d="M13.088 18.44L15.68 15.16C15.7867 15.0213 15.9093 14.888 16.048 14.76C16.1867 14.6213 16.304 14.5147 16.4 14.44V14.296C16.2613 14.3067 16.0853 14.3227 15.872 14.344C15.6587 14.3547 15.4613 14.36 15.28 14.36H10V13.08H15.28C15.4613 13.08 15.6587 13.0907 15.872 13.112C16.0853 13.1227 16.2613 13.1387 16.4 13.16V13.016C16.3253 12.952 16.2187 12.8507 16.08 12.712C15.952 12.5733 15.8187 12.424 15.68 12.264L13.088 9H14.768L18.48 13.72L14.784 18.44H13.088Z" fill="white" />
          </svg>
        ) : (
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 " xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#CCCCCC" />
            <path d="M13.088 18.44L15.68 15.16C15.7867 15.0213 15.9093 14.888 16.048 14.76C16.1867 14.6213 16.304 14.5147 16.4 14.44V14.296C16.2613 14.3067 16.0853 14.3227 15.872 14.344C15.6587 14.3547 15.4613 14.36 15.28 14.36H10V13.08H15.28C15.4613 13.08 15.6587 13.0907 15.872 13.112C16.0853 13.1227 16.2613 13.1387 16.4 13.16V13.016C16.3253 12.952 16.2187 12.8507 16.08 12.712C15.952 12.5733 15.8187 12.424 15.68 12.264L13.088 9H14.768L18.48 13.72L14.784 18.44H13.088Z" fill="white" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
