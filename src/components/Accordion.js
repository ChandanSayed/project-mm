import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import parse from 'html-react-parser';
import Link from 'next/link';

function Accordion({ items }) {
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
          Contact Us
        </Link>
      );
    }
  };

  return (
    <>
      {items.map((currentE, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div className="accordion-item border-b border-light-gray border-solid pb-2" key={index}>
            <div className="flex items-center pb-2 pt-2">
              {isOpen ? <IoIosArrowDown className="mr-4 text-lg text-blue" /> : <IoIosArrowForward className=" text-blue mr-4 text-lg" />}
              <h3 className="text-[18px] max-md:text-[15px] font-normal cursor-pointer font-jetBrain text-blue" onClick={() => toggleClick(index)}>
                {currentE.question}
              </h3>
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <p className={isOpen ? 'text-[15px] max-md:text-[13px] font-normal leading-normal pb-2 pl-8 max-h-min font-jetBrain' : 'max-h-0 overflow-hidden'}>{parse(currentE.answer, { replace: replaceAnchorTagsWithLinks })}</p>
            </Transition>
          </div>
        );
      })}
    </>
  );
}

export default Accordion;
