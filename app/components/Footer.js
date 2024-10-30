import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import Link from 'next/link';

function Footer() {

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/starline-new.png"
            alt="Starline Logo"
            width={250}
            height={150}
            className="mb-4"
          />
          <p className="text-white text-center md:text-left">
             
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-200 text-center md:text-left ml-2">
            <li className="mb-2 hover:text-red-500"><Link href="/">Home</Link></li>
            <li className="mb-2 hover:text-red-500"><Link href="/about">About us</Link></li>
            <li className="mb-2 hover:text-red-500"><Link href="/contact">Contact</Link></li>
            <li className="mb-2 hover:text-red-500"><Link href="/services/ecommerce">Services</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-center md:text-left">
            <li className="mb-4 flex items-center justify-center md:justify-start">
            <IoIosMail color='white' size={23} />
              <a href='mailto:starlinegeneraltrading@gmail.com' className="ml-2 text-white hover:text-red-500">starlinegeneraltrading@gmail.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start ">
              <FaPhoneAlt color='white'/>
              <a href='tel:00971503437726' className="ml-2 text-white hover:text-red-500">+971 50 3437726</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Locate us</h3>
          <ul className="text-gray-400 text-center md:text-left">
            <li className="mb-4 flex items-center justify-center md:justify-start">
            <MdLocationOn color='white' size={40}/>
              <a className="ml-2 text-white hover:text-red-500">Starline General Trading LLC, Deira, Dubai, UAE</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-950 text-white text-center py-4 font-semibold">
        <p>2024 © All rights reserved - Starline General Trading LLC</p>
      </div>
    </footer>
  );
}

export default Footer;
