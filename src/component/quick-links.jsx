import React from "react";

import { BiTargetLock } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";
import { BiDish } from "react-icons/bi";


const QuickLinks = () => {
  return (
    <>
      <div className="w-full lg:w-[calc(100%-1100px)] lg:min-w-[300px] px-2 lg:pl-4 ">
        <div className="bg-[#202028] p-5 rounded-md ">
          <div className="lg:h-[285px] space-y-4 overflow-hidden flex flex-col justify-between">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-3">
                <span className="p-5 rounded-full bg-red-500/30 text-orange-500">
                  <BiTargetLock size={26} />
                </span>
                <span className="text-gray-300 lg:text-lg text-base font-semibold">
                  Goals
                </span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-gray-300 rounded-full bg-gray-500/60 p-2 cursor-pointer hover:bg-zinc-600/50 duration-200">
                  <FaAngleRight size={14} />
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-3">
                <span className="p-5 rounded-full bg-blue-500/30 text-blue-500">
                  <PiHamburger size={26} />
                </span>
                <span className="text-gray-300 lg:text-lg text-base font-semibold">
                  Popular Dishes
                </span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-gray-300 rounded-full bg-gray-500/60 p-2 cursor-pointer hover:bg-zinc-600/50 duration-200">
                  <FaAngleRight size={14} />
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-3">
                <span className="p-5 rounded-full bg-teal-500/30 text-teal-500">
                  <BiDish size={26} />
                </span>
                <span className="text-gray-300 lg:text-lg text-base font-semibold">
                  Menus
                </span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-gray-300 rounded-full bg-gray-500/60 p-2 cursor-pointer hover:bg-zinc-600/50 duration-200">
                  <FaAngleRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
