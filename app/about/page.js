import Image from 'next/image';
import React from 'react';
import CompanyHistory from '../components/Companyhistory';

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Starline General Trading
          </h2>
          <p className="mt-4 text-gray-600">
            At Starline General Trading LLC, our mission is to provide top-notch logistics solutions tailored to our clients&apos; unique needs. From transportation and warehousing to inventory management and distribution, we ensure smooth and efficient operations.
          </p>
          <p className="mt-4 text-gray-600">
            With years of experience in the industry, our team is dedicated to offering reliable and innovative services. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing logistics landscape.
          </p>
          {/* <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button> */}
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <Image
            src="./about.jpg"
            alt="About Starline"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <CompanyHistory/>
    </div>
  );
}
