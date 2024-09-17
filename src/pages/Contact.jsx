import React, { useState } from "react";
import PhoneIcon from "../assets/icons/phone icon.png";
import Sms from "../assets/icons/sms outline.png";
import MiniLoc from "../assets/icons/small loc.png";
import WebImg from "../assets/icons/webimg.png";
import TwitIcon from "../assets/icons/twitter.png";
import YoutubeIcon from "../assets/icons/youtube.png";
import InstaIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png"                                      
import LinkedinIcon from "../assets/icons/linkedin.png";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MessageModal from "../components/MessageModal";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalTitle, setModalTitle] = useState(''); 
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuccess = () => {
    setModalType('success'); 
    setModalTitle('Message sent');
    setModalMessage('Thank you for contacting us!')
    setIsModalOpen(true);
    setLoading(false);
    reset(); // Clear the form fields
  };

  const handleError = () => {
    setModalType('fail'); 
    setModalTitle('Message failed');
    setModalMessage('Something went wrong. Please try again.');
    setIsModalOpen(true);
    setLoading(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // email
  const form = useRef();
 
  const { register, handleSubmit: handleFormSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form submitted with data: ", data);
  
    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        "service_pori0xy", 
        "template_3xe8tgc", 
        form.current, 
        "ZnUpE7zWi6n_KeSea" // publicKey as the last argument
      );
      console.log("Email sent successfully.");
  
      // Optionally, send data to Google Sheets API
      const response = await fetch('https://v1.nocodeapi.com/peace_b/google_sheets/hrSeWiUQrDUtoEFF?tabId=Sheet1', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[data.firstName, data.lastName, data.email, data.phone, data.message, new Date().toLocaleString()]]),
      });
      await response.json();
  
      handleSuccess();
    } catch (err) {
      console.log(err);
      handleError();
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <NavBar />
      <div className="pb-5 pt-20 text-center xl:pt-[100px] xl:pb-[35px]">
        <h1 className="font-bold text-[30px] lg:font-bold lg:text-[55px] xl:pt-10">Contact Us</h1>
        <p className="hidden lg:block lg:font-medium lg:text-[24px] xl:pb-5">Get in touch with us</p>
      </div>
      <div className="container m-auto xl:w-11/12 lg:w-11/12 lg:border-2 lg:rounded-3xl xl:border-2 xl:rounded-3xl mb-[71px]">
        <div className="flex flex-col lg:flex-row lg:w-11/12 lg:h-[660px] lg:gap-[32px] lg:items-center xl:flex-row xl:w-11/12 xl:h-[660px] xl:gap-[62px] xl:items-center m-auto">
          <div className="relative py-3 overflow-hidden m-auto green mb-10 w-11/12 text-white rounded-3xl bg-[#034D2B] md:w-4/5 lg:py-5 lg:w-2/5 lg:h-[550px] lg:m-auto xl:mb-0 xl:w-2/5 xl:h-[610px] xl:m-0">
            <div className="relative z-10">
              <div className="w-[300px] m-auto xl:w-[344px] xl:pt-[44px] xl:m-auto ">
                <h1 className="text-[21px] font-medium text-center pt-4 lg:font-bold lg:text-[28px] xl:text-start xl:pt-0">
                  Contact Information
                </h1>
                <p className="text-center px-6 pb-6 font-medium text-[16px] text-[#FFFFFF99] xl:text-start xl:px-0 xl:pb-0">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>
              </div>
              {/* list */}
              <div className="m-auto w-[230px] md:w-[500px] lg:w-[320px] xl:w-[344px] xl:m-auto xl:flex xl:flex-col xl:gap-6 xl:mt-10">
                <div className="one pb-3 flex gap-4 items-center md:justify-center lg:justify-start lg:pl-10 xl:pl-0 xl:justify-start xl:gap-[25px] xl:pb-0 font-medium text-[20px]">
                  <img src={PhoneIcon} alt=""/>
                  <p>+91 98765 43210</p>
                </div>
                <div className="one pb-3 flex items-center md:justify-center lg:justify-start lg:pl-10 gap-4 font-medium text-[20px] xl:pl-0 xl:justify-start xl:pb-0 xl:gap-[25px]">
                  <img src={Sms} alt="" />
                  <p>domain@paypal.com</p>
                </div>
                <div className="one pb-3 flex items-center md:justify-center lg:justify-start lg:pl-10 gap-4 font-medium text-[20px] xl:pl-0 xl:justify-start xl:pb-0 xl:gap-[25px]">
                  <img src={WebImg} alt="" />
                  <p>https://paypal.com</p>
                </div>
                <div className="one pb-3 flex items-center md:justify-center lg:justify-start lg:pl-10 gap-4 font-medium text-[20px] xl:pl-0 xl:justify-start xl:pb-0 xl:gap-[25px]">
                  <img src={MiniLoc} alt="" />
                  <p className="xl:w-[211px]">
                  1, Dph cresent, lagos Nigeria
                  </p>
                </div>
              </div>
              <div className="w-[230px] justify-start pt-3 pb-6 m-auto flex gap-8 md:justify-center lg:w-[240px] lg:justify-start xl:pt-6  xl:m-auto xl:w-[340px]">
                <img src={TwitIcon} alt="" />
                <img src={YoutubeIcon} alt="" />
                <img src={InstaIcon} alt="" />
                <img src={LinkedinIcon} alt="" />
                <img src={facebookIcon} alt="" />
              </div>
            </div>
            {/* circle pattern */}
            <div className="absolute z-0 lg:top-[22rem] lg:left-[10rem] xl:top-[25rem] xl:left-[18rem] top-[16rem] left-[13rem] md:top-[12rem] md:left-[27rem]">
              <div className="p-10 rounded-full h-[352px] w-[352px] lg:h-[452px] lg:w-[452px] border-[4rem] lg:border-[6rem] border-[#034527] bg-[#033e23] flex justify-center"></div>
            </div>
          </div>
          {/* FORM */}
          <div className="bg-white xl:w-[700px] lg:w-full xl:h-[535px] w-full h-auto xl:rounded-xl">
            <form
             ref={form}
              onSubmit={handleFormSubmit(onSubmit)}
              className="w-10/12 xl:w-full xl:h-[535px] m-auto flex flex-col gap-6 xl:m-0 relative"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-[48%] flex flex-col gap-2 relative">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    First Name
                  </label>
                  <input
                  name="firstName"
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2 relative">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Last Name
                  </label>
                  <input
                  name="lastName"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full sm:w-[48%] flex flex-col gap-2 relative">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`border-2 text-[14px] p-3 rounded-md font-spaceGrotesk ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="w-full sm:w-[48%] flex flex-col gap-2 relative">
                  <label className="text-[18px] font-bold font-spaceGrotesk">
                    Phone
                  </label>
                  <div className="flex">
                    <select
                      {...register("countryCode", {
                        required: "Country code is required",
                      })}
                      className={`border-2 border-t border-b rounded-l-md bg-gray-50 text-[14px] p-3 font-spaceGrotesk ${
                        errors.countryCode ? "border-red-500" : ""
                      }`}
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                      <option value="+235">+235</option>
                      <option value="+241">+241</option>
                      <option value="+244">+244</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter your phone no"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className={`border rounded-r-lg text-[14px] w-full p-2 font-spaceGrotesk ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.countryCode && (
                    <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                      {errors.countryCode.message}
                    </span>
                  )}
                  {errors.phone && (
                    <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-[18px] font-bold font-spaceGrotesk">
                  Message
                </label>
                <textarea
                  placeholder="Type your message"
                  {...register("message", { required: "Message is required" })}
                  className={`text-[14px] max-h-[130px] border-2 rounded-lg p-4 font-spaceGrotesk ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  rows="5"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm absolute top-full left-0 mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex pt-3 justify-center xl:justify-start xl:pt-[60px]">
                <Button size="large" color="success" type="submit">
                  {loading ? "Submitting...." : "Send a Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
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

export default Contact;
