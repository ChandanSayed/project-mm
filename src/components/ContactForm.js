import Image from 'next/image';
import React from 'react';
import icon from '../../public/icons/email.png';
import Script from 'next/script';

const ContactForm = () => {
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-10% to-white to-90% px-[15px] ">
        <div className="flex items-center flex-col">
          <Image className="mt-14" src={icon} style={{ width: '128px', height: '128px' }} alt="email" />
          <h2 className="text-4xl text-dark mt-[30px] font-bold mb-7">Contact Us</h2>
          <p className="text-[17px]">
            Need answers or help? We might have answered your question in our{' '}
            <a href="#" className="text-blue">
              FAQs
            </a>
            .{' '}
          </p>
          <p className="mb-[30px] text-[17px]">Otherwise complete this form on the topic relevant to your query.</p>
        </div>

        <form className="border rounded max-w-[1096px] pt-[50px] pb-[39px] px-4 md:px-28 mx-auto border-black border-opacity-10 bg-white flex flex-col gap-5 w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="grid-first-name">
                First Name *
              </label>
              <input className="appearance-none block w-full   border border-black border-opacity-10 text-[15px] h-[60px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" required placeholder="Enter your first name" />
            </div>
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="grid-last-name">
                Last Name *
              </label>
              <input className="appearance-none block w-full   border border-black border-opacity-10 text-[15px] h-[60px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 required" id="grid-last-name" type="text" required placeholder="Enter your last name" />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="grid-password">
                Email Address *
              </label>
              <input className="appearance-none block w-full   border border-black border-opacity-10 text-[15px] h-[60px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" type="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label className="block text-[17px] font-medium mb-[10px]">Select a topic *</label>

              <select required data-te-select-init className="block w-full   border border-black border-opacity-10 h-[60px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 required">
                <option value="select">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="grid-password">
                Query *
              </label>
              <textarea required className=" no-resize appearance-none block w-full   border border-black border-opacity-10 text-[15px] h-[200px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white resize-none" id="message"></textarea>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <div className="cf-turnstile" data-sitekey="0x4AAAAAAAKTDe6f-KqwG_iW" data-theme="light" data-callback="javascriptCallback"></div>
            </div>
            <div className="">
              <button disabled className={`bg-lightGrey shadow w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md`} type="button">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
