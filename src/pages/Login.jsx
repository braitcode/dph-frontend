import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from '../assets/google.svg';
import signinimg from '../assets/login.png';
import signuplog from "../assets/signuplogo.svg";
import { FaCheck } from "react-icons/fa6";
import { useAuth } from '../components/contexts/Auth'; // Import useAuth

const Login = () => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);  // To manage loading state
    const [errors, setErrors] = useState({}); // To handle form errors

    const { login } = useAuth(); // Destructure the login function from useAuth
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "DPH || Log In";
    }, []);

    const validateForm = () => {
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
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            const data = await login(username, password);

            if (!data?.error) {
                setLoading(false);
                navigate("/contact"); // Redirect to home or desired page
            } else {
                setErrors({ form: "Login failed" });
                setLoading(false);
            };
        } catch (err) {
            console.log(err);
            setErrors({ form: err.message });
            setLoading(false);
        }
    };

    return (
        <div className="font-spaceGrotesk lg:grid grid-cols-2">
            <div className='flex flex-col w-11/12 m-auto container py-[50px] lg:py-[85px] lg:pl-[90px] lg:pr-[32px]'>
                <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">Welcome back to Dph!</h2>
                <p className='lg:text-[18px] pb-2 text-center lg:text-start text-[16px]'>
                    Welcome back! Please enter your details
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="block font-[500px] text-[16px] lg:text-[18pxpx]">
                        Email
                        <input
                            type="email"
                            value={username}
                            placeholder='johndoe@gmail.com'
                            onChange={(event) => setUsername(event.target.value)}
                            className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                            }}
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
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                            }}
                        />
                        <span
                            className="absolute right-3 top-12 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <IoEyeOutline />
                            ) : (
                                <IoEyeOffOutline />
                            )}
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
                                style={{
                                    accentColor: '#02864A',
                                    width: '18px',
                                    height: '18px',
                                }}
                            />
                            <label>Remember me</label>
                        </div>

                        <a href="#" className="text-sm text-red-500 font-semibold hover:text-red-700">
                            Forgot password?
                        </a>
                    </div>
                    {errors.form && <p className="text-red-500 text-[12px] lg:text-[14px]">{errors.form}</p>}
                    <button
                        type="submit"
                        className="bg-[#02864A] w-full text-white font-bold py-3 px-4 rounded xl:text-[18px]"
                        disabled={loading}
                    >
                        
                        {loading ? 'Logging in...' : 'Login'}
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
                            <img className='inline w-6 h-6 mr-2' src={google} alt="Google icon" />
                            Continue With Google
                        </button>
                    </a>
                </form>
                <h3 className="font-[500px] text-[16px] text-center mt-5">
                    New User? <span className='text-[#028A4C]'>
                        <Link to='/signup'>Sign Up</Link>
                    </span>
                </h3>
            </div>

            <div className='h-full hidden lg:block'>
                <img src={signinimg} alt="Sign in" className='h-full w-full relative' />
                <img src={signuplog} alt="Sign up logo" className='absolute top-[40px] right-[40px]' />
            </div>
        </div>
    );
};

export default Login;