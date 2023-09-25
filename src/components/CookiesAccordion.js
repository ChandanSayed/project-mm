'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import parse from 'html-react-parser';
import ToggleButton from './ToggleButton';
import angleRight from '/public/icons/angle-right.png';
import angleRightActive from '/public/icons/angle-right-active.png';

const CookiesAccordion = ({ items }) => {
  const [openIndices, setOpenIndices] = useState([]);

  function toggleClick(index) {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  }

  const replaceAnchorTagsWithLinks = node => {
    if (node.type === 'tag' && node.name === 'a' && node.attribs.href) {
      const href = node.attribs.href;
      return (
        <Link href="/" key={href} className="text-blue">
          {parse(node.children[0].data)}
        </Link>
      );
    }
  };

  return (
    <>
      {items.map((currentE, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div className="accordion-item border border-light-gray border-solid pb-2 px-4 rounded-md my-4" key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center pb-2 pt-2">
                {isOpen ? <Image src={angleRightActive} alt="Right Icon Active" /> : <Image src={angleRight} alt="Right Icon" />}
                <h3 className="text-[18px] max-md:text-[15px] font-normal cursor-pointer font-jetBrain text-blue" onClick={() => toggleClick(index)}>
                  {currentE.question}
                </h3>
              </div>
              <ToggleButton className="flex items-end justify-end" />
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <p className={isOpen ? 'text-[15px] max-md:text-[13px] font-normal leading-normal pb-2 pl-8 max-h-min font-jetBrain' : 'max-h-0 overflow-hidden'}>{parse(currentE.answer, { replace: replaceAnchorTagsWithLinks })}</p>
            </Transition>
          </div>
        );
      })}
    </>
  );
};

export default CookiesAccordion;
