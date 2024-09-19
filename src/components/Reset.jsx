import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import signinimg from '../assets/login.png';
import signuplogo from "../assets/signuplogo.svg";
import MessageModal from '../components/MessageModal';
import { GoArrowLeft } from "react-icons/go";
import axios from 'axios';
import toast from 'react-hot-toast';

const Reset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('success');
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const { token } = useParams();
    const navigate = useNavigate();

    // const handleSuccess = () => {
    //     setModalType('success');
    //     setModalTitle('Success');
    //     setModalMessage('Password Reset Successful!');
    //     setIsModalOpen(true);
    //     setTimeout(() => {
    //         setIsModalOpen(false);
    //         navigate('/login');
    //     }, 700);
    // };

    const handleError = (message) => {
        setModalType('fail');
        setModalTitle('Reset Password Failed');
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword.length < 8) {
            handleError('Password must be at least 8 characters');
            return;
        }

        if (!/^[A-Z]/.test(newPassword)) {
            handleError('Password must start with an uppercase letter');
            return;
        }

        if (!/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(newPassword)) {
            handleError('Password must contain at least one special character');
            return;
        }

        if (newPassword !== confirmPassword) {
            handleError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`/auth/reset-password/${token}`,
                { newPassword }, {
                // headers: {
                //   Authorization: `Bearer ${token}`,  // Send Bearer token in headers
                // }
            });
            toast.success(response.data.message);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error("Error resetting password:", error);
            const errorMessage = error?.response?.data?.message || error.message || "An unknown error occurred";
            toast.error(`Failed to reset password: ${errorMessage}`);
        }
    };
    useEffect(() => {
        document.title = "DPH || Reset Password";
    }, []);

    return (
        <>
            <div className="font-spaceGrotesk lg:grid grid-cols-2">
                <div className='flex flex-col w-11/12 m-auto container py-[50px] lg:py-[85px] lg:pl-[90px] lg:pr-[32px]'>
                    <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">Reset Password</h2>
                    <p className='lg:text-[18px] pb-[26px] text-center lg:text-start text-[16px]'>
                        Enter your new password to reset your password.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2 relative font-[500px] text-[16px] lg:text-[18px]">
                            New Password
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={newPassword}
                                placeholder='Password'
                                onChange={(event) => setNewPassword(event.target.value)}
                                className="w-full p-2 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                            <span
                                className="absolute right-3 top-11 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                            </span>
                            {newPassword && newPassword.length < 8 && (
                                <p className="text-red-500 text-[12px] lg:text-[14px]">
                                    Password must be at least 8 characters long
                                </p>
                            )}
                            {newPassword && !/^[A-Z]/.test(newPassword) && (
                                <p className="text-red-500 text-[12px] lg:text-[14px]">
                                    Password must start with an uppercase letter
                                </p>
                            )}
                            {newPassword && !/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(newPassword) && (
                                <p className="text-red-500 text-[12px] lg:text-[14px]">
                                    Password must contain at least one special character
                                </p>
                            )}
                        </label>
                        <br />
                        <label className="block mb-2 relative font-[500px] text-[16px] lg:text-[18px]">
                            Confirm Password
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                placeholder='Confirm Password'
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className="w-full p-2 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                                style={{ outline: 'none', boxShadow: 'none' }}
                            />
                            <span
                                className="absolute right-3 top-11 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                            </span>
                            {confirmPassword && newPassword !== confirmPassword && (
                                <p className="text-red-500 text-[12px] lg:text-[14px]">
                                    Passwords do not match
                                </p>
                            )}
                        </label>
                        <br />
                        <button
                            type="submit"
                            className="bg-[#02864A] w-full text-white font-bold py-3 px-4 rounded xl:text-[18px]"
                        >
                            Click Here to Confirm
                        </button>
                    </form>
                    <Link to="/login">
                        <button className="w-full text-black font-bold px-4 rounded xl:text-[18px] mt-4">
                            <GoArrowLeft className='inline mb-[5px]' /> Back to Login
                        </button>
                    </Link>
                </div>
                <div className='hidden lg:block'
                    style={{
                        backgroundImage: `url(${signinimg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '100vh'
                    }}
                >
                    <Link to='/'>
                        <img src={signuplogo} alt="Signup Logo" className='absolute top-[40px] right-[40px]' />
                    </Link>
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
        </>
    );
};

export default Reset;