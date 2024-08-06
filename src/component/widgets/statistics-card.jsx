import React from 'react';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import classNames from "classnames";

const StatisticsCard = ({ icon: Icon, up, title, value, bg, iconColor }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4  p-2">
      <div className="w-full bg-[#202028] flex flex-col p-4 rounded-md">
        <div
          className={classNames("w-11 h-11 flex justify-center items-center rounded-lg", bg)}
        >
          <span className={classNames('', iconColor)}>
            <Icon size={21} />
          </span>
        </div>
        <span className="text-gray-200 text-sm pt-2">{title}</span>
        <div className="flex flex-row mt-2 justify-between items-center">
          <span className="xl:text-3xl md:text-2xl text-3xl text-white font-bold ">{value}</span>
          {up ? (
            <span className="text-emerald-400 flex items-center font-semibold text-sm gap-x-1">
              <FaCaretUp size={16} />
              4%
            </span>
          ) : (
            <span className="text-red-400 flex items-center font-semibold text-sm gap-x-1">
              <FaCaretDown size={16} />
              6%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
