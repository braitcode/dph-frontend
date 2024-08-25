import React from 'react'
import seamimg from '../assets/seam.png'
import Button from '../components/Button.jsx'
import { FaArrowRightLong } from "react-icons/fa6";

const Seam = () => {
    return (
        <div className='w-full font-spaceGrotesk bg-[#F6FFFB]'>
            <section className='max-w-7xl m-auto'>
                <div className='mt-10 pt-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10 pb-12 pl-3 md:pl-1'>
                    <div className='md:mt-10 lg:mt-[10rem] md:ml-[1.2rem]'>
                        <h3 className=' font-semibold text-[24px] lg:text-[48px] lg:leading-[3.2rem]'>
                            Seamless integration of aesthetics and functionality is our hallmark
                        </h3>
                        <p className='text-[14px] mt-2 mb-5 font-normal lg:text-[24px] text-[#565353] w-[100%]'>
                            Our user-friendly design make budgeting a breeze empowering you to track expense and make better decision.
                        </p>
                        <a href="#">
                            <Button
                                size="medium"
                                color="success"
                            >
                                <span className='text-[12px]font-medium'>Get Started<FaArrowRightLong className='inline mb-1 ml-2' /></span>
                            </Button>
                        </a>
                    </div>
                    <div className='flex justify-center'>
                        <img src={seamimg} alt="" className=' mt-10 w-[90%] md:w-[95%]' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Seam