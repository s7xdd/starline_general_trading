'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Quote() {
    const router = useRouter()
  return (
    <div className='py-11 text-center bg-gradient-to-r from-gray-100 to-gray-200'>
  <div className='max-w-screen-md mx-auto'>
    <h3 className='font-bold text-2xl sm:text-3xl text-gray-800 mb-4'>
      Looking for help or any information about our services?
    </h3>
    <p className='mt-3 text-gray-600'>
      We'll be happy to discuss your needs! Send an email, call, or fill out our Inquiry form.
    </p>
  </div>
  <div className='flex justify-center mt-5'>
    <button onClick={() => router.push('/contact')} className='w-[200px] px-10 py-5 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105'>
      Contact us
    </button>
  </div>
</div>


  )
}

export default Quote