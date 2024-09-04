import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Button from "../components/Button";

const MessageModal = ({ type, title, message, onClose }) => {
  const isSuccess = type === 'success';

  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-spaceGrotesk z-20">
      <section className="flex flex-col justify-center items-center bg-white py-12 rounded-lg shadow-lg max-w-md w-full space-y-5">
        {/* Icon */}
        <div className={`border-[1rem] ${isSuccess ? 'border-[#EAFFF6] bg-[#028A4C]' : 'border-[#FFEFEF] bg-[#D12D2D]'} p-3 rounded-full text-white`}>
          {isSuccess ? <FaCheck /> : <RxCross2 />}
        </div>

        {/* Message */}
        <div className="text-center space-y-1">
          <h1 className="text-lg font-bold">
            {title || (isSuccess ? 'Success' : 'Failed')}
          </h1>
          <p className="text-sm text-[#1A1A1A]">
            {/* Display the dynamic message */}
            {message || (isSuccess ? 'Kindly check your email for confirmation!' : 'Please try again or contact support.')}
          </p>
        </div>

        {/* Button */}
        <Button size="small" color={isSuccess ? 'success' : 'danger'} onClick={onClose}>
          {isSuccess ? 'Continue' : 'Close'}
        </Button>
      </section>
    </main>
  );
};

export default MessageModal;
