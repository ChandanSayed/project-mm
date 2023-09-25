import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import parse from 'html-react-parser';
import ToggleButton from './ToggleButton';

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
                {isOpen ? (
                  <svg className=" text-blue mr-4 text-lg" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.21967 5.78033C0.512563 6.07322 0.987437 6.07322 1.28033 5.78033L5.25 1.81066L9.21967 5.78033C9.51256 6.07322 9.98744 6.07322 10.2803 5.78033C10.5732 5.48744 10.5732 5.01256 10.2803 4.71967L5.78033 0.21967C5.48744 -0.0732231 5.01256 -0.0732231 4.71967 0.21967L0.21967 4.71967C-0.0732233 5.01256 -0.0732233 5.48744 0.21967 5.78033Z" fill="#292F52" />
                  </svg>
                ) : (
                  <svg className=" text-blue mr-4 text-lg" xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L5.25 4.18934L9.21967 0.21967C9.51256 -0.0732233 9.98744 -0.0732233 10.2803 0.21967C10.5732 0.512563 10.5732 0.987437 10.2803 1.28033L5.78033 5.78033C5.48744 6.07322 5.01256 6.07322 4.71967 5.78033L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="#292F52" />
                  </svg>
                )}
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
