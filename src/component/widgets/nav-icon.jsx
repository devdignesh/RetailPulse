import React from "react";
import classNames from "classnames";

const NavIcon = ({ icon: Icon, active, className }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <a
      onClick={handleClick}
      href=""
      className={classNames(
        "bg-[#44454b] rounded-full w-9 h-9 hover:bg-zinc-700/50 duration-200 relative",
        className
      )}
    >
      <span className=" h-full text-gray-400 flex justify-center items-center text-center">
        <Icon size={20} />
      </span>
      {active ? (
        <span className="absolute top-2 right-[9px] h-2 w-2 bg-[#7b92ff] rounded-full "></span>
      ) : (
        ""
      )}
    </a>
  );
};

export default NavIcon;
