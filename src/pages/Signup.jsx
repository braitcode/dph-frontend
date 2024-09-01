import React, { useState ,useEffect} from 'react';
import signupimg from '../assets/signup.png'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from '../assets/google.svg'
import signuplog from "../assets/signuplogo.svg";
import orline from '../assets/orline.svg'
import { Link } from "react-router-dom";


const SignUp = () => {

  useEffect(() => {
    document.title = " DPH || Sign Up ";
  });

    const [fullname, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState(null);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [Agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate input fields
        let isValid = true;
        if (fullname.trim() === '') {
          setFullNameError('Please enter your Full name');
          isValid = false;
      } else {
          setFullNameError(null);
      }
        if (email.trim() === '') {
           setEmailError('Please enter your email');
            isValid = false;
        } else {
            setEmailError(null);
        }
        if (password.trim() === '') {
            setPasswordError('Please create a personal password');
            isValid = false;
        } else {
            setPasswordError(null);
        }
    };

    return (
        <>
        
        <div className="bg-green-500  font-spaceGrotesk lg:flex gap-3">
          <div className='lg:w-[50%] px-[30px] pt-[30px] pb-[30px] lg:pb-3 lg:pt-[32px]  w-full flex flex-col  lg:pl-[100px] lg:pr-[32px] container m-auto '>
          <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px] pb-[8px] ">Get Started</h2>
            <p className='lg:text-[18px]  pb-[32px] text-center lg:text-start text-[16px] '>
              Join us now by filling your details below
            </p>
            <form onSubmit={handleSubmit}>
            <label className="block font-[500px] text-[18px] lg:text-[23px] ">
                   Full Name
                    <input
                        type="text"
                        value={fullname}
                        placeholder='John Doe'
                        onChange={(event) => setFullName(event.target.value)}
                        className="w-full p-2 text-sm lg:text-[18px] text-gray-700 border-[1.5px] border-gray-500 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    {fullNameError && <p className="text-red-500 xl:text-[14px] text-[12px]">{fullNameError}</p>}
                </label>
                <br />
                <label className="block font-[500px] text-[18px] lg:text-[23px] ">
                    Email
                    <input
                        type="email"
                        value={email}
                        placeholder='johndoe@gmail.com'
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full p-2 text-sm lg:text-[18px] text-gray-700 border-[1.5px] border-gray-500 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    {emailError && <p className="text-red-500 xl:text-[14px] text-[12px]">{emailError}</p>}
                </label>
                <br />
                <label className="block relative  font-[500px] text-[18px] lg:text-[23px] lg:pb-[20px] ">
                    Password
                    <input
                        type={showPassword ? 'text' : 'password'} 
                        value={password}
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full p-2 border-[1.5px] border-gray-500 text-sm lg:text-[18px] text-gray-700 rounded focus:border-[#02864A]"
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
                    {passwordError && <p className="text-red-500 xl:text-[14px] text-[12px]">{passwordError}</p>}
                </label>
               
                <div className="flex items-center lg:pb-[24px] xl:text-[16px]">
                        <input
                            type="checkbox"
                            checked={Agree}
                            onChange={(event) => setAgree(event.target.checked)}
                            className="mr-2  checked:bg-[#02864A]  "
                        />
                        <label>I agree to the terms of services and privacy Policies</label>
                    </div>
                <button
                    type="submit"
                    className="bg-[#02864A] w-full text-white font-bold py-2 px-2 rounded lg:text-[18px] text-[14px]"
                >
                    Login
                </button>
                <br />
                
                <img src={orline} alt="" className='my-4  xl:[w-full] w-[100%] ' />
                <a href="https://www.google.com">
                    <button
                        className="w-full font-bold py-2 px-2 rounded-lg border border-gray-300 lg:text-[18px] text-[16px] text-[#212429]"
                    >
                        <img className='inline w-6 h-6 mr-2 ' src={google} alt="" />
                        Continue With Google
                    </button>
                </a>
            </form>
            <h3 className="font-normal lg:text-[16px] text-14px text-center text-[#090A0B] mt-5">
              Already a user? <span className='text-[#02864A]'>    <Link  to='/login' >Log In</Link></span>
           
            </h3>
          </div>
        
          <div  className='lg:w-[50%] h-full hidden lg:block' >
            <img src={signupimg} alt="" className=' h-full  w-full relative'/>
            <img src={signuplog} alt="" className='absolute top-[20px] right-[30px] w-[10%]' />
          </div>
        </div>
        
        </>
    );
};

export default SignUp;