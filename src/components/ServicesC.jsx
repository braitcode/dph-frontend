import React from 'react'
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../assets/brand.png'
import img2 from '../assets/web.png'
import img3 from '../assets/mobiled.png'
import img4 from '../assets/consult.png'
import { Link } from 'react-router-dom';
const ServicesC = () => {
    return (
        <div className='font-spaceGrotesk'>
            <div className=' py-10 lg:px-[10rem] xl:px-[20rem] mt-20'>
                <h1 className='mx-auto font-bold text-[24px] sm:text-[32px] sm:w-11/12 text-center leading-[1.8rem] py-2 '>
                    Optimized  services to elevate your business
                </h1>
                <p className='mx-auto sm:w-11/12 text-center leading-[1.2rem]'>
                    We provide innovative solutions that streamline operations, enhance productivity, and drive growth
                </p>
                <div className="flex gap-5 justify-center mt-[2rem] mb-[2rem] ">
                    <Link to='/signup'>
                        <Button size="medium" color="success">
                            <div className="flex gap-2 p-1">
                                <span className="md:text-[15px] text-[10px]">Get Started</span><FaArrowRightLong className='mt-[3px]' />
                            </div>
                        </Button>
                    </Link>
                    <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C] p-1">
                        <Button size="medium">
                            <span className="md:text-[15px] text-[10px]">Book a consultant</span>
                        </Button>
                    </div>
                </div>
            </div>
            <main>
                {/* first container */}
                <section className='bg-[#F6FFFB]'>
                    <div className='container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[30px]
                xl:gap-[5rem]'>
                        <div className='md:order-2 mb-2 md:mt-3'>
                            <img
                                src={img1}
                                alt="Branding Service"
                                className="rounded-lg mb-2 w-[100%]" />
                        </div>
                        <div className='py-[2rem] md:py-[3rem] xl:py-[10rem]'>
                            <h3 className="text-2xl font-bold mb-4 lg:text-[32px]">Branding</h3>
                            <p className="text-gray-600 mb-4 text-[14px] lg:text-[20px]">
                                Our branding service crafts distinctive logos,
                                visual identities, and taglines that capture your
                                brand's essence and resonate with your audience.
                            </p>
                            <Button size="medium" color="success">
                                <div className="flex gap-2 px-1 xl:px-5">
                                    <span className="text-[12px] md:text-[15px]">Get Started</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                </div>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* second container */}
                <section>
                    <div className='container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[30px]
                xl:gap-[5rem] py-5'>
                        <div className="mb-2">
                            <img
                                src={img2}
                                alt="Web Development Service"
                                className="rounded-lg mb-2 w-[100%]"
                            />
                        </div>
                        <div className='py-[2rem] md:py-[3rem] xl:py-[10rem]'>
                            <h3 className="text-2xl font-bold mb-4 lg:text-[32px]">
                                Web Development
                            </h3>
                            <p className="text-gray-600 mb-4 text-[14px] lg:text-[20px]">
                                At Digital Presence Hub, we understand that your
                                website is the digital face of your brand. Our web
                                design services are focused on creating visually
                                user-friendly, and fully responsive websites
                            </p>
                            <Button size="medium" color="success">
                                <div className="flex gap-2 px-1 xl:px-5">
                                    <span className="text-[12px] md:text-[15px]">Get Started</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                </div>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* third container */}
                <section className='bg-[#F6FFFB]'>
                    <div className='container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[30px] 
                xl:gap-[5rem] py-5'>
                        <div className='md:order-2 '>
                            <img
                                src={img3}
                                alt="Mobile Design Service"
                                className="rounded-lg mb-2 w-[100%]"
                            />
                        </div>
                        <div className='py-[2rem] md:py-[3rem] xl:py-[10rem]'>
                            <h3 className="text-2xl font-bold mb-4 lg:text-[32px]">
                                Mobile Design
                            </h3>
                            <p className="text-gray-600 mb-4 text-[14px] lg:text-[20px]">
                                We specialize in bringing your product ideas to
                                life. Our product design services are
                                comprehensive, covering everything from initial
                                concept development to final design.
                            </p>
                            <Button size="medium" color="success">
                                <div className="flex gap-2 px-1  xl:px-5">
                                    <span className="text-[12px] md:text-[15px]">Get Started</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                </div>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* fourth container */}
                <section >
                    <div className='container w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[30px]
                xl:gap-[5rem] py-3'>
                        <div>
                            <img
                                src={img4}
                                alt="Consultation Service"
                                className="rounded-lg mb-2 w-[100%]"
                            />
                        </div>
                        <div className='py-[2rem] md:py-[3rem] xl:py-[10rem]'>
                            <h3 className="text-2xl font-bold mb-4 lg:text-[32px]">
                                Consultation
                            </h3>
                            <p className="text-gray-600 mb-4 text-[14px] lg:text-[20px]">
                                Take the first step toward transforming your
                                brand. Our experienced team is ready to offer
                                tailored insights and strategic guidance at no
                                cost to you. Book your free consultation today,
                                and let's explore how we can elevate your brand
                                to new heights.
                            </p>
                            <Button size="medium" color="success">
                                <div className="flex gap-2 px-1 xl:px-5">
                                    <span className="text-[12px] md:text-[15px]">Book Now</span><FaArrowRightLong className='mt-[4px] p-[0.05rem]' />
                                </div>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    )
}

export default ServicesC