import React from "react";
import PhoneIcon from "../assets/icons/phone icon.png";
import Sms from "../assets/icons/sms outline.png";
import MiniLoc from "../assets/icons/small loc.png";
import WebImg from "../assets/icons/webimg.png";
import TwitIcon from "../assets/icons/twitter.png";
import YoutubeIcon from "../assets/icons/youtube.png";
import InstaIcon from "../assets/icons/instagram.png";
import LinkedinIcon from "../assets/icons/linkedin.png";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fullPhoneNumber = `${data.countryCode}${data.phone}`;
    console.log("Form Data:", { ...data, fullPhoneNumber });
    alert(`Form Submitted Successfully with phone number: ${fullPhoneNumber}`);
    reset();
  };
  return (
    <div>
      <NavBar />
      <div className="text-center pt-[100px] pb-[35px]">
        <h1 className="font-bold text-[55px]">Contact Us</h1>
        <p className="font-medium text-[24px]">Get in touch with us</p>
      </div>
      <div className="container m-auto xl:w-11/12 xl:border-2 xl:rounded-3xl mb-[71px]">
        <div className="flex flex-col xl:flex-row  xl:w-11/12 xl:h-[660px] lg:gap-[62px] m-auto lg:mt-10">
          <div className="relative overflow-hidden green mb-10 m-auto w-11/12 text-white rounded-3xl bg-[#034D2B] xl:mb-0 xl:w-2/5 xl:h-[660px]">
            <div className="relative z-10">

            <div className="xl:w-[344px] xl:pt-[44px] xl:m-auto ">
              <h1 className="text-center pt-4 font-bold text-[28px] xl:text-start xl:pt-0">
                Contact Information
              </h1>
              <p className="text-center px-4 pb-6 font-medium text-[16px] text-[#FFFFFF99] xl:text-start xl:px-0 xl:pb-0">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>
            {/* list */}
            <div className="m-auto w-9/12  xl:w-[344px] xl:m-auto xl:flex xl:flex-col xl:gap-6 xl:mt-10">

              <div className="one pb-3 flex gap-4 items-center xl:gap-[25px] xl:pb-0 font-medium text-[20px]">
                <img src={PhoneIcon} alt="" />
                <p>+91 98765 43210</p>
              </div>
              <div className="one pb-3 flex items-center gap-4 font-medium text-[20px] xl:pb-0 xl:gap-[25px]">
                <img src={Sms} alt="" />
                <p>domain@paypal.com</p>
              </div>
              <div className="one pb-3 flex items-center gap-4 font-medium text-[20px] xl:pb-0 xl:gap-[25px]">
                <img src={WebImg} alt="" />
                <p>https://paypal.com</p>
              </div>
              <div className="one pb-3 flex items-center gap-4 font-medium text-[20px] xl:pb-0 xl:gap-[25px">
                <img src={MiniLoc} alt="" />
                <p className="xl:w-[211px]">
                  444 St. Yellow Street California, Usa
                </p>
              </div>
            </div>
            <div className="w-8/12 pt-3 pb-6 xl:w-[344px] m-auto flex gap-8 xl:pt-6 lg:justify-start justify-center ">

              <img src={TwitIcon} alt="" />
              <img src={YoutubeIcon} alt="" />
              <img src={InstaIcon} alt="" />
              <img src={LinkedinIcon} alt="" />
            </div>
            </div>
              {/* circle pattern */}
        <div className="absolute z-0 lg:top-[27rem] top-[10rem] lg:left-[12rem] left-[10rem] md:left-[29rem] ">
          <div className="p-10 rounded-full h-[452px] w-[452px] border-[6rem] border-[#034527] bg-[#033e23] flex justify-center"></div>
        </div>
          </div>
          {/*FORM */}
          <div className="bg-white xl:w-[700px] xl:mt-10 xl:h-[576px] w-full h-auto xl:rounded-xl ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-10/12 m-auto flex flex-col gap-6 xl:w-full xl:m-0"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </span>
                  )}

                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      className={`border-2 border-t border-b rounded-l-md bg-gray-50 text-[14px] p-3 font-spaceGrotesk ${
                        errors.countryCode ? "border-red-500" : ""
                      }`}
                      {...register("countryCode", {
                        required: "Country code is required",
                      })}
                    >
                      <option value="+234">+234</option>
                      {/* <option value="">Code</option> */}
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+235">+235</option>
                      <option value="+241">+241</option>
                      <option value="+244">+244</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className={`border rounded-r-lg text-[14px] w-full p-2 font-spaceGrotesk ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                  </div>
                  {errors.countryCode && (
                    <span className="text-red-500 text-sm">
                      {errors.countryCode.message}
                    </span>
                  )}
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-bold font-spaceGrotesk">
                  Message
                </label>
                <textarea
                  placeholder="Type your message"
                  className={`text-[14px] border-2 rounded-lg p-4 font-spaceGrotesk ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex pt-3 justify-center xl:justify-start xl:pt-[73px]">
                <Button size="large" color="success" type="submit">
                  Send a message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
