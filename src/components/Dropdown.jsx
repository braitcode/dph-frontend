import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../components/contexts/Auth"
// import logout from '../assets/logout.svg'
// import dashboard from '../assets/dashboard.svg'
import { MdSpaceDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import LogoutModal from "./LogoutModal";


const Dropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {logout} =useAuth();
  const handleLogOut = () => {
    logout();
    setIsModalOpen(true); // Open the modal instead of logging out directly
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <section className="bg-white rounded-md border  shadow-lg  font-spaceGrotesk ">
       {/* DashBoard */}
        
          <div className="flex gap-3 items-center justify-start py-[20px] px-[40px]">
            <span className="text-[#028A4C] text-2xl"><MdSpaceDashboard /></span>
            <span className=" text-[#0A0A0B] text-[18px]  ">Dashboard</span>
          </div>
          <hr />
    

        {/* Logout */}
        <div>
           <Link to="/">
          <div className="flex gap-3 items-center justify-start py-[20px] px-[40px]">
            <span className="text-[#FF0000] text-2xl font-bold">
            <LuLogOut />
            </span>
              <span className="text-[#FF0000] text-[18px] font-500" onClick={handleLogOut} role="button">
                Log Out
              </span>
          
          </div>
          </Link>
        </div>
        {isModalOpen && (
        <LogoutModal onClose={handleCloseModal} />
      )}
      </section>
    </>
  );
};

export default Dropdown;
