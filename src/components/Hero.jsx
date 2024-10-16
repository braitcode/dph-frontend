import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import laptop from "../assets/icons/laptop-hero.svg";
import FlowComponent from "./Customerinflux";
import dot from "../assets/icons/dot.svg";
import drive from "../assets/icons/drive.svg";
import elevate from "../assets/icons/elevate.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import LazyLoad from 'react-lazyload';
import { useAuth } from "../components/contexts/Auth";

const Hero = () => {
  const [count, setCount] = useState(1);
  const { auth } = useAuth();
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 230) {
          clearInterval(timer);
          return 230;
        }
        return prevCount + 1;
      });
    }, 2);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div>
        <div className=" lg:flex justify-between items-center gap-12 md:mb-[2rem] mt-[5rem] container w-11/12 m-auto font-spaceGrotesk ">
          {/* left div */}
          <div className="lg:w-[45%] flex flex-col gap-[2.25rem] w-full ">
            <div className="lg:flex flex-col lg:gap-[20px] lg:mt-[3.5rem] mt-[2rem]  ">
              <h1 className="xl:text-[55px] lg:text-[35px] text-[25px] md:text-[40px] font-bold xl:leading-[4.4rem] lg:leading-[3.4rem] leading-[2rem] md:leading-[3rem] lg:text-start  text-center ">
                Elevate Your Brand With Stunning Mobile And Website Designs
              </h1>
              <p className="xl:text-[24px]  lg:text-[18px] font-medium leading-[1.91rem] hidden lg:block ">
                Driven by a passion for innovative designs, we craft mobile and
                web designs that captivate and resonate with users.
              </p>
              {/* states */}
              {auth?.user?(
                   <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C] hidden lg:block xl:w-[23.8%] w-[35%] ">
                 
                   < Link to="/contact" className=''>
                            <Button
                                size="medium"
                                color="white"
                            >
                              Get in Touch
                            </Button>
                        </Link>
                 </div>
              ):(
                <div className="lg:flex lg:gap-3 hidden">
                <Link to='/signup' className="">  <Button size="small" color="success">
              <div className="flex gap-2">
                <span className="md:text-[16px] text-[14px] lg:text-[18px] p-[0.3rem]">Get Started</span>
                <FaArrowRightLong className="mt-[0.5rem]" />
              </div>
            </Button></Link>

                <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
                  <Link to='/contact'>
                    <Button size="medium" color="white">
                      <span className="md:text-[16px] text-[14px] lg:text-[18px]">Get in Touch</span>
                    </Button>
                  </Link>

                </div>
              </div>
              )}
             
            </div>
          </div>
          {/* right div */}
          <div className="lg:w-[45%] mt-[2.1rem]  lg:mt-[3.1rem] lg:mb-[1.5rem] w-full hidden lg:block ">
            <div className="flex justify-between  gap-3 py-3">
              <div className="relative h-auto ">
                <LazyLoad>
                  <img src={laptop} alt="" className="w-[350px] lg:w-[450px] " />
                </LazyLoad>
                <div className="absolute xl:mt-[3.1rem] top-[-19px] md:top-[-1rem] left-[4rem]  md:left-[160px] lg:left-[100px] xl:left-[120px] lg:top-[-2rem] xl:top-[-4rem]">
                  <div className="relative">
                    <button className="btn bg-[#028A4C] w-[50px]  h-[50px] md:w-[70px]  md:h-[70px]   xl:w-[100px]  xl:h-[100px]  rounded-full ">
                      <LazyLoad>
                        <img src={elevate} alt="" className="absolute  top-[0.6rem] left-[0.7rem]  md:top-[1.2rem] md:left-[1.1rem]  xl:top-[1.3rem] xl:left-[1.3rem] w-[30px] xl:w-[60%] md:w-[50%] animate-pulse  " />
                      </LazyLoad>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#F0F0F0] flex flex-col justify-center  rounded-xl text-center  w-[350px]  ">
                <div className="w-full flex justify-center h-auto">
                  <div className="w-[90%]">
                    <h1 className="xl:text-[84px] lg:text-[55px] text-[40px] md:text-[80px] text-[#02864A] font-bold">
                      {count}+
                    </h1>
                    <p className="xl:text-[16px] lg:text-[10px] md:text-[16px] text-[10px]   text-start  font-spaceGrotesk ">
                      Some big companies that we work with, and trust us very
                      much.
                    </p>
                  </div>
                </div>
                <div className="px-2 md:p-7">
                  <FlowComponent users={count} />
                </div>
              </div>
            </div>
            <LazyLoad>
              <img src={drive} alt="" className="w-full" />
            </LazyLoad>
          </div>

          <p className=" text-[16px] md:text-[18px] font-medium font-spaceGrotesk lh-normal p-2 lg:hidden block text-center">
            Driven by a passion for innovative designs, we craft mobile and web
            designs that captivate and resonate with users.
          </p>
          {auth?.user?(
           
             <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]  flex justify-center mb-[2rem] md:w-[30%] w-[50%] mx-auto lg:hidden">
             <Link to='/contact' className="">
               <Button size="small" color="white">
                 <span className="md:text-[16px] text-[14px] lg:text-[18px] ">
                   Get in Touch
                 </span>
               </Button>
             </Link>

           </div>
          ): <div className="flex  lg:hidden gap-3  justify-center mb-[2rem] ">
          <Link to='/signup'>
            <Button size="small" color="success">
              <div className="flex gap-2">
                <span className="md:text-[16px] text-[14px] lg:text-[18px] p-[0.2rem]">Get Started</span>
                <FaArrowRightLong className="mt-[0.4rem]" />
              </div>
            </Button></Link>

          <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
            <Link to='/contact'>
              <Button size="small" color="white">
                <span className="md:text-[16px] text-[14px] lg:text-[18px]">
                  Get in Touch
                </span>
              </Button>
            </Link>

          </div>
        </div>}
         
        </div>
        <div className="bg-black overflow-hidden">
          <Marquee>
            <div className="flex text-white space-x-10 lg:space-x-12 py-3 md:py-5 font-spaceGrotesk xl:text-[32px] text-[14px] md:text-[19px]">
              <div className="flex gap-5">
              <span>Branding</span>
                <img src={dot} alt="" className="w-[5px]" />
              </div>
              <div className="flex gap-5">
                <span>Web Development</span>
                <img src={dot} alt="" className="w-[5px]" />
              </div>
              <div className="flex gap-5">
                <span>Consultation</span>
                <img src={dot} alt="" className="w-[5px]" />
              </div>
              <div className="flex gap-10">
              <span >Mobile Development</span>
              <img src={dot} alt="" className="w-[5px] lg:hidden" />
              <div></div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Hero;
