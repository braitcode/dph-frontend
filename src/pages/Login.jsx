import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from '../assets/google.svg';
import signinimg from '../assets/login.png';
import signuplog from "../assets/signuplogo.svg";
import MessageModal from '../components/MessageModal';
import { useAuth } from '../components/contexts/Auth'; // Import the context hook correctly

const Login = () => {
  const { login } = useAuth(); // Destructure the login function from context
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // State for modal visibility and type
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalTitle, setModalTitle] = useState(''); 
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = async (event) => {
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

    if (!isValid) return;

    try {
      // Attempt login
      const response = await login(username, password);
      if (response) {
        handleSuccess(); // Show success modal
      } else {
        handleError(); // Show error modal
      }
    } catch (error) {
      handleError(error.message); // Show error modal with error message
    }
  };

  const handleSuccess = () => {
    setModalType('success');
    setModalTitle('');
    setModalMessage('Login successful!');
    setIsModalOpen(true);
    // Automatically close the modal and navigate after a delay
    setTimeout(() => {
        setIsModalOpen(false);
        navigate('/contact'); 
      }, 2000); 
  };

  const handleError = (message) => {
    setModalType('fail');
    setModalTitle('Login Failed');
    setModalMessage(message || 'An error occurred. Please try again.');
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.title = "DPH || Log In";
  }, []);

  return (
    <>
      <div className="font-spaceGrotesk lg:grid grid-cols-2">
        {/* form */}
        <div className='flex flex-col w-11/12 m-auto container py-[50px] lg:py-[85px] lg:pl-[90px] lg:pr-[32px]'>
          <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">Welcome back to Dph!</h2>
          <p className='lg:text-[18px] pb-2 text-center lg:text-start text-[16px]'>
            Welcome back! Please enter your details
          </p>
          <form onSubmit={handleLogin}>
            <label className="block font-[500px] text-[16px] lg:text-[18pxpx]">
              Email
              <input
                type="email"
                value={username}
                placeholder='johndoe@gmail.com'
                onChange={(event) => setUsername(event.target.value)}
                className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              {usernameError && <p className="text-red-500 text-[12px] lg:text-[14px]">{usernameError}</p>}
            </label>
            <br />
            <label className="block mb-2 relative font-[500px] text-[16px] lg:text-[18px]">
              Password
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={(event) => setPassword(event.target.value)}
                className="w-full p-2 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              <span
                className="absolute right-3 top-12 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
              {passwordError && <p className="text-red-500 text-[12px] lg:text-[14px]">{passwordError}</p>}
            </label>
            <br />
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="mr-2"
                  style={{ accentColor: '#02864A', width: '18px', height: '18px' }}
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

            <div className="flex items-center my-5 px-[2rem]">
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
              <span className="px-4 font-bold">Or</span>
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
            </div>
            <a href="https://www.google.com">
              <button
                className="w-full h-[55px] font-bold py-3 px-4 rounded-[5px] border-[1px] border-[#9A9696]"
              >
                <img className='inline w-6 h-6 mr-2' src={google} alt="" />
                Continue With Google
              </button>
            </a>
          </form>
          <h3 className="font-[500px] text-[16px] text-center mt-5">
            New User? <span className='text-[#028A4C]'><Link to='/signup'>Sign Up</Link></span>
          </h3>
        </div>

        <div className='h-full hidden lg:block'>
          <img src={signinimg} alt="" className='h-full w-full relative' />
          <img src={signuplog} alt="" className='absolute top-[40px] right-[40px]' />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <MessageModal
            type={modalType}
            title={modalTitle}
            message={modalMessage}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default Login;