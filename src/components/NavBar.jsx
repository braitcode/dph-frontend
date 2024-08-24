import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";

const NavBar = () => {
  const NavLinks = [
    { name: "About", link: "/" },
    { name: "Our Services", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white top-0 w-full fixed border-b z-[1]">
      <nav className="max-w-7xl m-auto flex justify-between md:p-5">
        <div className="logo pt-5 pl-3 md:p-0">
          <a href="/">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto w-full md:w-auto md:pl-0 px-9 transition-all duration-500 ease-in bg-white ${open ? "top-full opacity-100" : "top-[90%] opacity-0"
            } md:opacity-100`}
        >
          {NavLinks.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="font-spaceGrotesk xl:text-[18px] font-medium text-[#171717] text-[15px] hover:text-[#028A4C] focus:text-[#028A4C] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex gap-2 md:hidden">
            <div className="border-2 md:border-none rounded-md border-[#028A4C]">
              <Button size="medium" color="primary">
                <span className="text-[16px] font-bold text-[#028A4C]">Login</span>
              </Button>
            </div>

            <Button size="medium" color="success">
              <span className="text-[16px] font-bold">Sign Up</span>
            </Button>
          </div>
        </ul>
        <div className="auth-buttons justify-end gap-2 hidden md:block">
          <Button size="medium" color="white">
            <span className="text-[16px] font-bold text-[#028A4C]">Login</span>
          </Button>
          <Button size="medium" color="success">
            <span className="text-[16px] font-bold">Sign Up</span>
          </Button>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden p-5 md:p-0"
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