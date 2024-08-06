import React from "react";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import RecentOrders from "../component/recent-orders";
import CustomersFeedback from "../component/customers-feedback";
import NetProfit from "../component/net-profit";
import QuickLinks from "../component/quick-links";
import ActivityChart from "../component/activity-chart";
import StatisticsCards from "../component/statistics-cards";


const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div class="xl:ml-72 sm:ml-[75px] bg-[#141416]">
        <div className="bg-[#141416] min-h-screen max-w-full pb-10">
          <div className="max-w-full flex flex-row min-h-screen m-auto">
            <div className="flex flex-col w-full">
              <Header />
              <span className="text-white font-bold text-2xl my-3 sm:my-6 flex mx-6">
                Dashboard
              </span>
              <div className="w-full flex flex-wrap px-4">
                <StatisticsCards />
                <NetProfit />
              </div>

              <div className="px-4 mt-5">
                <div className="flex flex-wrap">
                  <ActivityChart />
                  <QuickLinks />
                </div>
              </div>

              <div className="px-4 mt-7">
                <div className="flex flex-wrap">
                  <RecentOrders />
                  <CustomersFeedback />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
