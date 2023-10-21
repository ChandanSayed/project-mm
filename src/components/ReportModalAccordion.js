'use client';
import { RadioGroup, Transition } from '@headlessui/react';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const options = [
  {
    id: 1,
    option: 'Inappropiate Content',
    details: 'This file contains offensive, explicit, or inappropriate material that violates community guidelines or Terms of Use.'
  },
  {
    id: 2,
    option: 'Copyright Violation',
    details: 'The file appears to infringe upon copyright or intellectual property rights, such as unauthorized distribution of copyrighted material.'
  },
  {
    id: 3,
    option: 'Malicious Software',
    details: "The file seems to contain viruses, malware, or other harmful software that could compromise users' devices or data."
  },
  {
    id: 4,
    option: 'Privacy Concerns'
  }
];

const ReportModalAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

  const handleChange = event => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };
  function handleButton() {
    setIsOpen(prev => !prev);
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 onClick={handleButton} className="text-[15px] max-lg:text-[13px] font-normal cursor-pointer font-jetBrain py-4 ">
          Strictly necessary cookies
        </h3>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
          </svg>
        ) : (
          <svg className="transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
          </svg>
        )}
      </div>
      <p className="text-[13px] max-md:text-[11px] font-normal leading-normal pb-4 font-jetBrain">These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly.</p>

      <Transition show={show} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        {options.map(option => (
          <div key={option.id} className="my-[10px] border-b">
            <input type="radio" id={option.id} value={option.option} checked={selected === option.option} onChange={handleChange} />
            <label htmlFor={option.id} className="ml-[10px]">
              {option.option}
            </label>
            <p className="ml-[20px] text-[#777] font-jetBrain text-[13px] font-normal">{option.details}</p>
          </div>
        ))}
      </Transition>
    </>
  );
};

export default ReportModalAccordion;
