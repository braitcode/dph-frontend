import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
// import logout from '../assets/logout.svg'
// import dashboard from '../assets/dashboard.svg'
import { MdSpaceDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import LogoutModal from "./LogoutModal";


const Dropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogOut = () => {
    setIsModalOpen(true); // Open the modal instead of logging out directly
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <section className="bg-white rounded-md border  shadow-lg  font-spaceGrotesk ">
       {/* DashBoard */}
        
          <div className="flex gap-3 items-center justify-start py-[20px] px-[40px] ">
            <span className="text-gray-500 text-2xl cursor-not-allowed"><MdSpaceDashboard /></span>
            <span className=" text-gray-500 text-[18px] cursor-not-allowed ">Dashboard</span>
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
