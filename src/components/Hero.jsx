import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import laptop from "../assets/icons/laptop-hero.svg";
import barchart from "../assets/icons/barchart.svg";
import line from "../assets/icons/line-hero.svg";
import eclipse from "../assets/icons/eclipse.svg";
import elevateimg from "../assets/icons/elevateimg.svg";
import bg from "../assets/icons/bg-hero.svg";
import FlowComponent from "./Customerinflux";
import dot from "../assets/icons/dot.svg";
import drive from "../assets/icons/drive.svg";
import elevate from '../assets/icons/elevate.svg'
import arrowRight from "../assets/icons/Line arrow-right.png"

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 230) {
          clearInterval(timer);
          return 230;
        }
        return prevCount + 1;
      });
    }, 2); // update every 10ms
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div >
        {/* <NavBar /> */}
        <div className="w-full lg:flex justify-between items-center gap-12 md:mb-[2rem]  mt-[5rem] max-w-7xl m-auto font-spaceGrotesk  lg:px[4rem]  ">
          {/* left div */}
          <div className="lg:w-[45%] flex flex-col gap-[2.25rem] w-full ">
            <div className="lg:flex flex-col lg:gap-[20px] lg:mt-[8.8rem] mt-[2rem] ">
              <h1 className="lg:text-[55px] text-[30px] md:text-[40px] font-bold lg:leading-[3.2rem] leading-[2rem] md:leading-[3rem] ">
                Elevate Your Brand With Stunning Mobile And Website Designs
              </h1>
              <p className="xl:text-[24px] text-[12px] md:text-[18px] font-medium leading-[2rem] hidden lg:block">
                Driven by a passion for innovative designs, we craft mobile and
                web designs that captivate and resonate with users.
              </p>
              <div className="lg:flex lg:gap-3 hidden lg:block">
                <Button size="medium" color="success">
                  <div className="flex gap-2">

                    <span className="text-[15px]">Get Started</span> <img src={arrowRight} alt="" />
                  </div>
                </Button>
                <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
                  <Button size="medium" color="white">
                    <span className="text-[15px]">Book a consultant</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className="lg:w-[45%] mt-[2.1rem] lg:mt-[4.1rem] w-full  ">
            <div className="flex justify-between  gap-3 py-3">
              <div className="relative h-auto">
                <img src={laptop} alt="" className="w-[350px] lg:w-[450px] " />
                <div className="absolute xl:mt-[3.1rem] top-[-15px] md:top-[-2rem] left-12  md:left-[160px] lg:left-[120px] lg:top-[-4rem]">
             
                  <div className="relative ">
                   <button className="btn bg-[#028A4C] w-[70px]  h-[70px]   md:w-[90px]  md:h-[90px] lg:w-[100px]  lg:h-[100px]  rounded-full ">
                    <img src={elevate} alt="" className="absolute  top-[1.4rem] left-[1.3rem]  md:top-[1.3rem] md:left-[1.5rem]  lg:top-[1.3rem] lg:left-[1.3rem] w-[30px] lg:w-[60%] md:w-[50%] animate-pulse  " />
                   </button> 
                  </div>
                </div>
              </div>
              <div className="bg-[#F0F0F0] flex flex-col justify-center  rounded-xl text-center    w-[350px]  ">
                <div className="w-full flex justify-center h-auto">
                  <div className="w-[90%]">

                    <h1 className="xl:text-[84px] lg:text-[84px] text-[40px] md:text-[80px] text-[#02864A] font-bold">
                    {count}+
                    </h1>
                    <p className="xl:text-[16px] md:text-[16px] text-[10px]  mb-2  text-start  font-spaceGrotesk ">
                      Some big companies that we work with, and trust us very much.
                    </p>
                  </div>
                </div>
                <div className="px-2 md:p-7">
                  <FlowComponent users={count} />
                </div>
              </div>
            </div>

            <img src={drive} alt="" className="w-full" />
          </div>

          <p className=" text-[12px] md:text-[18px] font-medium font-spaceGrotesk lh-normal p-2 lg:hidden block text-center">
            Driven by a passion for innovative designs, we craft mobile and
            web designs that captivate and resonate with users.
          </p>
          <div className="flex  lg:hidden  gap-3 m-3 justify-center">
            <Button size="medium" color="success">
              <div className="flex gap-2">

                <span className="md:text-[15px] text-[10px]">Get Started</span> <img src={arrowRight} alt="" />
              </div>
            </Button>
            <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
              <Button size="medium" color="white">
                <span className="md:text-[15px] text-[10px]">Book a consultant</span>
              </Button>
            </div>
          </div>
        </div>

        <div className=" bg-black">
          <div className="flex justify-between text-white w-full  py-6 md:py-5 font-spaceGrotesk xl:text-[32px] text-[10px] md:text-[19px] px-[1.1rem]  lg:px-[4.8rem]    max-w-7xl m-auto  ">
            <span>Branding</span> <img src={dot} alt="" className="w-[5px]" />
            <span>Web Development</span>{" "}
            <img src={dot} alt="" className="w-[5px]" />
            <span>Consultation</span> <img src={dot} alt="" className="w-[5px]" />
            <span>Mobile Development</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
