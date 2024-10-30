import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const EcommerceServices = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Ecommerce Services</h2>
        <p className="text-lg text-gray-600 mb-16">
          At Starline General Trading LLC, we provide a comprehensive range of ecommerce services to ensure your business runs smoothly and efficiently.
        </p>
      </div>
      <ul className="space-y-6 text-left text-gray-800">
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Warehousing & Distribution: We optimize supply chain procedures including distribution and warehousing to ensure timely deliveries.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Storage Solutions: Our global facilities accommodate various sizes and types of goods for secure storage.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Global Compliance: Adherence to international regulations and government policies is assured for seamless shipping.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Customer Support: Our team provides 24/7 assistance to manage inquiries and resolve issues promptly.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Ecommerce Custom Services: We offer tailored e-commerce logistic services to improve supply chain procedures.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Pick & Pack: Efficient and accurate pick & pack solutions tailored for all order types.
          </span>
        </li>
        <li className="text-xl font-semibold mb-2 flex items-center">
          <FaArrowRight className="text-blue-500 mr-2" />
          <span className="font-semibold">
            Returns Management: Streamlined processes for handling returns and exchanges to maintain customer satisfaction.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default EcommerceServices;
