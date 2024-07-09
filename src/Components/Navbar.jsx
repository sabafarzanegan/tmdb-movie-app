import React, { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdMovieFilter } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import Container from "./Container";
import { Link } from "react-router-dom";
function Navbar() {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [menuBarMovie, setMenuBarMovie] = useState(false);
  const [menuBarSeries, setMenuBarSeries] = useState(false);
  const barHandler = () => {
    setActiveNavbar((prev) => !prev);
  };
  return (
    <>
      <Container>
        <div
          className={`w-full h-screen py-6 px-4 bg-gradient-to-t from-neutral-800  to-red-900 absolute  right-0 transition-all duration-300 z-10 ${
            activeNavbar ? "top-0" : "-top-[700px]"
          }`}>
          {/* top section */}
          <div className="flex items-center justify-between font-bold font-vazir text-lg ">
            <div className="flex items-center gap-x-1">
              <span className="text-primary">Movies</span>
              <span className="text-secoundary">Saba</span>
            </div>
            <div>
              <span className="text-2xl text-white" onClick={barHandler}>
                <IoMdClose />
              </span>
            </div>
          </div>
          {/* content section */}
          <div className="mt-4 font-vazir font-semibold text-lg text-secoundary">
            <ul className="flex flex-col items-start justify-center gap-y-4">
              <li onClick={barHandler}>فیلم</li>
              <li onClick={barHandler}>سریال</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between py-2 px-2">
          {/* logo and name */}
          <div className="flex items-center justify-center gap-x-2 text-primary">
            <Link to="/">
              <h2 className="font-lale font-semibold sm:text-lg md:text-xl xl:text-3xl">
                SabaMovie
              </h2>
            </Link>

            <RiMovie2Fill className=" sm:text-xl text-xl  xl:text-3xl" />
          </div>

          {/* toggle nutton */}
          <div className="block sm:hidden" onClick={barHandler}>
            <HiMiniBars3 className="text-primary text-2xl font-bold" />
          </div>

          {/* menu */}
          <nav className="  font-vazir font-medium text-xl hidden sm:block">
            <ul className=" flex items-center justify-center gap-x-6">
              <Link to="/movies" className="relative">
                <li className=" flex items-center justify-center gap-x-1">
                  <span className="text-secoundary text-md">
                    <MdMovieFilter />
                  </span>
                  <span className="text-white">فیلم</span>
                  <span
                    onClick={() => {
                      setMenuBarMovie((prev) => !prev);
                    }}
                    className="text-primary font-semibold text-md lg:text-2xl">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </li>
                <div
                  className={`w-28 pr-2 py-2 absolute   ${
                    menuBarMovie ? "block " : "hidden"
                  }  transition-all duration-500  top-10 right-8 border border-gray-600 bg-[#4B4B4B] rounded-md  font-vazir text-white`}>
                  <li className="mb-2">درام</li>
                  <li className="mb-2">جنایی</li>
                  <li className="mb-2">رمانتیک</li>
                </div>
              </Link>

              <Link to="/series" className="relative">
                <li className="flex items-center justify-center gap-x-1">
                  <span className="text-secoundary text-md">
                    <MdOutlineLocalMovies />
                  </span>
                  <span className="text-white">سریال</span>
                  <span
                    onClick={() => {
                      setMenuBarSeries((prev) => !prev);
                    }}
                    className="text-primary font-semibold text-md lg:text-2xl">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </li>
                <div
                  className={`w-28 pr-2 py-2 absolute   ${
                    menuBarSeries ? "block " : "hidden"
                  }  transition-all duration-500  top-10 right-12 border border-gray-600 bg-[#4B4B4B] rounded-md  font-vazir text-white`}>
                  <li className="mb-2">درام</li>
                  <li className="mb-2">جنایی</li>
                  <li className="mb-2">رمانتیک</li>
                </div>
              </Link>
            </ul>
          </nav>
          {/* searchbar */}

          <form className="w-[20%] font-vazir hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 ">
                <svg
                  className="w-4 h-4 text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 outline-none text-sm text-gray-900 border  rounded-lg bg-[#545454]"
                placeholder="فیلم،سریال..."
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-2 bg-primary  font-medium rounded-full text-sm px-2 py-1">
                <CiSearch />
              </button>
            </div>
          </form>
          {/* login button or account  */}
          <div className="hidden sm:block">
            <button className="font-vazir text-white px-6 py-2 bg-primary rounded-md ">
              ورود
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
