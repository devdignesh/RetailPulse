import React from "react";

const SidebarMenuItem = ({ active, icon: Icon, title }) => {
  return (
    <>
      <li className="my-2 xl:px-4 sm:h-12 xl:h-11 h-10 px-4 sm:px-0 ">
        <a
          href="#"
          className={`flex items-center py-2 h-full text-gray-900 duration-300 hover:bg-zinc-600/40 rounded-lg group ${active ?  "xl:bg-[#7095fb] sm:bg-transparent bg-[#7095fb]" : ' '}`}
        >
           {active && (
            <div className="h-full w-1 bg-[#7095fb] rounded-md hidden md:block lg:block xl:hidden sm:block"></div>
           )}
          
          <div className="flex flex-row justify-center items-center px-4">
            <span className={`text-white sm:ml-1 xl:ml-0 ${active ? 'sm:text-[#7095fb] xl:text-white' :''}`}>
              <Icon size={24} />
            </span>
            <span className="ms-3 text-white capitalize font-semibold sm:hidden md:hidden xl:block">
              {title}
            </span>
          </div>
        </a>
      </li>
    </>
  );
};

export default SidebarMenuItem;
