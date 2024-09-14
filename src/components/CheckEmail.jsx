import React from 'react'
import image from '../assets/login.png'
import logo from '../assets/signuplogo.svg'
import { Link } from 'react-router-dom';
import logo2 from "../assets/icons/logo.svg";
import { GoArrowLeft } from "react-icons/go";



const CheckEmail = () => {
    const openEmail = () => {
        // You can direct to a preferred email provider or provide options
        window.open("https://mail.google.com/", "_blank"); // Opens Gmail in a new tab
      };

  return (
    <>
    <main className='w-full max-h-fit font-spaceGrotesk '>
        <section className='grid lg:grid-cols-2 py-[50px] lg:py-0'>
            <div className='flex flex-col justify-center p-10 space-y-7 lg:px-20 container mx-auto'>
                <Link to="/" className=" lg:hidden">
                    <img src={logo2} alt="Dph Logo" className=" w-[100px] mx-auto" />
                </Link>
                <div className='text-center lg:text-start lg:space-y-3 lg:w-[70%]'>
                    <h1 className='text-2xl font-bold'>Check your Email</h1>
                    <p>We have sent a password recovery instructions to your email.</p>
                </div>
                <div>
                <button onClick={openEmail} className='bg-[#02864A] text-white p-3 w-full rounded-md font-bold '>Open Email</button>
                <Link to="/login">
                <p className='flex items-center justify-center mt-2 font-semibold'><GoArrowLeft />Back to Login</p>
                </Link>
                </div>
            </div>
            <div className='hidden lg:block'style={{backgroundImage:`url('${image}')`, height:'100vh',width:'100%', backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
            <Link to='/' className="absolute right-[5.875rem] top-[2.8rem] lg:right-[3rem] lg:top-[2.5rem] xl:right-[3rem] xl:top-[2.8rem]">
            <img src={logo} alt="Dph Logo" />
          </Link>
            </div>
        </section>
    </main>
    </>
  )
}

export default CheckEmail