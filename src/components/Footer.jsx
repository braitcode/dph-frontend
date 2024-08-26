import React from 'react'
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

const Footer = () => {
  return (
    <div className="bg-black  w-full p-8 md:p-16">
      <div className="w-full max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-between gap-12 text-center md:text-left">
        <div className="xl:w-[175px] flex flex-col items-center md:items-start gap-[23px]">
          <div className="">
          <div className="flex items-center justify-center md:justify-start text-[32.14px] gap-2">
            <img src={logodph} alt="Logo" />
            <p className='text-white font-bold'>DPH</p>
          </div>
          <p className='text-white font-spaceGrotesk text-[12px]'>Digital Presence Hub</p>
          </div>
          <p className='text-white text-[17px] font-spaceGrotesk font-medium'>
            444 St. Yellow Street California, USA +1 556 767
          </p>
          <div className="xl:hidden flex flex-col gap-4">
          <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={phone} alt="" />
                            +234 998 890 4847
                        </p>

                        <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={sms} alt="" />
                            Dph@gmail.com
                        </p>

                        <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={location} alt="" />
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

        <div className="flex flex-col gap-[20px]">
            <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Sign up for Newsletter</h2>
            <span className=' flex justify-between items-center'>
              <img src={email} alt="" />
              <img src={arrowRightUp} alt="" className='w-[8px] h-[13px]' />
            </span>
            <p className="border border-white w-full"></p>
            <div className="flex justify-between">
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
