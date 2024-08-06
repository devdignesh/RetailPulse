import React from "react";

import StatisticsCard from "./widgets/statistics-card";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";

const StatisticsCards = () => {
  return (
    <>
      <div className="w-full lg:flex-1 lg:max-w-[1100px]">
        <div className="flex flex-wrap justify-between">
          <StatisticsCard
            icon={FaShoppingBasket}
            title="Total Orders"
            value="86"
            up={true}
            bg="bg-blue-700/40"
            iconColor="text-blue-500"
          />
          <StatisticsCard
            icon={BsFillBagFill}
            title="Total Delivered"
            value="74"
            up={false}
            bg="bg-emerald-700/40"
            iconColor="text-emerald-500"
          />
          <StatisticsCard
            icon={BsFillBagFill}
            title="Total Cancelled"
            value="12"
            up={true}
            bg="bg-red-700/40"
            iconColor="text-red-500"
          />
          <StatisticsCard
            icon={BiSolidDollarCircle}
            title="Total Revenue"
            value="$12000"
            up={true}
            bg="bg-pink-700/40"
            iconColor="text-pink-500"
          />
        </div>
      </div>
    </>
  );
};

export default StatisticsCards;
