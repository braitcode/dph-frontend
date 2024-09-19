import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../components/contexts/Auth"
import Button from "../components/Button";
import { IoWarningOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



const LogoutModal = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {logout} =useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoading(true); // Start loading
  };
  
  useEffect(() => {
    if (isLoading) {
      // Simulate a delay (e.g., network request)
      const timer = setTimeout(() => {
        logout();
        setIsLoading(false);
        navigate("/"); // Navigate to the login page after loading
        onClose(); // Close the modal after navigating
      }, 1000); // 2 seconds delay for demonstration

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate, onClose]);

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-spaceGrotesk z-20">
      <section className="flex flex-col justify-center items-center bg-white m-4 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className='w-full flex justify-end'>
          <RxCross2 className='text-xl cursor-pointer' onClick={onClose} />
        </div>
        <div className='flex flex-col justify-center items-center space-y-3'>
          {/* Icon */}
          <div className="h-[100px] w-[100px] bg-[#E8083E1A] p-2 rounded-full flex justify-around">
            <IoWarningOutline className='w-[70px] h-[70px] text-[#E8083E]' />
          </div>

          {/* Message */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold">
              Log out?
            </h1>
            <p className="text-sm text-[#1A1A1A] text-center px-4">
              Are you sure you want to log out? Click below to log out and return anytime to keep your digital growth on track.
            </p>
          </div>

          {/* Buttons */}
          <button
            className='border-[#02864A] border text-lg font-semibold py-3 px-5 w-full rounded-lg hover:text-[#E8083E] hover:border-[#E8083E]'
            onClick={handleLogOut} // Trigger log out
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? "Logging Out" : "Log Out"}
          </button>
          <Button
            size="large"
            color="success"
            onClick={onClose} // Close modal on cancel
            disabled={isLoading} // Disable button during loading
          >
            Cancel
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LogoutModal;
