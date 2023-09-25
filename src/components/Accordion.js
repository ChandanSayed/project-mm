import { Transition } from '@headlessui/react';
import { useState } from 'react';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

import angleRight from '/public/icons/angle-right.png';
import angleRightActive from '/public/icons/angle-right-active.png';
import angleDownActive from '/public/icons/angle-down-active.png';

function Accordion({ items, setAccordions, accordions }) {
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

  function handleMouseEnter(id, index) {
    const newAccordion = accordions[0].listItem.find(item => item.id === id);
    newAccordion.hover = true;
    const newAccordions = [...accordions];
    newAccordions[0].listItem[index] = newAccordion;
    setAccordions(newAccordions);
  }

  function handleMouseLeave(id, index) {
    const newAccordion = accordions[0].listItem.find(item => item.id === id);
    newAccordion.hover = false;
    const newAccordions = [...accordions];
    newAccordions[0].listItem[index] = newAccordion;
    setAccordions(newAccordions);
  }

  return (
    <>
      {items.map((currentE, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div className="accordion-item border-b border-b-black border-opacity-10 py-[15px] last-of-type:border-none" key={index}>
            <div className="flex items-start lg:items-center">
              {isOpen ? <Image className="mt-2 lg:mt-1 w-[10px]" src={angleDownActive} alt="Right Icon Active" /> : <Image className="mt-2 lg:mt-1 w-[6px]" src={currentE.hover ? angleRightActive : angleRight} alt="Right Icon" />}
              <h3 className={`lg:text-[18px] text-[15px] font-medium cursor-pointer font-jetBrain ml-2 hover:text-blue ${isOpen ? 'text-blue' : 'text-dark'}`} onClick={() => toggleClick(index)} onMouseLeave={() => handleMouseLeave(currentE.id, index)} onMouseEnter={() => handleMouseEnter(currentE.id, index)}>
                {currentE.question}
              </h3>
            </div>
            <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <p className={isOpen ? 'text-[13px] lg:text-[15px] font-normal leading-normal pt-[15px] lg:pb-[9px] pl-5 max-h-min font-jetBrain' : 'max-h-0 overflow-hidden'}>{parse(currentE.answer, { replace: replaceAnchorTagsWithLinks })}</p>
            </Transition>
          </div>
        );
      })}
    </>
  );
}

export default Accordion;
