import React from 'react'
import dphLogo from "../assets/icons/dph logo.png"
import twitter from "../assets/icons/twitter.png"
import youtube from "../assets/icons/youtube.png"
import instagram from "../assets/icons/instagram.png"
import linkedin from "../assets/icons/linkedin.png"
import facebook from "../assets/icons/facebook.png"
import arrowRightUp from "../assets/icons/arrowRightUp.png"
import email from "../assets/icons/sms outline.png"

const Footer = () => {
  return (
    <div>
        <div className="bg-black w-full h-[353px] font flex p-16">
            <div className="w-full flex justify-between">
                <div className="w-[175px] flex flex-col gap-[23px]">
                  <img src={dphLogo} alt="" />
                  <p className='text-white text-[17px] font-spaceGrotesk font-medium'>444 St. Yellow Street California, Usa +1 556 767</p>
                </div>
                <div className="flex flex-col gap-[23px]">
                  <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Company</h2>
                  <p className='text-white text-[18px] font-medium font-spaceGrotesk'>About</p>
                  <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Press</p>
                  <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Blog</p>
                  <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Careers</p>
                </div>
                <div className="flex flex-col gap-[23px]">
                    <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Locations</h2>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Africa</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Asia</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>South America</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Europe</p>
                </div>
                <div className="flex flex-col gap-[23px]">
                    <h2 className='text-white text-[24px] font-bold font-spaceGrotesk'>Support</h2>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Help Center</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Contact Us</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Term of Use</p>
                    <p className='text-white text-[18px] font-medium font-spaceGrotesk'>Privacy</p>
                </div>
                <div className="flex flex-col gap-[23px]">
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
    </div>
  )
}

export default Footer