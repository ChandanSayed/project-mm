'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CloudflareTurnstile from './CloudflareTurnstile';
import icon from '/public/icons/email.png';
import DownArrow from '/public/images/down-arrow.png';

const ContactForm = () => {
  const [userInputs, setUserInputs] = useState({
    fName: '',
    lName: '',
    email: '',
    option: '',
    message: ''
  });

  const [userValidation, setUserValidation] = useState({
    fName: false,
    lName: false,
    email: false,
    option: false,
    message: false
  });

  const [character, setCharacter] = useState(1500);
  const [activeBtn, setActiveBtn] = useState(false);
  const [validate, setValidate] = useState(false);

  const { fName, lName, email, option, message } = userInputs;
  let valid;

  function checkValidate(e) {
    if (e.target.name === 'email') {
      valid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value);
      setValidate(valid);
      console.log(valid, validate);
      if (valid) {
        setUserValidation(prev => ({ ...prev, [e.target.name]: false }));
        return;
      } else {
        setUserValidation(prev => ({ ...prev, [e.target.name]: true }));
        return;
      }
    }

    let val = e.target.value;
    if (val.trim()) {
      setUserValidation(prev => ({ ...prev, [e.target.name]: false }));
      return;
    }
    return setUserValidation(prev => ({ ...prev, [e.target.name]: true }));
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
      valid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value);
      setValidate(valid);
    }
    setUserInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function handleTextCount() {
    const remainingCount = 1500 - userInputs.message.length;
    setCharacter(remainingCount);
  }

  useEffect(() => {
    if (fName.trim() && lName.trim() && email.trim() && option.trim() && message.trim() && validate) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [fName, lName, email, option, message]);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] ">
        <div className="flex items-center flex-col">
          <Image src={icon} className="mt-[50px] w-[80px] h-[80px] lg:w-[128px] lg:h-[128px]" alt="email" />
          <h2 className="text-4xl text-dark mt-[30px] font-bold mb-7">Contact Us</h2>
          <p className="text-[17px] text-center text-dark">
            Need answers or help? We might have answered your question in our{' '}
            <Link href="/faqs" className="text-blue">
              FAQs
            </Link>
            .{' '}
          </p>
          <p className="mb-[30px] text-[17px] text-center mt-2 text-dark">Otherwise complete this form on the topic relevant to your query.</p>
        </div>

        <form className="border rounded-[10px] max-w-[1096px] pt-[50px] pb-[39px] px-5 sm:px-12 lg:px-28 mx-auto border-black border-opacity-10 bg-white flex flex-col gap-[15px] lg:gap-5 w-full" onSubmit={handleForm}>
          <div className="flex flex-wrap md:flex-nowrap gap-[15px] md:gap-5">
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="firstName">
                First Name*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md ${userValidation.fName ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="firstName" type="text" name="fName" required placeholder="Enter your first name" autoComplete="off" aria-autocomplete="off" onChange={handleChange} onBlur={checkValidate} />
            </div>
            <div className="w-full">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="lastName">
                Last Name*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md required ${userValidation.lName ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} name="lName" id="lastName" type="text" required placeholder="Enter your last name" onChange={handleChange} onBlur={checkValidate} />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label className="block text-[17px] font-medium mb-[10px]" htmlFor="email">
                Email Address*
              </label>
              <input className={`bg-white appearance-none block w-full font-jetBrain border  text-[15px] h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md ${userValidation.email ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="email" type="email" placeholder="Enter your email address" name="email" required onChange={handleChange} onBlur={checkValidate} />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <label htmlFor="option" className="block text-[17px] font-medium mb-[10px]">
                Select a topic*
              </label>
              <div className="relative">
                <select className={`block w-full font-jetBrain border appearance-none h-[46px] lg:h-[60px] rounded-md py-3 px-4 leading-tight text-[15px] focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md required text-dark bg-white ${userInputs.option ? '' : 'text-opacity-30'} ${userValidation.option ? 'text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none vvs:text-opacity-100' : 'border-black border-opacity-10 text-dark'}`} name="option" onChange={handleChange} onBlur={checkValidate} required id="option">
                  <option defaultChecked className="text-dark text-opacity-30 text-[15px]" value="">
                    Select
                  </option>
                  <option value="1" className="text-[15px]">
                    One
                  </option>
                  <option value="2" className="text-[15px]">
                    Two
                  </option>
                  <option value="3" className="text-[15px]">
                    Three
                  </option>
                  <option value="4" className="text-[15px]">
                    Four
                  </option>
                  <option value="5" className="text-[15px]">
                    Five
                  </option>
                  <option value="6" className="text-[15px]">
                    Six
                  </option>
                  <option value="7" className="text-[15px]">
                    Seven
                  </option>
                  <option value="8" className="text-[15px]">
                    Eight
                  </option>
                </select>
                <Image src={DownArrow} alt="Down Arrow" className="absolute  top-[21px] lg:top-7 right-[22px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full ">
              <div className="flex justify-between items-center">
                <label className="block text-[17px] font-medium mb-[10px]" htmlFor="message">
                  Query*
                </label>
                <span className={`font-jetBrain text-[13px] font-medium ${character === 0 ? 'text-errorColor' : 'text-dark text-opacity-30'}`}>{character.toLocaleString()} characters left</span>
              </div>
              <textarea maxLength={`1500`} placeholder="Enter your query here" className={`font-jetBrain no-resize appearance-none block w-full border text-[15px] h-[250px] lg:h-[200px] rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border focus:rounded-md resize-none bg-white ${userValidation.message ? 'placeholder:text-errorColor border-b-2 border-b-errorColor rounded-es-none rounded-ee-none' : 'border-black border-opacity-10 text-dark placeholder:text-dark placeholder:text-opacity-30'}`} id="message" required name="message" onChange={handleChange} onKeyUp={handleTextCount} onBlur={checkValidate}></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between">
            <CloudflareTurnstile />
            <div className="w-full lg:w-auto">
              <button disabled={!activeBtn} className={`shadow lg:w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold font-jetBrain text-[15px] py-2 px-4 rounded-md w-full ${activeBtn ? 'bg-blue' : 'bg-lightGrey'}`} type="button">
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
