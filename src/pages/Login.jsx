import React, { useState } from 'react';
import google from '../assets/icons/google.svg'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const Login = () => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Add thisa state to track password visibility

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
        if (isValid) {
            console.log(`Username: ${username}, Password: ${password}`);
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className="container w-11/12 mx-auto font-spaceGrotesk mt-4">
            <h2 className="text-[24px] font-semibold ">Welcome back to Dph!</h2>
            <p className='text-[12px] font-thin pb-4'>
                Welcome back! Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
                <label className="block">
                    Email
                    <input
                        type="email"
                        value={username}
                        placeholder='johndoe@gmail.com'
                        onChange={(event) => setUsername(event.target.value)}
                        className="w-full p-3 text-sm text-gray-700 border-[1.5px] border-gray-500 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    {usernameError && <p className="text-red-500">{usernameError}</p>}
                </label>
                <br />
                <label className="block mb-2 relative">
                    Password
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                        value={password}
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full p-3 border-[1.5px] border-gray-500 text-sm text-gray-700 rounded focus:border-[#02864A]"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                        }}
                    />
                    <span
                        className="absolute right-3 top-10 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
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
                    className="bg-[#02864A] w-full text-white font-bold py-3 px-4 rounded"
                >
                    Login
                </button>
                <div className="flex items-center my-4">
                    <hr className="w-full border-1 border-gray-500 " />
                    <span className="px-4 text-gray-500">0r</span>
                    <hr className="w-full border-1 border-gray-500" />
                </div>
                <a href="https://www.google.com">
                    <button
                        className="w-full font-bold py-3 px-4 rounded-lg border border-gray-300"
                    >
                        <img className='inline w-6 h-6 mr-2  ' src={google} alt="" />
                        Continue With Google
                    </button>
                </a>
            </form>
            <h3 className="font-normal text-center text-gray-500 mt-5">
                New User? <a className='text-[#02864A]' href="#">Sign Up</a>
            </h3>
        </div>
    );
};

export default Login;