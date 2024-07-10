import React from "react";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

function MobileNavbar() {
  return (
    <div className=" fixed bottom-0 right-0  z-10 w-full py-1 bg-[#0B1115] text-white font-vazir sm:hidden ">
      <ul className="w-full flex items-center justify-center gap-x-4 sm:p-0 md:p-2 py-1">
        <li className="flex flex-col items-center justify-center gap-y-1 ">
          <span>
            <GoHome className="text-xl text-secoundary font-bold" />
          </span>
          <span className="text-sm md:text-base">خانه</span>
        </li>
        <li className="flex flex-col items-center justify-center gap-y-1 ">
          <span>
            <CiSearch className="text-xl text-secoundary font-bold" />
          </span>
          <span className="text-sm md:text-base">جستجو</span>
        </li>
        <li className="flex flex-col items-center justify-center gap-y-1  ">
          <span>
            <CiBookmark className="text-xl text-secoundary font-bold" />
          </span>
          <span className="flex items-center  md:text-base text-sm">
            <span>نشان</span>
            <span>شده</span>
          </span>
        </li>
        <li className="flex flex-col items-center justify-center  gap-y-1 ">
          <span>
            <VscAccount className="text-xl text-secoundary font-bold" />
          </span>
          <span className="flex items-center  md:text-base text-sm">
            <span>حساب</span>
            <span>کاربری</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
