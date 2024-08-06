import React from "react";

import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const NetProfit = () => {
  return (
    <>
      <div className="w-full lg:w-[calc(100%-1100px)] lg:min-w-[300px] p-2 lg:pl-4">
        <div className="w-full bg-[#202028] flex flex-col h-full p-4 rounded-md">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <span className="text-white text-sm">Net Profit</span>
              <span className="text-white text-3xl lg:text-xl xl:text-2xl  2xl:text-3xl mt-4 font-bold">
                $ 5402.38
              </span>
              <span className="text-emerald-400 flex items-center mt-2 font-semibold text-sm gap-x-1">
                <FaCaretUp size={16} />
                4%
              </span>
            </div>
            <div>
              {/* ----------- */}
              <div className="relative flex flex-col justify-center items-center w-[120px] h-[120px]">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="relative w-[100px] h-[100px] rounded-full bg-[#263460] flex items-center justify-center">
                    <div
                      className="absolute w-[100px] h-[100px] rounded-full"
                      style={{
                        background:
                          "conic-gradient(#7095fb 0% 70%, #263460 70% 100%)",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div className="absolute w-[80px] h-[80px] bg-[#202028] rounded-full"></div>
                    <div className="absolute flex flex-col justify-center items-center">
                      <span className="text-white font-bold text-xl">70%</span>
                      <span className="text-[10px] text-zinc-400">Goal</span>
                      <span className="text-[10px] text-zinc-400">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ----------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetProfit;
