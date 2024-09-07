import React,{useState} from 'react'
import image from '../assets/login.png'
import logo from '../assets/signuplogo.svg'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const validateForm = () => {
        let isValid = true;
        
        if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
        } else {
            setEmailError(null);
        }
        return isValid;

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!validateForm()) return;

        try {
            setLoading(true);
            const data = await signup(fullname, email, password);

            if(!data?.error){
                setLoading(false);
                navigate("/");
            }else{
                setErrors({ form: "Registration failed"});
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setErrors({ form: err.message});
            setLoading(false);
            
        }
        
    };
        
  return (
    <>
    <main className='w-full max-h-fit font-spaceGrotesk '>
        <section className='grid lg:grid-cols-2 py-[50px] lg:py-0'>
            <div className='flex flex-col justify-center p-10 space-y-3'>
                <div className='text-center lg:text-start space-y-3'>
                    <h1 className='text-2xl font-bold'>Forgot Password</h1>
                    <p>Enter your email address to reset your password</p>
                </div>
                <form onSubmit={handleSubmit} className='space-'>
                <label className="block font-[500px] text-[18px] lg:text-[23px] ">
                            Email
                            <input
                                type="text"
                                value={email}
                                placeholder='johndoe@mail.com'
                                onChange={(event) => setEmail(event.target.value)}
                                style={{
                                    outline: 'none',
                                    boxShadow: 'none',
                                }}
                                className="w-full p-3 h-[55px] text-sm text-[14px] lg:text-[16px] text-gray-700 rounded-[5px] border-[1px] border-[#9A9696] focus:border-[#02864A]"
                            />
                            {emailError && <p className="text-red-500 text-[12px] lg:text-[14px]">{emailError}</p>}
                        </label>
                    <button className='bg-[#02864A] text-white p-3 mt-5 w-full rounded-md font-bold '>Reset Password</button>
                </form>
                <p className='flex items-center gap-2 justify-center'><GoArrowLeft />Go Back</p>
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

export default ForgotPassword