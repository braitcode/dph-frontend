import React from 'react'
import seamimg from '../assets/seam.png'
import Button from '../components/Button.jsx'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useAuth } from "../components/contexts/Auth";

const Seam = () => {
    const { auth } = useAuth();

    return (
        <div className='font-spaceGrotesk bg-[#F6FFFB]'>
            <section className='container w-11/12 mx-auto'>
                <div className='mt-10 pt-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 pb-12 pl-3 md:pl-1'>
                    <div className='flex justify-cente lg:order-2'>
                        <img src={seamimg} alt="" className='w-[100%]' />
                    </div>
                    <div className='xl:mt-[6.5rem]'>
                        <h3 className=' font-semibold text-[20px] md:text-[28px] lg:text-[32px] xl:text-[48px] lg:leading-[2.5rem] xl:leading-[3.2rem] lg:mt-[4rem] lg:text-start '>
                            Seamless integration of aesthetics and functionality is our hallmark
                        </h3>
                        <p className=' text-[14px] mt-2 mb-5 font-normal lg:text-[20px] xl:text-[24px] text-[#565353] w-[100%]'>
                            Our user-friendly design make budgeting a breeze empowering you to track expense and make better decision.
                        </p>
                        {/* < Link to="/signup" className=''>
                            <Button
                                size="medium"
                                color="success"
                            >
                                <span className='text-[12px]font-medium'>Get Started<FaArrowRightLong className='inline mb-1 ml-2' /></span>
                            </Button>
                        </Link> */}
                        {auth?.user ? (
                            <Link to='/contact'>
                                <Button size="medium" color="success" className=''>
                                    <div className="flex gap-2 px-[4rem] md:px-[4.5rem] py-1">
                                        <span className="text-[14px]">Get In Touch</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                    </div>
                                </Button>
                            </Link>
                        ) : (
                            <Link to='/signup'>
                                <Button size="medium" color="success">
                                    <div className="flex gap-2 px-[4.5rem] py-1">
                                        <span className="text-[14px]">Get Started</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                    </div>
                                </Button>
                            </Link>

                        )}
                    </div>
                    {/* <p className=' md:block lg:hidden text-[14px] font-normal md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#565353] w-[100%] text-center'>
                        Our user-friendly design make budgeting a breeze empowering you to track expense and make better decision.
                    </p>
                    <Link to="/signup" className='md:block lg:hidden text-center' >
                        <Button
                            size="medium"
                            color="success"
                        >
                            <span className='text-[12px]font-medium'>Get Started<FaArrowRightLong className='inline mb-1 ml-2' /></span>
                        </Button>
                    </Link> */}
                </div>
            </section>
        </div>
    )
}

export default Seam