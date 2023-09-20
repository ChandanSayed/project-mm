'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import faqs from '../../../public/icons/faqs.png';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="flex flex-col justify-center items-center gap-[30px] pt-[50px]">
          <Image src={faqs} className="w-[128px] h-[128px] max-md:w-[80px] max-md:h-[80px]" />
          <h3 className="text-[40px] font-bold leading-normal max-md:text-[24px] px-6 text-center">How can we help you?</h3>
        </div>

        <div className="text-center mt-[49px] max-md:mt-[35px] mb-[30px]">
          <form>
            <label className="relative">
              <input className="appearance-none w-full max-w-[1096px] font-jetBrain text-dark placeholder:text-dark placeholder:text-opacity-30 border  border-opacity-10 text-[15px] h-[60px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " type="text" placeholder="Type keywords to find answers" />

              <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </label>
          </form>
        </div>
        <p className="text-[17px] font-medium leading-6 text-blue text-center px-5">You can also browse the topics below to find what you are looking for:</p>
      </div>

      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <Accordion>
          <AccordionItem header="What is Lorem Ipsum?">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AccordionItem>

          <AccordionItem header="Where does it come from?">Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.</AccordionItem>

          <AccordionItem header="Why do we use it?">Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.</AccordionItem>
        </Accordion>
      </div>

      <Accordion>
        <AccordionItem header="What is Lorem Ipsum?">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AccordionItem>

        <AccordionItem header="Where does it come from?">Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.</AccordionItem>

        <AccordionItem header="Why do we use it?">Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.</AccordionItem>
      </Accordion>
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="flex justify-center flex-col items-center h-[100vh]">
          <div className="max-w-[500px] h-[550px] max-lg:w-[100%] md:w-[100%] rounded-full opacity-[0.2]  bg-blue bg-gradient-to-b from-blue-10  blur-xl absolute z-10"></div>
          <div className=" bg-white border flex justify-center flex-col items-center max-w-[720px] max-lg:w-[100%] md:w-[100%] h-[400px] max-md:h-[370px] z-20">
            <Image src={error} className="w-[128px] h-[128px] relative bottom-14 max-lg:bottom-14 max-md:bottom-14 max-sm:bottom-12 max-md:tracking-tighter max-md:w-[100px] max-md:h-[100px] " />
            <div className="flex justify-center lg:gap-8 md:gap-6 flex-col items-center relative bottom-10">
              <h1 className="text-blue text-[26px] font-bold leading-normal text-center max-md:text-[17px] max-md:mt-[20px] max-md:px-8 ">
                The chat session you were invited to <br /> with this link is no longer available
              </h1>
              <p className="text-[15px] font-jetBrain max-md:text-[13px] max-md:text-center max-md:px-7 max-md:mt-[20px] max-md:mb-[15px] ">https://messagemoment.com/5qjjc37f9sn</p>
              <p className="text-base text-dark font-jetBrain max-md:text-[13px] max-md:text-center max-md:px-6 max-md:mb-[33px] ">Return to the homepage to generate a new chat session.</p>
              <ReturnToHomepage />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
