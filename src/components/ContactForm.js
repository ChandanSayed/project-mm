import Image from 'next/image';
import React from 'react';
import icon from '../../public/icons/email.png'
import CaptchaComponent from '@/components/CaptchaComponent';
const ContactForm = () => {
    return (
        <div className="bg-gradient-to-b from-blue to-blue-0">
          <div className='flex items-center flex-col'>
            <Image className='mt-14' src={icon} style={{width: "128px", height: "128px"}}/>
            <h1 className='text-6xl text-dark mt-8 mb-7'>Contact Us</h1>
            <p>Need answers or help? We might have answered your question in our <a href='#'>FAQs</a>. </p>
<p className='mb-8'>Otherwise complete this form on the topic relevant to your query.</p>
          </div>
            <div className=' flex items-center flex-col'>
            <form class="p-20 border rounded w-[1096px] border-lightGrey bg-white">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block tracking-wide text-base font-bold mb-2"
                            for="grid-first-name">
                            First Name *
                        </label>
                        <input
                            class="appearance-none block w-full   border  border-lightGray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            required
                            placeholder="Enter your first name"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block tracking-wide   text-base font-bold mb-2"
                            for="grid-last-name"
                            >
                              
                            Last Name *
                        </label>
                        <input
                            class="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 required"
                            id="grid-last-name"
                            type="text"
                            required
                            placeholder="Enter your last name"/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block tracking-wide   text-base font-bold mb-2"
                            for="grid-password">
                            E-mail
                        </label>
                        <input
                            class="appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            id="email"
                            type="email"
                            placeholder='Enter your email address'
                            />
                    </div>
                    </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                          <label class="block tracking-wide   text-base font-bold mb-2">Select an option</label>
                         
                        <select 
                        required
                        data-te-select-init class="block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 required">
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
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block tracking-wide   text-base font-bold mb-2"
                            for="grid-password">
                            Query*
                        </label>
                        <textarea
                        required
                            class=" no-resize appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                            id="message"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                <div class="">
                  <CaptchaComponent/>
                </div>
                    <div class="">
                        <button
                            class="bg-lightGrey shadow w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                            Send
                        </button>
                    </div>
                    
                </div>
            </form>
            </div>
        </div>
    );
};

export default ContactForm;
