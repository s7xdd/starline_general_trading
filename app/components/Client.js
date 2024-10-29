import React from 'react';
import Image from 'next/image';

function Client() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center flex-grow mb-6 md:mb-0">
            <h3 className="text-red-600 text-2xl font-semibold">Clients & Partners</h3>
          </div>
          </div>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8 mt-10">
          <div className="flex justify-center items-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/emirates.png"
              alt="Logo 1"
              width={140}
              height={25}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/logos/adipec.png"
              alt="Logo 2"
              width={150}
              height={25}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/damat.png"
              alt="Logo 3"
              width={130}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/airproducts.png"
              alt="Logo 4"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/energy.png"
              alt="Logo 4"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/dmg.png"
              alt="Logo 4"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logos/emdad.png"
              alt="Logo 4"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
