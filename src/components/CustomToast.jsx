import React, { useEffect } from 'react'
import { CiCircleCheck } from 'react-icons/ci'


function CustomToast({ message, show }) {
  return (
    <div className={`text-white text-xs bg-grey900 p-5 sm:p-2.5 mt-5 absolute top-0 sm:top-0 rounded shadow-md mx-5 sm:w-80 sm:mx-36 animate-bounce ${show ? 'slide-in' : 'hidden'}`}>
      <div className='flex flex-col'>
        <p className='flex mb-1 text-xs'><CiCircleCheck className='text-base mr-1' />Message Sent!</p>
        <p className='mt-1 text-grey500'>Thanks for completing this form. We&apos;ll contact you soon!</p>
      </div>
    </div>
  )
}

export default CustomToast