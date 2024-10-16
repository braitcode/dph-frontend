import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/logo.svg";
import Button from "./Button";
import { useAuth } from "../components/contexts/Auth";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Dropdown from "./Dropdown";
import user from "../assets/icons/user.svg";
import LogoutModal from "./LogoutModal";

const NavBar = () => {
  const NavLinks = [
    { name: "About", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact Us", link: "/contact" },
  ];

  const { auth, logout } = useAuth();
  const [open, setOpen] = useState(false); // Hamburger menu state
  const [dropdown, setDropDown] = useState(false); // Dropdown state
  const location = useLocation();
  const menuRef = useRef(null); // Reference for menu elements
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDrop() {
    setDropDown(!dropdown);
  }

  const handleLogOut = () => {
    setOpen(false);
    setDropDown(false); 
    setIsModalOpen(true); // Open the modal instead of logging out directly
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  //  Get user's initials safely
  const getUserInitials = (fullname) => {
    if (!fullname) return ""; // Check if fullname is undefined or null
    const names = fullname.split(" ");
    return names.map((name) => name[0]).join("");
  };

  // Close the dropdown and hamburger when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Close dropdown and hamburger if they're open
        if (open || dropdown) {
          setDropDown(false);
          setOpen(false);
        }
        
      }
    };

    // Add click event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, dropdown]);

  return (
    <div ref={menuRef} className="bg-white top-0 w-full fixed border-b z-[20] font-spaceGrotesk">
      <nav className="container lg:w-11/12 m-auto flex justify-between py-5 relative">
        <div className="flex mx-4 lg:mx-0 md:mx-8 gap-2">
          {/* Mobile Hamburger Menu */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="md:text-4xl text-2xl cursor-pointer lg:hidden z-10"
          >
            {open ? (
              <IoClose className="text-[#028A4C]" />
            ) : (
              <SlMenu className="text-[#028A4C]" />
            )}
          </div>

          {/* Logo */}
          <div className="logo lg:px-0 flex-grow lg:flex-grow-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-6 md:h-8 lg:h-[61px]" />
            </Link>
          </div>
        </div>

        {/* Login or User Initials */}
        <div className="absolute top-4 right-4 md:right-8 lg:hidden">
          {auth?.user ? (
            <div className="flex items-center justify-center text-[14px] md:text-[18px] bg-[#028A4C] font-bold text-white p-[0.65rem] md:p-[0.9rem] rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
              {getUserInitials(auth.user.fullname)}
            </div>
          ) : (
            <div className="flex gap-2 border-[#028A4C] md:border-2 border p-1 md:p-2 rounded-md">
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
          className={`lg:flex md:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto w-full lg:w-auto lg:pl-0 px-9 transition-all duration-500 ease-in bg-white ${open ? "top-full opacity-100" : "hidden"
            } lg:opacity-100`}
        >
          {NavLinks.map((link) => (
            <li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-4">
              <Link
                to={link.link}
                onClick={() => setOpen(false)}
                className={`font-spaceGrotesk xl:text-[18px] font-medium text-[15px] ${location.pathname === link.link
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
            <div className="text-[16px] lg:hidden flex flex-col">
              <span className="mb-4 cursor-not-allowed text-gray-500"> Dashboard</span>
              <span className="text-[#FF0000] cursor-pointer" onClick={handleLogOut}>
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
          <div className="lg:flex gap-2 xl:text-[18px] hidden h-[61px] ">
            <div
              className="bg-white border-2 border-[#028A4C] rounded-full w-[50px] h-[50px]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={user} alt="User Icon" className="p-3" />
            </div>
            <span className="pt-3">{auth.user.fullname}</span>
            <span
              className="text-2xl pt-3 cursor-pointer"
              role="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDrop();
              }}
            >
              {dropdown ? (
                <GoChevronUp className="text-black hidden lg:block mt-[2px]" />
              ) : (
                <GoChevronDown className="text-black hidden lg:block mt-[2px]" />
              )}
            </span>
          </div>
        ) : (
          <div className="lg:flex justify-end gap-2 hidden mt-2 ">
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
        {dropdown && (
          <div className="absolute right-0 top-[5rem] hidden lg:block">
            <Dropdown onLogOut={handleLogOut}/>
          </div>
        )}
      </nav>
      {isModalOpen && (
        <LogoutModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default NavBar;
