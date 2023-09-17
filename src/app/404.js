import React from 'react'
import error from '../../public/icons/error-404.png'
import Image from 'next/image'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div className='background-blue-0'>
            <div className='bg-white flex justify-center flex-col items-center  '>
                <div className='border flex justify-center flex-col items-center w-[900px] '>
                    <Image src={error} style={{width: "128px", height: "128px", position: "relative", bottom: "40px"}} />
                    <h1 className='text-blue text-9xl font-bold'>
                        404
                    </h1>
                    <h3 className='text-blue text-xl'>The page you’re looking for doesn't exist</h3>
                    <p className='text-base text-lightGrey my-8'>Don’t panic, just click the big button below and return home.</p>
                    <Link href="/">
                    <button
                            class="bg-blue shadow w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-md mb-10"
                            type="button">
                            Return to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound