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
    <>
   
     <nav className="flex justify-between items-center p-5 lg:px-12 md:px-7 border-b bg-white top-0  w-[100%] fixed ">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={logo} alt="Logo" className="h-8" />
          </a>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-white ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 `}
        >
          {NavLinks.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="font-spaceGrotesk xl:text-[18px] font-medium text-[ #171717] text-[15px] hover:text-[#028A4C] focus:text-[#028A4C] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
         
        </ul>
        <div class="auth-buttons flex justify-end gap-2">
            <Button size="medium" color="white" >

            <span className="text-[16px] font-bold text-[#028A4C]">Login</span>
          </Button>
          <Button size="medium" color="success">
            <span className="text-[16px] font-bold">Sign Up</span>
          </Button>
        </div>
        <div
            onClick={() => setOpen(!open)}
            className="text-3xl   cursor-pointer md:hidden"
          >
            <button class="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <SlMenu />}
        </button>
          </div>
      </nav>
   
      
    </>
  );
};

export default NavBar;
