import React from 'react'
import { team } from './DB/LateefDb'
import cup from '../assets/cup.svg'
import star from '../assets/star.svg'
import users from '../assets/users.svg'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
    return (
        <div className='font-spaceGrotesk pt-5 lg:pt-[40px] xl:pt-[80px]'>
            <h2 className='container mx-auto font-bold text-[24px] sm:text-[32px] sm:w-10/12 text-center leading-[1.8rem] xl:text-[50px] lg:pb-[20px] xl:pb-[62px]'>
                The Right Expertise, The Right Team
            </h2>
            <div className='container mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 sm:gap-[1rem] lg:grid-cols-3 mt-5 gap-[20px] md:gap-[1rem] lg:gap-[1.5rem] xl:gap-[4rem]'>
                {
                    team.map((t) => {
                        const { id, image, name, skill } = t
                        return (
                            <div key={id}>
                                <img className='rounded-xl w-full mb-6' src={image} alt="" />
                                <h3 className='font-bold xl:text-[26px] text-center' >
                                    {name}
                                </h3>
                                <p className='xl:text-[20px] text-[#5A5A5A] text-center'>
                                    {skill}
                                </p>
                                <div className='flex gap-[15px] mt-4 justify-center'>
                                    <div className='bg-gray-200 w-[42.15px] rounded-3xl p-[0.6rem]'>
                                        <RiFacebookCircleFill className='' size={24} />
                                    </div>
                                    <div className='bg-gray-200 w-[42.15px] rounded-3xl p-[0.6rem]'>
                                        <FaXTwitter className='' size={24} />
                                    </div>
                                    <div className='bg-gray-200 w-[42.15px] rounded-3xl p-[0.6rem]'>
                                        <FaLinkedin className='' size={24} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <section className='bg-[#034D2B] mt-[30px] lg:mt-[80px]'>
                <div className='container mx-auto w-11/12 py-5 xl:py-[70px] grid grid-cols-1 sm:grid-cols-3 gap-5 '>
                    <div className='bg-[#FFFFFF] px-[2rem] py-2 rounded-xl '>
                        <img className='w-[45px] xl:w-[74px] mx-auto' src={cup} alt="" />
                        <h3 className='text-center text-[26px] xl:text-[55px] font-bold'>
                            +1,600
                        </h3>
                        <p className='text-center font-thin text-[18px] xl:text-[26px]'>
                            Total Projects Accomplished
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF] px-[5rem] sm:px-[1.5rem] lg:px-[5rem] py-2 rounded-xl '>
                        <img className='w-[45px] xl:w-[74px] mx-auto' src={star} alt="" />
                        <h3 className='text-center text-[26px] xl:text-[55px] font-bold'>
                            +1,000
                        </h3>
                        <p className='text-center font-thin text-[18px] xl:text-[26px]'>
                            Average  review of 4.5 stars
                        </p>
                    </div>
                    <div className='bg-[#FFFFFF]  px-[3rem] sm:px-[1.5rem] lg:px-[3rem] py-2 rounded-xl '>
                        <img className='w-[45px] xl:w-[74px] mx-auto' src={users} alt="" />
                        <h3 className='text-center text-[26px] xl:text-[55px] font-bold'>
                            +1,000
                        </h3>
                        <p className='text-center font-thin text-[18px] xl:text-[26px]'>
                            Total clients we have worked with
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Team