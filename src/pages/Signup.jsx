import React, { useState, useEffect } from "react";
import signupimg from "../assets/signup.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from "../assets/google.svg";
import logo from "../assets/signuplogo.svg";
import { useAuth } from "../components/contexts/Auth";
import { useNavigate, Link } from "react-router-dom";
import logo2 from "../assets/icons/logo.svg";

const SignUp = () => {

  const customScrollbarStyle = {
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none', 
  };

  const [fullname, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [Agree, setAgree] = useState("");
  const [AgreeError, setAgreeError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    document.title = " Digital Presence Hub-Sign Up ";
  });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    if (fullname.trim() === "") {
      setFullNameError("Please enter your Full name");
      isValid = false;
    } else {
      setFullNameError(null);
    }
    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else {
      setEmailError(null);
    }
    if (password.trim() === "") {
      setPasswordError("Create a personal password");
      isValid = false;
    } else {
      setPasswordError(null);
    }
    if (!Agree) {
      setAgreeError(" Agree to continue");
      isValid = false;
    } else {
      setAgreeError(null);
    }
    return isValid;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = await signup(fullname, email, password);

      if (!data?.error) {
        setLoading(false);
        navigate("/login");
      } else {
        setErrors({ form: "Registration failed" });
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErrors({ form: err.message });
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://dph-backend.onrender.com/api/auth/google";
  };
  console.log(fullname);

  return (
    <>
      <main className="bg-white h-screen w-full lg:flex font-spaceGrotesk">
  {/* left section */}     
     <section className="lg:w-1/2 p-4 flex flex-col justify-center items-center h-full ">
     <div className="overflow-y-auto container mx-auto lg:py-12 lg:px-16 " style={{
            ...customScrollbarStyle,
            WebkitOverflowScrolling: 'touch', 
          }}>
       
            <Link to="/" className=" lg:hidden  ">
              <img
                src={logo2}
                alt="Dph Logo"
                className=" w-[100px] mx-auto pb-[6px]"
              />
            </Link>
            <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">
            Get Started
            </h2>
            <p className="lg:text-[18px]  text-center lg:text-start text-[16px]">
            Join us now by filling your details below
            </p>

           {/* form starts here */}
            <form onSubmit={handleSubmit}  className="space-y-5 mt-3  px-1">
              <label className="block font-[500px] text-[18px] lg:text-[23px]">
                Full Name
                <input
                  type="text"
                  value={fullname}
                  placeholder="John Doe"
                  onChange={(event) => setFullName(event.target.value)}
                  className="w-full p-3 h-[55px] text-sm text-[14px] lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
                {fullNameError && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">
                    {fullNameError}
                  </p>
                )}
              </label>
              <label className="block font-[500px] text-[18px] lg:text-[23px] ">
                Email
                <input
                  type="email"
                  value={email}
                  placeholder="johndoe@gmail.com"
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full p-3 h-[55px] text-sm lg:text-[18px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
                {emailError && (
                  <p className="text-red-500 xl:text-[14px] text-[12px]">
                    {emailError}
                  </p>
                )}
              </label>
           
              <label className="block relative font-[500px] text-[18px] lg:text-[23px] ">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full p-3 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[18px] text-gray-700  focus:border-[#02864A]"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
                <span
                  className="absolute right-3 top-12 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
                {passwordError && (
                  <p className="text-red-500 xl:text-[14px] text-[12px]">
                    {passwordError}
                  </p>
                )}
              </label>

              <div className="flex items-center  pb-[24px] xl:text-[16px]">
                <input
                  type="checkbox"
                  checked={Agree}
                  onChange={(event) => setAgree(event.target.checked)}
                  className="mr-2"
                  style={{
                    accentColor: "#02864A ",
                    width: "18px",
                    height: "18px",
                  }}
                />
                <div className="flex flex-col">
                  <label className="lg:text-[16px] text-[12px]">
                    I agree to the{" "}
                    <a href="#" className="decoration-none text-[#02864A]">
                      {" "}
                      terms of Services
                    </a>{" "}
                    and{" "}
                    <a href="#" className="decoration-none text-[#02864A]">
                      privacy Policies
                    </a>{" "}
                  </label>
                  {AgreeError && (
                    <p className="text-red-500 text-[12px]">{AgreeError}</p>
                  )}
                </div>
              </div>
              {errors.form && (
                <p className="text-red-500 text-[12px] lg:text-[14px]">
                  {errors.form}
                </p>
              )}
              <button
                type="submit"
                className="bg-[#02864A] w-full h-[55px] rounded-[5px] text-white font-bold p-2  lg:text-[18px] text-[14px]"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Sign Up"}
              </button>
             
            </form>
             <div className="flex items-center my-5 px-[2rem]">
                <hr className="w-full border-[2px] border-[#A4ADB6]" />
                <span className="px-4 font-bold">0r</span>
                <hr className="w-full border-[2px] border-[#A4ADB6]" />
              </div>

              <button
                className="w-full h-[55px]  font-bold  p-2 rounded-[5px] border-[1px] border-[#9A9696] lg:text-[18px] text-[16px] text-[#212429]"
                onClick={handleGoogleLogin}
              >
                <img className="inline w-6 h-6 mr-2 " src={google} alt="" />
                Continue With Google
              </button>
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
        <section className="hidden lg:flex lg:w-1/2 h-screen bg-cover  relative" style={{ backgroundImage:` url(${signupimg})`, borderTopLeftRadius:
      "10px", borderBottomLeftRadius: "10px"}}>
    <Link to='/' className="absolute right-[2rem] top-[2.5rem] ">
       <img src={logo} alt="" />
      </Link>
   </section>
      </main>
    </>
  );
};

export default SignUp;






