import React, { useState } from 'react';
import image from '../assets/login.png';
import logo from '../assets/signuplogo.svg';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo2 from "../assets/icons/logo.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Basic email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError(null);
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/auth/forgot-password', { email });
      toast.success(response.data.message || "If the email is registered, a reset link will be sent.");
      setTimeout(() => {
        navigate('/check');
      }, 2000);
    } catch (error) {
      console.error("Error sending reset password email:", error);
      toast.error("Failed to send reset password email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className='w-full max-h-fit font-spaceGrotesk '>
        <section className='grid lg:grid-cols-2 py-[50px] lg:py-0'>
          <div className='flex flex-col justify-center p-10 space-y-7'>
            <Link to="/" className=" lg:hidden">
              <img src={logo2} alt="Dph Logo" className=" w-[100px] mx-auto" />
            </Link>
            <div className='text-center lg:text-start lg:space-y-3'>
              <h1 className='text-2xl font-bold'>Forgot Password</h1>
              <p>Enter your email address to reset your password</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <label className="block font-[500px] text-[16px] lg:text-[23px] ">
                Email
                <input
                  type="text"
                  value={email}
                  placeholder='johndoe@mail.com'
                  onChange={(event) => setEmail(event.target.value)}
                  style={{
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  className="w-full p-3 h-[55px] text-sm text-[14px] lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                />
                {emailError && <p className="text-red-500 text-[12px] lg:text-[14px]">{emailError}</p>}
              </label>
              <button
                type="submit"
                className={`bg-[#02864A] text-white p-3 mt-5 w-full rounded-md font-bold border border-transparent ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </button>
              <Link to="/login">
                <p className='flex items-center gap-2 justify-center mt-2'><GoArrowLeft />Go Back</p>
              </Link>
            </form>
          </div>
          <div className='hidden lg:block' style={{ backgroundImage: `url('${image}')`, height: '100vh', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Link to='/' className="absolute right-[5.875rem] top-[2.8rem] lg:right-[3rem] lg:top-[2.5rem] xl:right-[3rem] xl:top-[2.8rem]">
              <img src={logo} alt="Dph Logo" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgotPassword;
