import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import signupimg from '../assets/sigupimg.svg'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from '../assets/google.svg'
import signinimg from '../assets/signinimg.svg'
import signuplog from "../assets/signuplogo.svg";
import orline from '../assets/orline.svg'
const Login = () => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    

    useEffect(() => {
        document.title = " DPH || Log In ";
      });
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate input fields
        let isValid = true;
        if (username.trim() === '') {
            setUsernameError('Please enter your email');
            isValid = false;
        } else {
            setUsernameError(null);
        }
        if (password.trim() === '') {
            setPasswordError('Please enter your password');
            isValid = false;
        } else {
            setPasswordError(null);
        }
    };

    return (
        <div className="w-full font-spaceGrotesk lg:flex gap-3">
          
          <div className='lg:w-[50%] px-[30px] pt-[30px] pb-[30px] lg:pb-3 lg:pt-[74px]  w-full flex flex-col  lg:pl-[100px] lg:pr-[32px] container m-auto '>
          <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px] ">Welcome back to Dph!</h2>
            <p className='lg:text-[18px]  pb-2 text-center lg:text-start text-[16px] '>
                Welcome back! Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
                <label className="block font-[500px] text-[18px] lg:text-[23px]">
                    Email
                    <input
                        type="email"
                        value={username}
                        placeholder='johndoe@gmail.com'
                        onChange={(event) => setUsername(event.target.value)}
                        className="w-full p-3 text-sm lg:text-[18px] text-gray-700 border-[1.5px] border-gray-500 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    {usernameError && <p className="text-red-500">{usernameError}</p>}
                </label>
                <br />
                <label className="block mb-2 relative  font-[500px] text-[18px] lg:text-[23px]">
                    Password
                    <input
                        type={showPassword ? 'text' : 'password'} 
                        value={password}
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full p-3 border-[1.5px] border-gray-500 text-sm lg:text-[18px] text-gray-700 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    <span
                        className="absolute right-3 top-10 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)} 
                    >
                        {showPassword ? (
                            <IoEyeOutline />
                        ) : (
                            <IoEyeOffOutline />
                        )}
                    </span>
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </label>
                <br />
                <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(event) => setRememberMe(event.target.checked)}
                            className="mr-2"
                        />
                        <label>Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-red-500 font-semibold hover:text-red-700">
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="bg-[#02864A] w-full text-white font-bold py-3 px-4 rounded xl:text-[18px]"
                >
                    Login
                </button>
                <img src={orline} alt="" className='my-5  xl:[w-full] w-[100%] lg:px-[43px] px-[20px]' />
                <a href="https://www.google.com">
                    <button
                        className="w-full font-bold py-3 px-4 rounded-lg border border-gray-300"
                    >
                        <img className='inline w-6 h-6 mr-2 ' src={google} alt="" />
                        Continue With Google
                    </button>
                </a>
            </form>
            <h3 className="font-normal text-center text-gray-500 mt-5">
                New User? <span className='text-[#02864A]'>    <Link  to='/SignUp' >Sign Up</Link></span>
            </h3>
          </div>
        
          <div  className='lg:w-[50%] h-full hidden lg:block' >
            <img src={signinimg} alt="" className=' h-full object-contain w-full relative'/>
            <img src={signuplog} alt="" className='absolute top-[40px] right-[40px]' />
          </div>
        </div>
    );
};

export default Login;