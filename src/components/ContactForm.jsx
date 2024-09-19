import React, {useState} from "react";
import Button from "../components/Button";
import phone from "../assets/icons/phone icon.png";
import sms from "../assets/icons/sms.png";
import location from "../assets/icons/location.png";
import MessageModal from './MessageModal';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
       // State for modal visibility and type
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalType, setModalType] = useState('success');
   const [modalTitle, setModalTitle] = useState('');  
   const [modalMessage, setModalMessage] = useState('');
   const [loading, setLoading] = useState(false);
 
  // Function to handle success scenario
const handleSuccess = () => {
  setModalType('success'); // Set the correct modal type
  setModalTitle('Message Sent');
  setModalMessage('Thanks for Contacting Us!');
  setIsModalOpen(true);
  setLoading(false);
  reset(); // Clear the form fields
};

// Function to handle error scenario
const handleError = () => {
  setModalType('fail'); // Set the correct modal type
  setModalTitle('Message Failed');
  setModalMessage('Something went wrong. Please try again.');
  setIsModalOpen(true);
  setLoading(false);
};

 
   // Function to close the modal
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
        <div className="bg-[#034D2B]">
            <div className="container lg:w-11/12 m-auto w-full xl:h-[741px] flex justify-center items-center py-12 xl:px-0 px-4">
                <div className=" w-full flex flex-col xl:flex-row justify-center items-center gap-12">
                    <div className="xl:w-[50%] flex flex-col gap-[36px] ">
                        <div className="flex flex-col gap-[20px] text-center xl:text-left">
                            <h1 className='text-white xl:text-[45px] text-[24px] font-bold w-[80%] mx-auto xl:mx-0 font-spaceGrotesk'>
                                Send Us A Message!
                            </h1>
                            <p className='text-white text-[18px] xl:w-[571px] font-medium font-spaceGrotesk'>
                                Do you have any enquiries or need assistance? Fill out the form below and our team will respond to you as quickly as possible to help you address your needs.
                            </p>
                        </div>

                        <div className=" xl:flex flex flex-col gap-[23px] text-center xl:text-left">
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

                    <div className="bg-white xl:w-[50%] w-full h-auto rounded-xl p-6">
                        <form ref={form} onSubmit={handleFormSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="flex flex-col sm:flex-row justify-between gap-4">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label className="text-[18px] font-bold font-spaceGrotesk">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.firstName ? 'border-red-500' : ''}`}
                                        {...register('firstName', { required: 'First name is required' })}
                                    />
                                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                                </div>

                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label className="text-[18px] font-bold font-spaceGrotesk">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.lastName ? 'border-red-500' : ''}`}
                                        {...register('lastName', { required: 'Last name is required' })}
                                    />
                                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between gap-4">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label className="text-[18px] font-bold font-spaceGrotesk">Email</label>
                                    <input
                                        type="email"
                                        placeholder="johndoe@gmail.com"
                                        className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.email ? 'border-red-500' : ''}`}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label className="text-[18px] font-bold font-spaceGrotesk">Phone</label>
                                    <div className="flex">
                                        <select
                                            className={`border-l border-t border-b rounded-l-lg bg-gray-50 text-[14px] p-2 font-spaceGrotesk ${errors.countryCode ? 'border-red-500' : ''}`}
                                            {...register('countryCode', { required: 'Country code is required' })}
                                        >
                                            <option value="+234">+234</option>
                                            {/* <option value="">Code</option> */}
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+91">+91</option>
                                            <option value="+235">+235</option>
                                            <option value="+241">+241</option>
                                            <option value="+244">+244</option>
                                            <option value="+1">+1</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className={`border rounded-r-lg text-[14px] w-full p-2 font-spaceGrotesk ${errors.phone ? 'border-red-500' : ''}`}
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                            })}
                                        />
                                    </div>
                                    {errors.countryCode && <span className="text-red-500 text-sm">{errors.countryCode.message}</span>}
                                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[18px] font-bold font-spaceGrotesk">Message</label>
                                <textarea
                                    placeholder="Type your message"
                                    className={`text-[14px] border rounded-lg p-2 font-spaceGrotesk ${errors.message ? 'border-red-500' : ''}`}
                                    rows="5"
                                    {...register('message', { required: 'Message is required' })}
                                />
                                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                            </div>

                            <div className="flex justify-center xl:justify-start">
                                <Button size="large" color="success" type="submit">
                                    {loading ? "Submiting...." : "Send a Message"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
}

export default ContactForm;
