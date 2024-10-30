import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

function Topbar() {
  return (
    <div className="bg-blue-800 text-white">
      <div className=" flex justify-center p-2 mr-6 text-[13px] md:text-[15px]">
        <div className="flex items-center gap-2">
          <FaRegClock />
          <span className="container-all">
            Mon - Fri : 9:00 AM - 5:00 PM
          </span>
          <span className="ml-3">|</span>
        </div>
        <div className="flex items-center ml-5 gap-2">
          <IoMailOpen />
          <span>starlinegeneraltrading@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
