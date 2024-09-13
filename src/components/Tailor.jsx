import React from 'react'
import { solution } from './DB/Solution.jsx'

const Tailor = () => {
    return (
        <div className='container w-11/12 mx-auto lg:w-10/12 xl:w-3/4 font-spaceGrotesk'>
            <style>
                {`
                .group:hover img.svg-white {
                    filter: brightness(0) invert(1);
                }
                `}
            </style>
            <section
                className='w-full pt-[2rem] pb-[0.7rem]'>
                <h2
                    className='font-bold text-[28px] leading-normal text-center pt-7 md:text-[38px] lg:text-[48px]'>
                    Tailored Solution For Your Needs
                </h2>
                <h5
                    className='text-[12px] text-center mt-2 font-medium text-[#565353] md:text-[16px] lg:text-[24px] block pb-5 lg:mb-[20px]'>
                    Our team of experts crafts intuitive digital experience, from mobile interfaces to <br /> user-friendly websites, delivering functional solutions that impress.
                </h5>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 gap-[40px] px-2 lg:px-[70px] xl:px-[120px]'>
                    {
                        solution.map((sol) => {
                            const { id, title, image, description } = sol;
                            return (
                                <div key={id}
                                    className='bg-[#EFEFEF] px-3 py-4 rounded-lg shadow-[0_1px_0_0] shadow-[#000000] lg:px-4 group hover:bg-[#028A4C]'>
                                    <img
                                        src={image}
                                        alt=""
                                        className='svg-white w-[35px] pb-3 md:w-[40px] lg:w-[45px] lg:mt-5' />
                                    <h2
                                        className='text-[18px] font-bold font-spaceGrotesk pb-4 group-hover:text-white md:text-[24px] lg:text-[28px]'>
                                        {title}
                                    </h2>
                                    <p
                                        className='text-[14px] font-medium group-hover:text-white md:text-[12px] lg:text-[16px]'>
                                        {description} <br />
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Tailor