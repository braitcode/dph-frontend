import React, { useState } from 'react'
import logodph from "../assets/icons/logodph.png"
import twitter from "../assets/icons/twitter.png"
import youtube from "../assets/icons/youtube.png"
import instagram from "../assets/icons/instagram.png"
import linkedin from "../assets/icons/linkedin.png"
import facebook from "../assets/icons/facebook.png"
import arrowRightUp from "../assets/icons/arrowRightUp.png"
import email from "../assets/icons/sms outline.png"
import phone from "../assets/icons/phone icon.png";
import sms from "../assets/icons/sms.png";
import location from "../assets/icons/location.png";
import axios from 'axios'


const Footer = () => {
  // State to store the email input and feedback messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Reset feedback messages
    setMessage('');
    setError('');

    // Check if the email is empty
    if (!email) {
      setError('Please enter a valid email');
      return;
    }

    try {
      // Send the email to the backend API for newsletter subscription using Axios
      const response = await axios.post('/newsletter/subscribe', {
        email, // Send email data
        fullname: 'User' // Optionally, send fullname or other data
      });

      if (response.status === 200) {
        setMessage('Subscription successful! Please check your email for confirmation.');
        setEmail(''); // Reset email input after success
      } else {
        setError(response.data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      // Handle any errors
      setError('An error occurred. Please try again.');
    }
  };
  return (
    <div className="bg-black w-full xl:h-[353px] xl:pt-[3rem]">

    <div className="container lg:w-11/12 m-auto py-4 xl:p-0 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:flex xl:justify-between gap-12 text-center md:text-left">
        <div className="xl:w-[250px] flex flex-col items-center md:items-start gap-[23px]">
          <div className="">
            <div className="flex items-center justify-center md:justify-start text-[32.14px] gap-2">
              <img src={logodph} alt="Logo" />
              <p className='text-white font-bold'>DPH</p>
            </div>
            <p className='text-white font-spaceGrotesk text-[12px]'>Digital Presence Hub</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className='text-white text-[18px] font-bold flex justify-center md:justify-normal xl:justify-start gap-4 font-spaceGrotesk'>
              <img src={phone} alt="" className='w-[24px] h-[24px]' />
              +234 998 890 4847
            </p>

            <p className='text-white xl:hidden text-[18px] font-bold flex justify-center md:justify-normal xl:justify-start gap-4 font-spaceGrotesk'>
              <img src={sms} alt="" />
              Dph@gmail.com
            </p>

            <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
              <img src={location} alt="" className='w-[24px] h-[24px]' />
              1, Dph cresent, Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Company</h2>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>About</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Press</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Blog</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Careers</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Locations</h2>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Africa</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Asia</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>South America</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Europe</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Support</h2>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Help Center</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Contact Us</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Term of Use</p>
          <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Privacy</p>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col md:col-span-2 gap-[20px]">
          <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Sign up for Newsletter</h2>
          <form onSubmit={handleSubmit} className='md:w-full w-[90%] relative'>
            <div className='md:w-full w-[90%] relative'>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Bind input to state
                class="border p-2 rounded-lg bg-transparent text-white font-spaceGrotesk xl:w-full md:w-full w-[80%] pr-16"
              />
              <button
                type="submit"
                class="absolute right-0 top-0 h-full px-4  bg-white rounded-r-lg"
              >
                Submit
              </button>
            </div>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="flex xl:justify-between justify-evenly md:justify-between">
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;