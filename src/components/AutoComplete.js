'use client';

import { useAppContext } from '@/context/AppContext';
import { useState } from 'react';

const AutoComplete = ({ value = '', activeIcon = false, textColor = 'text-dark', handleChatInput = () => console.log(), inputField, options = ['leave', 'unlock', 'timer'], projectOff, timer = true }) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showActiveIcon, setShowActiveIcon] = useState(activeIcon);
  const [colorChange, setColorChange] = useState(false);
  const { setIsOpen, shareButtonTooltip } = useAppContext();

  const handleInputChange = e => {
    const value = e.target.value;

    const values = value.split(' ');
    const command = values[0];
    // console.log(command);

    if (command.includes('/')) {
      const desireValue = command.toLowerCase() + value.replace(command, '');
      setInputValue(desireValue);
      setColorChange(true);
    } else {
      setInputValue(value);
      setColorChange(false);
    }

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
  const handleLeaveOption = option => {
    setInputValue(option);
    // onSelect(option);
    setFilteredOptions([]);
    setShowList(false);
    setIsOpen(true);
  };

  const handleProjectOff = option => {
    setInputValue(option);
    // onSelect(option);
    setFilteredOptions([]);
    setShowList(false);
  };
  const handleProjectOn = option => {
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
    <div className="mt-2 rounded-b-md border-t border-black border-opacity-10 shadow-sm bg-[#f5f5f5] px-2.5 lg:px-4 py-5">
      <div className="autocomplete-input">
        <div className="relative">
          <ul className={`autocomplete-options w-full lg:w-[220px] bg-[#000] text-white rounded-xl absolute overflow-hidden bottom-full ${!showList ? 'hidden' : ''}`}>
            <div className="flex items-center justify-between pr-3 border-b border-dark">
              <h3 className="py-[14px] pl-[22px] leading-[23px] font-medium">Commands</h3>
              <svg className="cursor-pointer" onClick={() => setShowList(false)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" fill="white" />
              </svg>
            </div>
            {/* {filteredOptions.map((option, index) => (
            <li key={index} className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleSelectOption(option)}>
              <span className="text-white">/</span>
              {option}
            </li>
          ))} */}
            {projectOff && !timer && (
              <>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleProjectOn('project on')}>
                  <span className="text-white">/</span>
                  project on
                </li>
              </>
            )}
            {!projectOff && !timer && (
              <>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleProjectOff('project off')}>
                  <span className="text-white">/</span>
                  project off
                </li>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer">
                  <span className="text-white">/</span>
                  download
                </li>
              </>
            )}

            {timer && (
              <>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleLeaveOption('leave')}>
                  <span className="text-white">/</span>
                  leave
                </li>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleSelectOption('unlock')}>
                  <span className="text-white">/</span>
                  unlock
                </li>
                <li className="py-[6px] pl-[22px] text-[#5e6372] hover:text-white leading-[23px] border-b border-dark bg-black cursor-pointer" onClick={() => handleSelectOption('timer')}>
                  <span className="text-white">/</span>
                  timer
                </li>
              </>
            )}
          </ul>

          <div className="pointer-events-none flex items-center pl-3 absolute left-3 top-1/2 transform -translate-y-1/2">
            <span className="text-gray-500 sm:text-sm"> {`>`} </span>
          </div>
          {/* <input type="text" className="block w-full text-dark" placeholder="Test Zoom" /> */}
          <input value={inputValue} ref={inputField} onChange={handleInputChange} onBlur={handleOnBlur} type="text" className={`block lg:hidden w-full h-[50px] rounded-md border-none py-1.5 pl-10 pr-20 ${colorChange ? 'text-blue' : 'text-dark'} font-jetBrain custom-input`} />
          <input value={inputValue} ref={inputField} onChange={handleInputChange} onBlur={handleOnBlur} type="text" className={`lg:block w-full h-[50px] rounded-md border-none py-1.5 pl-10 pr-20 ${colorChange ? 'text-blue' : 'text-dark'} font-jetBrain custom-input hidden text-sm`} />

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
          <div className={` ${shareButtonTooltip ? `animate-fade opacity-100` : 'opacity-0'} absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black py-2 px-8 rounded-md z-10`}>
            <p className="text-white text-sm font-medium">Link copied to the clipboard</p>
          </div>
        </div>

        {/* <p className="text-center text-[#676D74] text-[11px] font-jetBrain mt-[15px]">MessageMoment Feb 13 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p> */}
      </div>
    </div>
  );
};

export default AutoComplete;
