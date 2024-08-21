import React from "react";
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
import NavBar from "./NavBar";
const Hero = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="w-full  md:flex justify-center items-center gap-12 md:mb-[2rem] p-5 mt-[5rem]">
          {/* left div */}
          <div className="md:w-[45%] flex flex-col gap-[36px]">
            <div className="md:flex flex-col md:gap-[20px]">
              <h1 className="text-[30px] md:text-[40px] font-bold  font-spaceGrotesk lh-normal">
                Elevate your brand with stunning mobile and website designs
              </h1>
              <p className=" text-[12px] md:text-[18px] font-medium font-spaceGrotesk lh-normal p-2 hidden md:block">
                Driven by a passion for innovative designs, we craft mobile and
                web designs that captivate and resonate with users.
              </p>
              <div className="md:flex md:gap-3 hidden md:block">
                <Button size="medium" color="success">
                  <span className="text-[15px]">Send a message</span>
                </Button>
                <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
 <Button size="medium" color="white">
              <span className="text-[15px]">Send a message</span>
            </Button>
                </div>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className="md:w-[45%] mt-3 ">
            <div className="flex justify-between  gap-3 py-3">
              <div className="relative z-[-2]">
                <img src={laptop} alt="" className="w-[350px] md:w-[450px] " />
                <div className="absolute top-[-15px] md:top-[-15px] left-12  md:left-[80px]">
                  <img src={elevateimg} alt="" className="w-[90px] " />
                </div>
              </div>
              <div className="bg-[#F0F0F0]  rounded-xl text-center   font-spaceGrotesk  w-[350px]">
                <h1 className="text-[40px] sm:text-[40px] md:text-[70px] text-[#02864A] font-bold">
                  230+
                </h1>
                <p className="text-[10px]  mb-3  text-start  font-spaceGrotesk ">
                  Some big companies that we work with, and trust us very much.
                </p>
                <div className="p-2 md:p-7">
                  <FlowComponent users={230} />
                </div>
              </div>
            </div>

            <img src={drive} alt="" />
          </div>
         
              <p className=" text-[12px] md:text-[18px] font-medium font-spaceGrotesk lh-normal p-2 md:hidden block">
                Driven by a passion for innovative designs, we craft mobile and
                web designs that captivate and resonate with users.
              </p>
          <div className="flex  md:hidden  gap-3 m-3">
            <Button size="medium" color="success">
              <span className="text-[15px]">Send a message</span>
            </Button>
            <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
 <Button size="medium" color="white">
              <span className="text-[15px]">Send a message</span>
            </Button>
                </div>
          </div>
        </div>

        <div className="flex justify-between bg-black text-white h-[4rem] p-5 py-6 md:py-5 font-spaceGrotesk text-[10px] md:text-[19px] lg:px-12 md:px-7 ">
          <span>Branding</span> <img src={dot} alt="" className="w-[5px]" />
          <span>Web Development</span>{" "}
          <img src={dot} alt="" className="w-[5px]" />
          <span>Consultation</span> <img src={dot} alt="" className="w-[5px]" />
          <span>Mobile Development</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
