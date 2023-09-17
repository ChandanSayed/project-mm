import React from 'react'
import error from '../../../public/icons/error-404.png'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/images/logo.png'
const NotFound = () => {
    return (
       <>
        <header className="bg-white  p-[35px] md:px-[60px] md:py-[17px] border-t-[5px] border-blue">
      <nav className="flex items-center justify-center w-full max-w-[1440px] mx-auto">
        <Link href={`/`}>
          <Image className="w-full max-w-[196px]" src={Logo} alt="Logo" />
        </Link>
      </nav>
    </header>
        <div className='bg-gradient-to-b from-blue-10 from-0% via-blue-0 via-60% to-white to-90% px-[15px] '>
            <div className=' flex justify-center flex-col items-center h-[100vh] '>
                <div
                    className=' bg-white border flex justify-center flex-col items-center w-[900px] h-[430px]'>
                    <Image
                        src={error}
                        style={{
                        width: "128px",
                        height: "128px",
                        position: "relative",
                        bottom: '40px'
                    }}/>
                    <div className='flex justify-center flex-col items-center relative bottom-10'>
                        <h1 className='text-blue text-[150px] font-bold leading-none'>
                            404
                        </h1>
                        <h3 className='text-blue text-xl'>The page you’re looking for doesn't exist</h3>
                        <p className='text-base text-dark my-8 font-jetBrain'>Don’t panic, just click the big button below and return home.</p>
                        <Link href="/">
                            <button
                                className={`bg-blue shadow w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md`} type="button"
                                >
                                Return to Homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-darkGrey font-medium text-[13px] text-center mb-10">Copyright © 2023 MessageMoment. All rights reserved.</p>
       </>
    )
}

export default NotFound