import Link from 'next/link'
import React from 'react'

const ReturnToHomepage = () => {
  return (
    <div>
        <Link href="/">
                            <button
                                className={`bg-blue shadow w-[236px] h-[46px] focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-md font-jetBrain text-[15px]`} type="button"
                                >
                                Return to Homepage
                            </button>
        </Link>
    </div>
  )
}

export default ReturnToHomepage