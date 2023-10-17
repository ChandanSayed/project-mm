'use client';
import icon from '/public/icons/inputIcon.png';

import Image from 'next/image';
import { useState } from 'react';
const options = ['/leave', '/unlock', '/timer'];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the options based on the input value
    const filtered = options.filter(option => option.toLowerCase().includes(value.toLowerCase()));
    setFilteredOptions(filtered);
  };

  const handleSelectOption = option => {
    setInputValue(option);
    // onSelect(option);
    setFilteredOptions([]);
  };

  const handleOnBlur = () => {
    setInputValue('');
    // setFilteredOptions([]);
  };

  return (
    <div className="autocomplete-input">
      <ul className="autocomplete-options w-[220px] bg-[#000] text-white rounded-xl ">
        <h3 className="py-[14px] pl-[22px] leading-[23px] border-b border-dark">Commands</h3>
        {filteredOptions.map((option, index) => (
          <>
            <li key={index} className="py-[6px] pl-[22px] leading-[23px] rounded-xl border-b border-dark bg-black hover:bg-black cursor-pointer hover:opacity-80" onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          </>
        ))}
      </ul>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"> {`>`} </span>
        </div>
        <input value={inputValue} onChange={handleInputChange} onBlur={handleOnBlur} type="text" name="text" id="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="" />
        <Image src={icon} alt="" className="absolute right-0 top-0" />
      </div>
    </div>
  );
};

export default AutoComplete;
