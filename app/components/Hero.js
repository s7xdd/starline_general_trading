import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="">
        <div className=''>
          <Image
            width={1500}
            height={600}
            alt='Background Home'
            src="/hero.jpg"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4 sm:px-10 pt-10 sm:pt-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-orange-500">Starline General Trading LLC</h1>
          <h2 className="text-4xl sm:text-6xl md:text-6xl font-bold mt-2">#GlobalLogistics</h2>
          <p className="mt-5 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-sm sm:text-base text-center">
            We specialize in handling various aspects of logistics, including transportation, warehousing, inventory management, and distribution.
          </p>
          <button className="bg-orange-500 font-bold text-white px-6 sm:px-8 py-3 sm:py-4 mt-6 rounded-full hover:bg-orange-600 transition duration-300">
            Contact us
          </button>
        </div>
      </div>
  )
}

export default Hero