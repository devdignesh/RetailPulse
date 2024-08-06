import React from "react";
import SidebarMenuItem from "./widgets/sidebar-menu-item"; 
import { IoMdLogOut } from "react-icons/io";  
import { HiMiniHome } from "react-icons/hi2";
import { TbChartBar, TbReportAnalytics } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

const Sidebar = () => {

  const sidebarItems = [
    { id: 1, active: true, icon: HiMiniHome, title: "Dashboard" },
    { id: 2, active: false, icon: TbChartBar, title: "Analytics" },
    { id: 3, active: false, icon: TbReportAnalytics, title: "Reports" },
    { id: 4, active: false, icon: IoWalletOutline, title: "Wallet" },
    { id: 5, active: false, icon: RiShoppingBag4Line, title: "Cart" },
  ];


  return (
    <>
      <aside
        id="logo-sidebar"
        class="fixed top-0 bg-[#202028] left-0 z-40 w-72 sm:w-[75px] md:w-[75px] xl:w-72  h-screen transition-transform -translate-x-full sm:translate-x-0 custom-scrollbar"
        aria-label="Sidebar"
      >
        <div class="h-full  py-5 overflow-y-auto">
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <a href="#" class="flex px-4 mx-2 items-center mb-5 "> 
                <svg
                  class="flex-shrink-0 mr-4 w-6 h-6 sm:h-8 sm:w-8 text-[#7591fa] transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span class="self-center sm:text-2xl text-xl font-semibold whitespace-nowrap sm:hidden md:hidden xl:block text-white">
                RetailPulse
                </span>
              </a>
              <ul class="sm:mt-6 md:mt-6 xl:mt-8  font-medium ">
                {sidebarItems.map((item) => (
                  <SidebarMenuItem
                    key={item.id}
                    active={item.active}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
                 
              </ul>
            </div>
            <div>
              <a
                href="#"
                className={`flex items-center xl:mx-4 mx-4 sm:mx-0 py-2 px-3 sm:pl-3 text-gray-900  hover:bg-zinc-600/40 duration-300 rounded-lg group
                }`}
              >
                <span className="text-white ml-0 sm:ml-2 xl:ml-0">
                  <IoMdLogOut size={22} />
                </span>
                <span className="ms-3 text-white capitalize font-semibold sm:hidden md:hidden xl:block">
                  LogOut
                </span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
