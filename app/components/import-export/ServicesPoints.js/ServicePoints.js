import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ImportExportServices = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Import and Export Services</h2>
        <p className="text-lg text-gray-600 mb-16">
          At Starline General Trading LLC, we provide a comprehensive range of import and export services to ensure your business runs smoothly and efficiently.
        </p>
      </div>
      <ul className="space-y-6 text-left text-gray-800">
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Warehousing & Distribution: We always work to maximize the supply chain procedures including distribution and warehousing.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Storage & Distribution: We have facilities across different parts of the world to accommodate different sizes and shapes of goods.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Government & Global Compliance: We ensure full adherence to international regulations and government policies.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Customer Support: 24/7 assistance to manage inquiries and complaints.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ImportExportServices;
