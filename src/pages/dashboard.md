import React from "react";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import StatisticsCard from "../component/widgets/statistics-card";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-[#141416] min-h-screen max-w-full">
      <div className="max-w-full flex flex-row min-h-screen m-auto">
        <div className="xl:min-w-72 lg:min-w-64 sm:min-w-20 min-w-10 bg-[#202028] transition-all duration-300">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <span className="text-white font-bold text-2xl my-6 flex mx-6">
            Dashboard
          </span>
          <div className="w-full flex flex-wrap px-4">
            <div className="w-full max-w-[1100px]">
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
                  value="12000"
                  up={true}
                  bg="bg-pink-700/40"
                  iconColor="text-pink-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/4 p-2">
              <div className="w-full bg-[#202028] flex flex-col h-full p-4 rounded-md">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-white text-sm">Net Profit</span>
                    <span className="text-white text-4xl mt-4 font-bold">
                      $ 5402.38
                    </span>
                    <span className="text-emerald-400 flex items-center mt-2 font-semibold text-sm gap-x-1">
                      <FaCaretUp size={16} />
                      4%
                    </span>
                  </div>
                  <div>
                    <span className="text-white font-bold text-xl">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
