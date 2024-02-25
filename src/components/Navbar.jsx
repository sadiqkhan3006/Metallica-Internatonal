import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, Navigate, matchPath, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-final.png";
function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  const navlinks = [
    { id: 1, title: "Home", path: "/" },
    {
      id: 2,
      title: "Services",
      path: "/services",
      sublinks: [
        { id: 1, title: "Trading" },
        { id: 2, title: "Mining" },
        { id: 3, title: "Logistics" },
      ],
    },
    { id: 3, title: "About", path: "/about" },
    { id: 4, title: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div>
      <nav
        className={` fixed z-20 w-full   min-h-[70px] bg-white bg-opacity-[75%] lg:min-h-[100px] flex flex-row navbarStyle`}
      >
        <div className="ml-[7%] mr-[7%] lg:items-center  flex flex-col gap-y-5 lg:flex-row w-full justify-between text-2xl">
          <div className="mt-5 lg:mt-0  hover:text-[#ee5e3e]  transition-colors  delay-75 duration-150 ease-in  cursor-pointer">
            <Link to="/">Logo</Link>
          </div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden "
            }   gap-y-5 mb-5 lg:mb-0 lg:ml-0  lg:flex flex-col lg:flex-row gap-x-6  text-2xl   text-[#281D49]`}
          >
            {navlinks.map((item) =>
              item.title === "Services" ? (
                <li key={item.id} className="group cursor-pointer relative ">
                  <div
                    className={`${
                      matchRoute(`${item.path}/:subitem`)
                        ? "text-[#ee5e3e]"
                        : ""
                    } flex flex-row lg:justify-center items-center transition-colors  delay-75 duration-150 ease-in  hover:text-[#ee5e3e]`}
                  >
                    Services
                    <span>
                      <IoIosArrowDropdown />
                    </span>
                  </div>
                  <div
                    className="absolute bg-white p-3 top-16 border left-0 
             w-[300px] z-20 cursor-pointer 
             invisible opacity-0 group-hover:visible  
             group-hover:opacity-100  
             transition-all duration-200 delay-200 
             group-hover:-translate-y-[.65em]"
                  >
                    <div className="absolute left-[5%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-white"></div>
                    <ul className="  ">
                      {item?.sublinks.map((eachitem) => (
                        <Link
                          key={eachitem.id}
                          to={`${item.path}/${eachitem.title.toLowerCase()}`}
                        >
                          <li
                            onClick={() => {
                              setmenuOpen((prev) => !prev);
                            }}
                            key={eachitem.id}
                            className={`${
                              matchRoute(
                                `${item.path}/${eachitem.title.toLowerCase()}`
                              )
                                ? "bg-[#F7F4FF]"
                                : ""
                            } hover:bg-[#F7F4FF]  w-[100%]  p-2 text-left`}
                          >
                            {eachitem.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  onClick={() => {
                    setmenuOpen((prev) => !prev);
                  }}
                  key={item.id}
                  className={`${
                    matchRoute(item.path) ? "text-[#ee5e3e]" : ""
                  } hover:text-[#ee5e3e] cursor-pointer transition-colors  delay-75 duration-150 ease-in`}
                >
                  <Link to={`${item.path}`}>{item.title}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div
          onClick={() => {
            setmenuOpen((prev) => !prev);
          }}
          className="lg:hidden text-3xl mt-5 mr-[7%]"
        >
          {menuOpen ? <RxCross1 /> : <IoMenu />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
