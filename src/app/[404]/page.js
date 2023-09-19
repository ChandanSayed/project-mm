import React from 'react'
import error from '../../../public/icons/error-404.png'
import Image from 'next/image'
import SiteLogo from '@/components/SiteLogo'
import ReturnToHomepage from '@/components/ReturnToHomepage'
const NotFound = () => {
    return (
       <>
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
                    className=' bg-white border flex justify-center flex-col items-center max-w-[900px] max-lg:w-[100%] md:w-[100%] h-[430px] max-md:h-[370px] z-20'>
                    <Image
                        src={error}
                        className='w-[128px] h-[128px] relative bottom-12 max-lg:bottom-12 max-md:bottom-14 max-sm:bottom-10 max-md:tracking-tighter max-md:w-[100px] max-md:h-[100px] '/>
                    <div className='flex justify-center flex-col items-center relative bottom-10'>
                        <h1 className='text-blue text-[150px] font-bold leading-none max-md:text-[80px] tracking-[-2px]'>
                            404
                        </h1>
                        <h3 className='text-blue text-xl max-md:text-[17px] max-md:text-center max-md:px-8 md:mt-[10px]'>The page you’re looking for doesn't exist</h3>
                        <p className='text-base text-dark my-[30px] font-jetBrain max-md:text-[13px] max-md:text-center max-md:px-4 max-md:mt-[20px]'>Don’t panic, just click the big button below and return home.</p>
                        <ReturnToHomepage/>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-darkGrey font-medium text-[13px] text-center mb-10">Copyright © 2023 MessageMoment. All rights reserved.</p>
       </>
    )
}

export default NotFound