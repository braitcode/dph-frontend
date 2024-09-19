import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const Dropdown = ({ onLogOut }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const handleLogOut = () => {
    setIsDropdownOpen(false);
    onLogOut(); // Trigger modal opening from NavBar
  };

  return (
    <section className="bg-white rounded-md border shadow-lg font-spaceGrotesk">
      {/* Dashboard */}
      <div className="flex gap-3 items-center justify-start py-[20px] px-[40px]">
        <span className="text-gray-500 text-2xl cursor-not-allowed">
          <MdSpaceDashboard />
        </span>
        <span className="text-gray-500 text-[18px] cursor-not-allowed">
          Dashboard
        </span>
      </div>
      <hr />

      {/* Logout */}
      <div
        className="flex gap-3 items-center justify-start py-[20px] px-[40px] cursor-pointer"
        onClick={handleLogOut} // Trigger logout and open modal
        role="button"
      >
        <span className="text-[#FF0000] text-2xl font-bold">
          <LuLogOut />
        </span>
        <span className="text-[#FF0000] text-[18px] font-500">
          Log Out
        </span>
      </div>
    </section>
  );
};

export default Dropdown;
