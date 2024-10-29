import Image from 'next/image';
import React from 'react';
import { GiCargoShip } from "react-icons/gi";

function Services() {
  return (
    <div className="bg-gray-100 py-12 sm:py-20">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <div className="flex justify-center items-center mb-4">
          <h3 className="text-red-600 text-lg font-semibold">Our Services</h3>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold">We offer a variety of services</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 sm:px-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={70}
            height={100}
            alt='import'
            src="/import.png"
            className='mb-4 rounded-lg'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Import and Export</h3>
          <p className="text-gray-600 text-sm sm:text-base">We receive and process various shipments every month from both local and international market, including LCL, shipments, and full container.</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={70}
            height={100}
            alt='ecommerce'
            src="/ecommerce.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Ecommerce</h3>
          <p className="text-gray-600 text-sm sm:text-base">We offer comprehensive online solutions. Traderston optimizes product presentation & search, ecommerce consulting. We buy & sell products online at fair prices</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={70}
            height={40}
            alt='ship'
            src="/procurement.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Procurement</h3>
          <p className="text-gray-600 text-sm sm:text-base">We take pride in out distribution network, highly trustworthy in the region. Traderston delivers multiple orders in a day across the UAE and the world.</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={70}
            height={40}
            alt='ship'
            src="/shipping.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Logistics and Shipping</h3>
          <p className="text-gray-600 text-sm sm:text-base">Starline logistics and shipping services include warehouse management, ship owning, and end to end freight management.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
