import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

function Topbar() {
  return (
    <div className="bg-blue-800 text-white">
      <div className=" flex justify-end p-2 mr-6">
        <div className="flex items-center gap-2">
          <FaRegClock />
          <span className="container-all">
            Sat - Thu : 9:00 am - 5:00 pm |{" "}
          </span>
        </div>
        <div className="flex items-center ml-2 gap-2">
          <IoMailOpen />
          <span>starlinegeneraltrading@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
