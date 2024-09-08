import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { useAuth } from "../components/contexts/Auth";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const NavLinks = [
    { name: "About", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact Us", link: "/contact" },
  ];

  // const navigate = useNavigate();
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [dropdown, setDropDown] = useState(false);

  function handleDrop() {
    !dropdown ? setDropDown(true) : setDropDown(false);
  }

  return (
    <div className="bg-white top-0 w-full fixed border-b z-[20] font-spaceGrotesk">
      <nav className="container lg:w-11/12 m-auto flex justify-between py-5">
        <div className="logo px-5 md:px-[2rem]  lg:px-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>
        <ul
          className={`lg:flex md:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto w-full lg:w-auto lg:pl-0 px-9 transition-all duration-500 ease-in bg-white ${
            open ? "top-full opacity-100" : "top-[90%] opacity-0"
          } lg:opacity-100`}
        >
          {auth.user?(
            <li className=" my-4 lg:hidden ">
               <span className=" text-[15px] font-medium">{auth.user.fullname}</span>
            </li>
          ): ''}
          {NavLinks.map((link) => (
            <li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-4">
              <Link
                to={link.link}
                onClick={() => setOpen(false)}
                className={`font-spaceGrotesk xl:text-[18px] font-medium text-[15px] ${
                  location.pathname === link.link
                    ? "text-[#028A4C]"
                    : "text-[#171717]"
                } hover:text-[#028A4C] focus:text-[#028A4C] duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* auth for small screens */}

          {auth?.user ? (
            <div className="text-[16px] lg:hidden">

              <Link to="/">
                <span className="text-[#FF0000]">Log Out</span>
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 lg:hidden">
              <Link to="/signup" className="text-[16px]  text-white ">
                <div className="">
                  <Button size="medium" color="success">
                    Sign Up
                  </Button>
                </div>
              </Link>

              <Link to="/login" className="text-[16px]  text-[#171717] ">
                <div className="border-2 lg:border-none rounded-md border-[#028A4C]">
                  <Button size="medium" color="primary">
                    Log In
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </ul>
        {/* large screens */}

        {auth?.user ? (
          <div className="lg:flex gap-2 lg:pt-2  xl:text-[18px] hidden ">
            <span className="">{auth.user.fullname}</span>

            <span className="text-2xl " role="button" onClick={handleDrop}>
              {" "}
              {dropdown ? (
                <GoChevronUp className="text-black hidden lg:block mt-[2px] " />
              ) : (
                <GoChevronDown className="text-black hidden lg:block mt-[2px]" />
              )}{" "}
            </span>
          </div>
        ) : (
          <div className="lg:flex justify-end gap-2 hidden ">
            <Link to="/signup" className="text-[16px]  text-white ">
              <div className="">
                <Button size="medium" color="success">
                  Sign Up
                </Button>
              </div>
            </Link>

            <Link to="/login" className="text-[16px]  text-[#171717] ">
              <div className="">
                <Button size="medium" color="white">
                  Login
                </Button>
              </div>
            </Link>
          </div>
        )}
        <div className="absolute right-8 top-[4rem] hidden lg:block">
          {dropdown && <Dropdown />}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer lg:hidden px-4 md:px-[2rem] lg:px-0 "
        >
          {open ? (
            <IoClose className="text-[#028A4C]" />
          ) : (
            <SlMenu className="text-[#028A4C]" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
