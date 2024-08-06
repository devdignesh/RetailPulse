import React from "react";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";

const Input = ({ className }) => {
  return (
    <div
      className={classNames(
        "w-52 border ml-2 border-gray-600 h-9 rounded-md bg-[#2a2b30]",
        className
      )}
    >
      <div className="justify-center items-center flex flex-row h-full">
        <span className="text-gray-300">
          <FiSearch size={16} />
        </span>
        <input
          type="text"
          className="bg-transparent border-none focus:outline-none text-white pl-2 text-sm "
          placeholder="Search"
          style={{ outline: "none", boxShadow: "none" }}
        />
      </div>
    </div>
  );
};

export default Input;
