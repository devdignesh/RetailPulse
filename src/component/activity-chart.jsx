import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const ActivityChart = () => {
  const days = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
    

  const amounts = [
     2000,6000,5000,3000,6000,4000,8000,5000,2000,6000,8000,14000,12000,4000,8000,
     2000,6000,5000,3000,6000,4000,8000,5000,2000,6000,8000,15000,11000,10000,8000,
  ];

  return (
    <>
      <div className="w-full lg:flex-1 lg:max-w-[1100px] px-2 mb-6 lg:mb-0">
        <div className="relative overflow-x-auto bg-[#202028] p-5 rounded-md">
          <span className="text-white text-xl sm:text-[22px] font-bold">
            Activity
          </span>
          <div className="w-full text-left rtl:text-right mt-2 overflow-y-auto custom-scrollbar">
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: days,
                  scaleType: "band", 
                },
              ]}
              series={[
                {
                  data: amounts,
                  color: "#7095fb",
                },
              ]}
              borderRadius={30}
              
              height={250}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityChart;
