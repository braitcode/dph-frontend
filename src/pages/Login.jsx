import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import google from "../assets/google.svg";
import signinimg from "../assets/login.png";
import logo from "../assets/signuplogo.svg";
import logo2 from "../assets/icons/logo.svg";
import { useAuth } from "../components/contexts/Auth"; //context hook 

const Login = () => {
  const { login } = useAuth(); // Destructure the login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else {
      const pwdTrim = password.trim();
      if (pwdTrim.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   try {
  //     setLoading(true);
  //     const data = await login(email, password);

  //     if (!data?.error) {
  //       setLoading(false);
  //       navigate("/");
  //     } else {
  //       setErrors({ form: "Login failed" });
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setErrors({ form: err.message });
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const data = await login(email, password);

      if (!data?.error) {
        setLoading(false);
        navigate("/");
      } else {
        // If an error occurs during login, display the specific error message
        setErrors({ form: data.error || "Login failed. Please try again." });
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setErrors({ form: err.message || "An unexpected error occurred. Please try again." });
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Digital Presence Hub-Log In";
  }, []);

  return (
    <>
      <main className="font-spaceGrotesk py-5 lg:py-0 ">
        <div className="bg-white w-full h-screen flex">
          {/* left section */}
          <section className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-center container mx-auto">
            <Link to="/" className=" lg:hidden  ">
              <img
                src={logo2}
                alt="Dph Logo"
                className=" w-[100px] mx-auto pb-[8px] "
              />
            </Link>
            <h2 className="lg:text-[28px] font-semibold text-center lg:text-start text-[23px]">
              Welcome back to Dph!
            </h2>
            <p className="lg:text-[18px] pb-2 text-center lg:text-start text-[16px]">
              Welcome back! Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
              <label className="block font-[500px] text-[18px] lg:text-[23px]">
                Email
                <input
                  type="email"
                  value={email}
                  placeholder="example@mail.com"
                  onChange={handleEmailChange}
                  className="w-full p-3 h-[55px] text-sm lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">
                    {errors.email}
                  </p>
                )}
              </label>
              <br />
              <label className="block relative font-[500px] text-[18px] lg:text-[23px]">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="password"
                  onChange={handlePasswordChange}
                  className="w-full p-2 h-[55px] rounded-[5px] border-[1px] border-[#9A9696] text-sm lg:text-[16px] text-gray-700 focus:border-[#02864A]"
                  style={{ outline: "none", boxShadow: "none" }}
                />
                <span
                  className="absolute right-3 top-12 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-[12px] lg:text-[14px]">
                    {errors.password}
                  </p>
                )}
              </label>

              <div className=" mb-4 text-end">
                <Link to="/forgot">
                  <span className="text-sm text-red-500 font-semibold hover:text-red-700 ">
                    Forgot password?
                  </span>
                </Link>
              </div>
              <button
                type="submit"
                className="bg-[#02864A] w-full text-white font-bold py-3 px-4 rounded xl:text-[18px]"
                disabled={loading}
              >
                {loading ? "Please wait..." : "Login"}
              </button>
              {errors.form && (
                <p className="text-red-500 text-center mt-4">
                  {errors.form}
                </p>
              )}
            </form>
            {/* google */}
            <div className="flex items-center my-3 px-[2rem]">
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
              <span className="px-4 font-bold">Or</span>
              <hr className="w-full border-[2px] border-[#A4ADB6]" />
            </div>
            <a href="https://www.google.com">
              <button className="w-full h-[55px] font-bold py-3 px-4 rounded-[5px] border-[1px] border-[#9A9696]">
                <img className="inline w-6 h-6 mr-2" src={google} alt="" />
                Continue With Google
              </button>
            </a>
            {/* new user prompt */}
            <h3 className="font-[500px] text-[16px] text-center mt-5">
              New User?{" "}
              <span className="text-[#028A4C]">
                <Link to="/signup">Sign Up</Link>
              </span>
            </h3>
          </section>
          {/* right section */}
          <section
            className="hidden lg:flex lg:w-1/2 h-screen bg-cover relative"
            style={{ backgroundImage: `url(${signinimg}) ` }}
          >
            <Link
              to="/"
              className="absolute right-[5.9rem] top-[2.5rem] xl:right-[3rem] xl:top-[2.8rem]"
            >
              <img src={logo} alt="Dph Logo" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
