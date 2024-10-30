import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProcurementServices = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Procurement and Outsourcing Services</h2>
        <p className="text-lg text-gray-600 mb-16 font-semibold">
        At Starline General Trading LLC, we offer a wide array of procurement solutions designed to keep your business operations seamless and efficient.
        </p>
      </div>
      <ul className="space-y-6 text-left text-gray-800">
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Invoice to Pay: We combine procurement and accounts payable to ensure improvement and use analytics.</span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Source to Pay Analytics: Starline encompasses advanced analytics to identify viable opportunities.</span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Government & Global Compliance: We ensure full adherence to international regulations and government policies</span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Customer Support: 24/7 assistance to manage inquiries and complaints.</span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Source to Contract: Starline leverages industry prowess and wealth of insight.</span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">Purchase to Receive: We improve the purchase to receive function to ensure accessibility.</span>
        </li>
      </ul>
    </div>
  );
};

export default ProcurementServices;
