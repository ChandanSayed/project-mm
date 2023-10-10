'use client';
import icon from '/public/icons/inputIcon.png';

import Image from 'next/image';
import { useState } from 'react';
const options = ['/Apple', '/Banana', '/Cherry'];

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
    onSelect(option);
    setFilteredOptions([]);
  };
  return (
    <div className="autocomplete-input">
      <ul className="autocomplete-options">
        {filteredOptions.map((option, index) => (
          <li key={index} onClick={() => handleSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm"> {`>`} </span>
      </div>
      <input value={inputValue} onChange={handleInputChange} type="text" name="text" id="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="" />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Image src={icon} alt="" />
      </div>
    </div>
  );
};

export default AutoComplete;
