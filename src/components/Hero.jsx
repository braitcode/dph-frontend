import React from "react";
import Button from "../components/Button";
import laptop from '../assets/icons/laptop-hero.svg'
import barchart from '../assets/icons/barchart.svg'
import line from '../assets/icons/line-hero.svg'
import eclipse from '../assets/icons/eclipse.svg'
import elevateimg from '../assets/icons/elevateimg.svg'
import bg from '../assets/icons/bg-hero.svg'
import FlowComponent from "./Customerinflux";
import drive from '../assets/icons/drive.svg'
const Hero = () => {
 
  
  return (
    <>
      <div>
        <div className="w-full  md:flex justify-center items-center gap-12 mb-3 p-5">
          <div className="md:w-[45%] flex flex-col gap-[36px]">
            <div className="md:flex flex-col md:gap-[20px]">
              <h1 className="text-[30px] md:text-[40px] font-bold  font-spaceGrotesk lh-normal">
                Elevate your brand with stunning mobile and website designs{" "}
              </h1>
              <p className=" text-[12px] md:text-[18px] font-medium font-spaceGrotesk lh-normal p-2">
                Driven by a passion for innovative designs, we craft mobile and
                web designs that captivate and resonate with users.
              </p>
              <div className="md:flex md:gap-3 hidden md:block">
                <Button size="medium" color="success" >
                  <span className="text-[15px]">Send a message</span>
                </Button>

                <button className="bg-white text-[#028A4C] border-2 border-[#028A4C] py-2 px-4 rounded-md  font-spaceGrotesk text-[14px] font-bold">
                  Book a consultant
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[45%]  ">
            <div className="flex justify-between  gap-3 py-3">
              <div className="relative ">
              <img src={laptop} alt=""  className="w-[100%] md:w-[100%] "/>
                <div className="absolute top-[-15px] md:top-[-15px] left-12  md:left-[80px]">
                 <img src={elevateimg} alt=""  className="w-[90px] "/>
                </div>
              </div>
              <div className="bg-[#F0F0F0]  rounded-xl text-center   font-spaceGrotesk md:w-[100%] ">
                <h1 className="text-[40px] sm:text-[40px] md:text-[70px] text-[#02864A] font-bold">230+</h1>
                <p className="text-[10px] md:text-[16px] mb-3 p-2 text-start  font-spaceGrotesk ">Some big companies that we work with, and trust us very much.</p>
                <div className="p-2 md:p-7">
                <FlowComponent users={230}  />

                </div>

              </div>
            </div>
            {/* <div className="relative ">
                <img src={bg} alt="" className="w-[100%] h-[100%]"/>
                <div className=" font-spaceGrotesk lh-[17px]">
                  <img src={eclipse} alt="" className="w-[55%] absolute top-0 start-2  rounded-md"/>
                  <div className="flex absolute start-2 top-6 gap-1 p-3">
                   <img src={line}alt="" /> <span className="text-[#FFFFFF]  text-[10px] ">Drive More Traffic and Sales </span>
                  </div>
              <p className="absolute bottom-9 text-white text-center text-[16px]  lg:text-[32px] p-5 ">Drive more traffic   </p>
              <p className="absolute bottom-2 text-white text-center text-[16px]  lg:text-[32px] p-5 "> and product sales </p>
              <img src={barchart} alt=""  className="absolute end-3 bottom-0 w-[30%]"/>
                </div>
              </div> */}
              <img src={drive} alt="" />
          </div>
          <div className="flex  md:hidden  gap-3 m-3">
                <Button size="medium" color="success" >
                  <span className="text-[15px]">Send a message</span>
                </Button>

                <button className="bg-white text-[#028A4C] border-2 border-[#028A4C] py-2 px-4 rounded-md  font-spaceGrotesk text-[14px] font-bold">
                  Book a consultant
                </button>
              </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
