import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { useAuth } from "../components/contexts/Auth";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Dropdown from "./Dropdown";

const NavBar = () => {
  const NavLinks = [
    { name: "About", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact Us", link: "/contact" },
  ];

  const { auth, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [dropdown, setDropDown] = useState(false);
  const navigate = useNavigate();

  function handleDrop() {
    setDropDown(!dropdown);
  }

  const handleLogOut = () => {
    logout();
    navigate("/");
  };

  // Helper to get user's initials
  const getUserInitials = (fullname) => {
    const names = fullname.split(" ");
    return names.map((name) => name[0]).join("");
  };

  return (
    <div className="bg-white top-0 w-full fixed border-b z-[20] font-spaceGrotesk">
      <nav className="container lg:w-11/12 m-auto flex justify-between py-5 relative">
        <div className="flex mx-4 lg:mx-0 md:mx-8 gap-2">
          {/* Mobile Hamburger Menu */}
          <div
            onClick={() => setOpen(!open)}
            className="md:text-4xl text-2xl cursor-pointer lg:hidden  z-10"
          >
            {open ? (
              <IoClose className="text-[#028A4C]" />
            ) : (
              <SlMenu className="text-[#028A4C]" />
            )}
          </div>

          {/* Logo */}
          <div className="logo  lg:px-0 flex-grow lg:flex-grow-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-6 md:h-8" />
            </Link>
          </div>
        </div>

        {/* Login or User Initials */}
        <div className="absolute top-4 right-4 md:right-8 lg:hidden ">
          {auth?.user ? (
            <div className="flex items-center text-[12px] md:text-[18px]  bg-[#028A4C] text-white p-2 rounded-full ">
              {getUserInitials(auth.user.fullname)}
            </div>
          ) : (
            <div className="flex gap-2 border-[#028A4C] md:border-2  border p-1 md:p-2  rounded-md">
              <Link to="/login">
                <button className="text-[16px] w-[70px] font-semibold">
                  Log In
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* NavLinks */}
        <ul
          className={`lg:flex md:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto w-full lg:w-auto lg:pl-0 px-9 transition-all duration-500 ease-in bg-white ${
            open ? "top-full opacity-100" : "top-[90%] opacity-0"
          } lg:opacity-100`}
        >
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

          {/* Logout on small screens */}
          {auth?.user ? (
            <div className="text-[16px] lg:hidden flex flex-col  ">
              <span className="mb-4 font-[600px]"> Dashboard</span>
              <span className="text-[#FF0000] " onClick={handleLogOut}>
                Log Out
              </span>
            </div>
          ) : (
            <div className="flex gap-2 lg:hidden">
              <Link to="/signup" className="text-[16px] text-white">
                <Button size="medium" color="success">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </ul>

        {/* Large Screens - Auth section */}
        {auth?.user ? (
          <div className="lg:flex gap-2 lg:pt-2 xl:text-[18px] hidden">
            <span className="">{auth.user.fullname}</span>
            <span className="text-2xl " role="button" onClick={handleDrop}>
              {dropdown ? (
                <GoChevronUp className="text-black hidden lg:block mt-[2px]" />
              ) : (
                <GoChevronDown className="text-black hidden lg:block mt-[2px]" />
              )}
            </span>
          </div>
        ) : (
          <div className="lg:flex justify-end gap-2 hidden">
            <Link to="/signup" className="text-[16px] text-white">
              <Button size="medium" color="success">
                Sign Up
              </Button>
            </Link>
            <Link to="/login" className="text-[16px] text-[#171717]">
              <Button size="medium" color="white">
                Login
              </Button>
            </Link>
          </div>
        )}

        {/* Dropdown for large screens */}
        <div className="absolute right-0 top-[4rem] hidden lg:block">
          {dropdown && <Dropdown />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
