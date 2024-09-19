import React, { useState } from 'react';
import logodph from "../assets/icons/logodph.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import facebook from "../assets/icons/facebook.png";
import arrowRightUp from "../assets/icons/arrowRightUp.png";
import emailIcon from "../assets/icons/sms outline.png";
import phone from "../assets/icons/phone icon.png";
import sms from "../assets/icons/sms.png";
import location from "../assets/icons/location.png";
import MessageModal from './MessageModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import sendIcon from "../assets/icons/send icon.png"
import { FaHourglassStart } from 'react-icons/fa';
import Hourglass from "../assets/hourglass.svg"



const Footer = () => {
  // State for modal visibility and type
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalTitle, setModalTitle] = useState(''); 
  const [modalMessage, setModalMessage] = useState('');

  // State to store the email input and feedback messages
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to handle success scenario
  const handleSuccess = () => {
    setModalType('success'); 
    setModalTitle('Subscribed!');
    setModalMessage('Welcome to our tribe, we are happy to connect with you');
    setIsModalOpen(true);
    setEmail(''); // Clear the form fields
    setIsLoading(false); // Stop loading
  };

  // Function to handle error scenario
  const handleError = () => {
    setModalType('fail'); 
    setModalTitle('Subscription Failed');
    setModalMessage('Something went wrong. Please try again.');
    setIsModalOpen(true);
    setIsLoading(false); // Stop loading
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
  
    // Reset feedback messages
    setError('');
  
    // Check if the email is empty
    if (!email) {
      setError('Please enter a valid email');
      return;
    }
  
    setIsLoading(true); // Start loading
    
    try {
      // Send the email to the backend API for newsletter subscription using Axios
      const response = await axios.post('/newsletter/subscribe', {
        email, // Send email data
      });
  
      if (response.status === 200) {
        handleSuccess(); // Show success modal
      } else {
        setError(response.data.message || 'Subscription failed. Please try again.');
        handleError();
      }
    } catch (err) {
      // Check if the error is due to duplicate subscription
      if (err.response && err.response.status === 409) { // 409 Conflict for duplicate email
        setError('This email is already subscribed.');
        setModalType('fail'); 
        setModalTitle('Already Subscribed');
        setModalMessage('This email is already subscribed to the newsletter.');
        setIsModalOpen(true);
      } else {
        // Handle any other errors
        setError('An error occurred. Please try again.');
        handleError();
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-black w-full xl:h-[353px] xl:pt-[3rem]">
      <div className="container lg:w-11/12 m-auto py-4 xl:p-0 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:flex xl:justify-between gap-12 text-center md:text-left">
          <div className="xl:w-[250px] flex flex-col items-center md:items-start gap-[23px]">
            <Link to='/'>
            <div>
              <div className="flex items-center h-[34px] justify-center md:justify-start ">
                <img src={logodph} alt="Logo" className='w-[30px] h-[30px]' />
                <p className='text-white font-zenDots text-[32.14px]'>DPH</p>
              </div>
              <p className='text-white w-[124px] flex justify-center font-spaceGrotesk text-[10px]'>DIGITAL PRESENCE HUB</p>
            </div>
            </Link>

            <div className="flex flex-col gap-4">
              <p className='text-white text-[18px] font-bold flex justify-center md:justify-normal xl:justify-start gap-4 font-spaceGrotesk'>
                <img src={phone} alt="Phone Icon" className='w-[24px] h-[24px]' />
                +234 998 890 4847
              </p>

              <p className='text-white xl:hidden text-[18px] font-bold flex justify-center md:justify-normal xl:justify-start gap-4 font-spaceGrotesk'>
                <img src={sms} alt="SMS Icon" />
                Dph@gmail.com
              </p>

              <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                <img src={location} alt="Location Icon" className='w-[24px] h-[24px]' />
                1, Dph Crescent, Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-[20px]">
            <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Company</h2>
            <Link to="/about">
            <p className='text-white text-[18px] font-medium font-spaceGrotesk'>About</p>
            </Link>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Press</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Blog</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Careers</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-[20px]">
            <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Locations</h2>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Africa</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Asia</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>South America</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Europe</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-[20px]">
            <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Support</h2>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Help Center</p>
            <Link to="/contact">
            <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Contact Us</p>
            </Link>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Terms of Use</p>
            <p className='text-white text-[18px] font-medium font-spaceGrotesk cursor-not-allowed hover:text-gray-400'>Privacy</p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col md:col-span-2 gap-[20px]">
            <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Sign up for Newsletter</h2>
            <form onSubmit={handleSubmit} className='md:w-full w-[90%] relative'>
              <div className='md:w-full w-[100%] relative'>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Bind input to state
                  className="border p-2 rounded-lg bg-transparent text-white font-spaceGrotesk xl:w-full md:w-full w-[80%] pr-16"
                  disabled={isLoading} // Disable button while loading
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-white rounded-r-lg"
                >
                 {isLoading ? <img src={Hourglass} alt="" className='w-[24px] h-[24px]' /> : <img src={sendIcon} alt='Send Icon' /> } {/* Text loader */}
                </button>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex xl:justify-between justify-evenly md:justify-between">
              <img src={twitter} alt="Twitter Icon" />
              <img src={youtube} alt="YouTube Icon" />
              <img src={instagram} alt="Instagram Icon" />
              <img src={linkedin} alt="LinkedIn Icon" />
              <img src={facebook} alt="Facebook Icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Message Modal */}
      {isModalOpen && (
        <MessageModal
          type={modalType}
          title={modalTitle}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Footer;
