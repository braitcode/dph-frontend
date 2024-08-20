import React from 'react'
import { solution } from './DB/Solution.jsx'
import seamimg from '../assets/seam.png'
import Button from '../components/Button.jsx'
import { FaArrowRightLong } from "react-icons/fa6";
const Tailor = () => {
    return (
        <div>
            <section className='w-full p-2'>
                <h2 className='font-bold font-spaceGrotesk text-[30px] leading-normal text-center pt-7'>
                    Tailored Solution For Your Needs
                </h2>
                <h5 className='font-spaceGrotesk text-[12px] text-center mt-2 font-medium'>
                    Our team of experts crafts intuitive digital experience, from mobile interfaces to user-friendly websites, delivering functional solutions that impress.
                </h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {
                        solution.map((sol) => {
                            const { id, title, image, description, } = sol;
                            return (
                                <section key={id} className='mt-[50px] bg-[#EFEFEF] pt-7 pb-7 pl-3 rounded shadow-[0_1px_0_0] shadow-[#000000]'>
                                    <img src={image} alt="" className='w-[35px] pb-3' />
                                    <h2 className='text-[18px] font-bold font-spaceGrotesk pb-4'>
                                        {title}
                                    </h2>
                                    <p className='text-[12px] font-spaceGrotesk'>
                                        {description}
                                    </p>
                                </section>
                            )
                        })
                    }
                </div>
            </section>
            <section className='bg-[#F6FFFB] mt-10 pt-6 w-full p-2'>
                <h3 className='font-spaceGrotesk font-bold text-[24px]'>
                    Seamless integration of aesthetics and functionality is our hallmark
                </h3>
                <p className='font-spaceGrotesk text-[12px] mt-2 mb-9'>
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
                <img src={seamimg} alt="" className='w-[95%] mt-10' />
            </section>
        </div>
    )
}

export default Tailor