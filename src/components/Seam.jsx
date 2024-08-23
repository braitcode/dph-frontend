import React from 'react'
import seamimg from '../assets/seam.png'
import Button from '../components/Button.jsx'
import { FaArrowRightLong } from "react-icons/fa6";

const Seam = () => {
    return (
        <div className='mx-auto w-full'>
            <section className='bg-[#F6FFFB] mt-10 pt-6 w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10'>
                <div className='md:mt-10 lg:mt-[10rem] lg:ml-[5rem] md:ml-[2rem]'>
                    <h3 className='font-spaceGrotesk font-semibold text-[24px] lg:text-[48px]'>
                        Seamless integration of aesthetics and functionality is our hallmark
                    </h3>
                    <p className='font-spaceGrotesk text-[14px] mt-2 mb-5 font-normal lg:text-[24px] text-[#565353]'>
                        Our user-friendly design make budgeting a breeze empowering you to track expense and make better decision.
                    </p>
                    <a href="#">
                        <Button
                            size="medium"
                            color="success"
                        >
                            <span className='text-[12px] font-medium'>Get Started<FaArrowRightLong className='inline mb-1 ml-2' /></span>
                        </Button>
                    </a>
                </div>
                <div className='flex justify-center'>
                    <img src={seamimg} alt="" className='w-[85%] mt-10' />
                </div>
            </section>
        </div>
    )
}

export default Seam