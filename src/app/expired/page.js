import React from 'react'
import error from '../../../public/icons/error-404.png'
import ReturnToHomepage from '@/components/ReturnToHomepage'
import SiteLogo from '@/components/SiteLogo'
import Image from 'next/image'
const page = () => {
  return (
    <div>
        <header className="bg-white  p-[35px] md:px-[60px] md:py-[17px] border-t-[5px] border-blue">
      <nav className="flex items-center justify-center w-full max-w-[1440px] mx-auto">
        <SiteLogo/>
      </nav>
    </header>
        <div className='bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] '>
            <div className='flex justify-center flex-col items-center h-[100vh]'>
                <div className='max-w-[500px] h-[550px] max-lg:w-[100%] md:w-[100%] rounded-full opacity-[0.2]  bg-blue bg-gradient-to-b from-blue-10  blur-xl absolute z-10'>
                </div>
                <div
                    className=' bg-white border flex justify-center flex-col items-center max-w-[720px] max-lg:w-[100%] md:w-[100%] h-[400px] max-md:h-[370px] z-20'>
                    <Image
                        src={error}
                        className='w-[128px] h-[128px] relative bottom-14 max-lg:bottom-14 max-md:bottom-14 max-sm:bottom-12 max-md:tracking-tighter max-md:w-[100px] max-md:h-[100px] '/>
                    <div className='flex justify-center lg:gap-8 md:gap-6 flex-col items-center relative bottom-10'>
                        <h1 className='text-blue text-[26px] font-bold leading-normal text-center max-md:text-[17px] max-md:mt-[20px] max-md:px-8 '>
                        The chat session you were invited to <br/> with this link is no longer available
                        </h1>
                        <p className='text-[15px] font-jetBrain max-md:text-[13px] max-md:text-center max-md:px-7 max-md:mt-[20px] max-md:mb-[15px] '>https://messagemoment.com/5qjjc37f9sn</p>
                        <p className='text-base text-dark font-jetBrain max-md:text-[13px] max-md:text-center max-md:px-6 max-md:mb-[33px] '>Return to the homepage to generate a new chat session.</p>
                        <ReturnToHomepage/>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-darkGrey font-medium text-[13px] text-center mb-10">Copyright © 2023 MessageMoment. All rights reserved.</p>
    </div>
  )
}

export default page