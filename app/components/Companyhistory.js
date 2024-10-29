import React from 'react';

export default function CompanyHistory() {
  return (
    <div className="bg-gray-100 mt-12 rounded-md shadow-md py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          Our History
        </h2>
        <div className="relative">
          <div className="border-l-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            <div className="flex items-center justify-start w-full">
              <div className="w-1/2 flex justify-end">
                <div className="bg-white p-4 rounded-md shadow-md w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">1990 - Founded</h3>
                  <p className="text-gray-600 mt-2">
                    Starline General Trading LLC was founded with the vision of revolutionizing logistics and trading services. Our journey started with a small team dedicated to delivering exceptional services to our clients.
                  </p>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center border-4 border-white"></div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex items-center justify-end w-full">
              <div className="w-1/2"></div>
              <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center border-4 border-white"></div>
              <div className="w-1/2 flex justify-start">
                <div className="bg-white p-4 rounded-md shadow-md w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">2000 - Expansion</h3>
                  <p className="text-gray-600 mt-2">
                    With a decade of success, we expanded our operations to include international logistics, ensuring that our services met the growing demands of a global market.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-full">
              <div className="w-1/2 flex justify-end">
                <div className="bg-white p-4 rounded-md shadow-md w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">2010 - Innovation</h3>
                  <p className="text-gray-600 mt-2">
                    Embracing new technologies, we introduced advanced inventory management systems and cutting-edge transportation solutions, positioning Starline as a leader in innovation.
                  </p>
                </div>
              </div>
              <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center border-4 border-white"></div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex items-center justify-end w-full">
              <div className="w-1/2"></div>
              <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center border-4 border-white"></div>
              <div className="w-1/2 flex justify-start">
                <div className="bg-white p-4 rounded-md shadow-md w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">2020 - Present</h3>
                  <p className="text-gray-600 mt-2">
                    Today, Starline General Trading LLC continues to grow, adapting to the evolving logistics landscape and striving to provide top-notch services to our clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
