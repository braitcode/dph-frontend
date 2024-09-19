import React, { useState, useEffect } from "react";
import signupimg from "../assets/signup.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from "../assets/google.svg";
import logo from "../assets/signuplogo.svg";
import { useAuth } from "../components/contexts/Auth";
import { useNavigate, Link } from "react-router-dom";
import logo2 from "../assets/icons/logo.svg";
import toast from 'react-hot-toast';


const SignUp = () => {


  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Digital Presence Hub - Sign Up";
  });

  const validateForm = () => {
    const newErrors = {};
    if (!fullname.trim()) {
      newErrors.fullname = "Please enter your full name";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Create a personal password";
    } else {
      const pwdTrim = password.trim();
      const hasUpperCase = /[A-Z]/.test(pwdTrim);
      const hasLowerCase = /[a-z]/.test(pwdTrim);
      const hasNumber = /\d/.test(pwdTrim);
      const hasSpecialChar = /[!@#$%^&*]/.test(pwdTrim);

      if (pwdTrim.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        newErrors.password =
          "Password must include uppercase, lowercase, number, and special characters";
      }
    }

    if (!Agree) {
      newErrors.agree = "You must agree to the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const data = await signup(fullname, email, password);

      if (!data?.error) {
        setIsSubmitting(false);
        toast.success("Registration successful! Please log in.");
        navigate("/login");
      } else {
        setErrors({ form: "Registration failed" });
        toast.error("Registration failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message || "An unexpected error occurred. Please try again.");
      setErrors({ form: err.message });
      setIsSubmitting(false);
    }
  };


  const handleGoogleLogin = () => {
    window.location.href = "https://dph-backend.onrender.com/auth/google";
  };

  return (

    <>

      <main className="bg-white h-screen w-full lg:flex font-spaceGrotesk">
        {/* Left section */}
        <section className="lg:w-1/2 p-4 flex flex-col justify-center items-center h-full">
          <div className="overflow-y-auto container mx-auto lg:py-12 lg:px-16" style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}>
            <Link to="/" className="lg:hidden">
              <img src={logo2} alt="Dph Logo" className="w-[100px] mx-auto pb-[6px]" />
            </Link>
            <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">
              Get Started
            </h2>
            <p className="lg:text-[18px] text-center lg:text-start text-[16px]">
              Join us now by filling your details below
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-3 px-1">
              <label className="block font-[500px] text-[18px] lg:text-[23px] my-5">
                Full Name
                <input
                  type="text"
                  value={fullname}
                  placeholder="Full Name"
                  onChange={(event) => setFullName(event.target.value)}
                  className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                {errors.fullname && <p className="text-red-500 text-[12px] lg:text-[14px]">{errors.fullname}</p>}
              </label>

              <label className="block font-[500px] text-[18px] lg:text-[23px] my-5">
                Email
                <input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                {errors.email && <p className="text-red-500 text-[12px] lg:text-[14px]">{errors.email}</p>}
              </label>

              <label className="block relative font-[500px] text-[18px] lg:text-[23px] mt-5 mb-2">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full p-3 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                <span className="absolute right-3 top-12 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">{errors.password}</p>
                )}
              </label>
              <label className="lg:text-[16px] text-[12px] flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={Agree}
                  onChange={(event) => setAgree(event.target.checked)}
                  className="mr-2"
                  style={{ accentColor: "#02864A ", width: "18px", height: "18px" }}
                />
                I agree to the{" "}
                <a href="#" className="decoration-none text-[#02864A]">
                  terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="decoration-none text-[#02864A]">
                  privacy Policies
                </a>
              </label>

              {errors.agree && <p className="text-red-500 text-[12px]">{errors.agree}</p>}
              <br />
              <button
                type="submit"
                className={`bg-[#02864A] w-full h-[55px] rounded-[5px] text-white font-bold p-2 lg:text-[18px] text-[14px]${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Please wait..." : "Sign Up"}
              </button>
              {errors.form && <p className="text-red-500 text-[12px] lg:text-[14px]">{errors.form}</p>}
            </form>

            {/* <div className="flex items-center my-5 px-[2rem]">
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
              <span className="px-4 font-bold">Or</span>
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
            </div>


            <button
              className="w-full h-[55px]  font-bold  p-2 rounded-[5px] border-[1px] border-[#9A9696] cursor-not-allowed lg:text-[18px] text-[16px] text-[#212429]"
              // onClick={handleGoogleLogin}
            >
              <img className="inline w-6 h-6 mr-2 " src={google} alt="" />
              Continue With Google
            </button> */}
            <h3 className="font-normal lg:text-[16px] text-14px text-center text-[#090A0B] mt-5">
              Already a user?{" "}
              <span className="text-[#028A4C]">
                {" "}
                <Link to="/login">Log In</Link>
              </span>
            </h3>
          </div>

        </section>
        {/* right section */}
        <section className="hidden lg:flex lg:w-1/2 h-screen bg-cover  relative" style={{
          backgroundImage: ` url(${signupimg})`, borderTopLeftRadius:
            "10px", borderBottomLeftRadius: "10px"
        }}>
          <Link to='/' className="absolute right-[2rem] top-[2.5rem] ">
            <img src={logo} alt="" />
          </Link>
        </section>
      </main>
    </>
  );
};

export default SignUp;