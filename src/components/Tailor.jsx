import React from 'react'
import { solution } from './DB/Solution.jsx'

const Tailor = () => {
    return (
        <div className='container w-11/12 mx-auto lg:w-10/12 xl:w-3/4'>
            <section className='w-full p-4 pb-[5rem]'>
                <h2 className='font-bold font-spaceGrotesk text-[30px] leading-normal text-center pt-7 md:text-[38px] lg:text-[48px]'>
                    Tailored Solution For Your Needs
                </h2>
                <h5 className='font-spaceGrotesk text-[12px] text-center mt-2 font-medium text-[#565353] md:text-[16px] lg:text-[24px] block'>
                    Our team of experts crafts intuitive digital experience, from mobile interfaces to user-friendly websites, delivering functional solutions that impress.
                </h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-[20px] gap-[60px]'>
                    {
                        solution.map((sol) => {
                            const { id, title, image, description } = sol;
                            return (
                                <div key={id} className='bg-[#EFEFEF] pt-7 pb-7 pl-3 pr-3 rounded shadow-[0_1px_0_0] shadow-[#000000] lg:w-full lg:pl-6 group hover:bg-[#028A4C]'>
                                    <img src={image} alt="" className='w-[35px] pb-3 filter grayscale-200 group-hover:invert md:w-[40px] lg:w-[45px] lg:mt-5' />
                                    <h2 className='text-[18px] font-bold font-spaceGrotesk pb-4 group-hover:text-white md:text-[24px] lg:text-[28px]'>
                                        {title}
                                    </h2>
                                    <p className='text-[10px] font-spaceGrotesk font-medium group-hover:text-white md:text-[12px] lg:text-[16px]'>
                                        {description}
                                        <a href="#" className='ml-1 text-[10px] text-[#028A4C] group-hover:text-white md:text-[12px] lg:text-[16px]'>
                                            _____Find Out More
                                        </a>
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