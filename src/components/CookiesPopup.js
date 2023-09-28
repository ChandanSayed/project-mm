'use client';

import { useState } from 'react';
import cookies from '../../public/icons/cookies.png';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const CookiesPopup = () => {
  const { showCookies, setShowCookies } = useAppContext();
  const [showModal, setShowModal] = useState(true);

  function handleCookiesPopup() {
    setShowCookies(true);
  }

  return (
    <>
      {showModal ? (
        <>
          <div className=" overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-[440px]  absolute right-2 bottom-0 my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-5 border-slate-200 rounded-t gap-5">
                  <Image src={cookies} alt="" className="w-[80px] relative bottom-12 " />
                  <h3 className="text-[26px] text-blue  font-bold">We use cookies!</h3>
                  <button className="p-1 bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z" fill="#363C4F" />
                      </svg>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div>
                  <p className="text-[15px] font-jetBrain leading-[23px] font-normal text-justify px-8">
                    Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.{' '}
                    <u className="cursor-pointer" onClick={handleCookiesPopup}>
                      Let me choose
                    </u>
                    .
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6  border-slate-200 rounded-b">
                  <button className="bg-blue font-jetBrain text-[15px] w-[180px] h-[46px] rounded-md text-white ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Accept All
                  </button>
                  <button className="bg-lightGrey font-jetBrain text-[15px] w-[180px] h-[46px] rounded-md text-dark ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Reject All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CookiesPopup;
