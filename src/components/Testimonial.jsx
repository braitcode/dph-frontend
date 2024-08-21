import React, { useState } from 'react';
import images from '../assets/portfolioimages/space.png';
import starsIcon from '../assets/portfolioimages/ratings.png';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testimonial = () => {
    const newData = [
        {id: 1, image: images, title: "Jane Cooper", location: "Abuja, Nigeria", testimony: "“I had an incredible experience renting from Rent Cars! The process was seamless, the car was in pristine condition, and the customer service was top-notch...”", rate: starsIcon},
        {id: 2, image: images, title: "Leslie Alexander", location: "Lagos, Nigeria", testimony: "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition...”", rate: starsIcon},
        {id: 3, image: images, title: "Bobbie Robertson", location: "Port Harcourt, Nigeria", testimony: "“Rent Cars truly stands out. From their convenient online booking system to their prompt pickup and drop-off service, everything was convenient and stress-free.”", rate: starsIcon},
        {id: 4, image: images, title: "Eleanor Pena", location: "Ibadan, Nigeria", testimony: "“Artchain NFT exceeded my expectations. The entire process, from acquiring to analyzing transactions, was seamless and secure. The platform's transparency and ease of use have made me a loyal user.Artchain NFT exceeded my expectations. The entire process, from acquiring to analyzing transactions, was seamless and secure. The platform's transparency and ease of use have made me a loyal user.”", rate: starsIcon},
        {id: 5, image: images, title: "Michael Edwards", location: "Enugu, Nigeria", testimony: "“WeCare truly stands out in the healthcare space. Their meticulous attention to detail and the precision of their transaction analysis have made a significant impact on our operations. Highly recommended!”", rate: starsIcon}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeButton, setActiveButton] = useState('next'); // Set the right button as active by default

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? newData.length - 3 : prevIndex - 1));
        setActiveButton('prev');
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === newData.length - 3 ? 0 : prevIndex + 1));
        setActiveButton('next');
    };

    return (
        <>
            <main className='px-4 sm:px-2 lg:px-8 bg-[#F2F2F2] py-7'>
                <h1 className='text-3xl text-center font-semibold font-spaceGrotesk'>Testimonial</h1>
                {/* testimonial box */}
                <section className='container m-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 lg:py-7 py-3'>
                    {newData.slice(currentIndex, currentIndex + 3).map((slide, index) => {
                        const isMiddleItem = index === 1;
                        return (
                            <div 
                                key={slide.id} 
                                className={`p-3 border border-2 rounded-lg font-spaceGrotesk transition-transform duration-500 mt-5 flex flex-col justify-between lg:h-[15rem] ${isMiddleItem ? 'lg:scale-[115%] md:scale-[110%] text-white bg-[#028A4C]' : 'border-[#B3B3B3] text-[#4B4B4B]'}`}
                            >
                                <div className='flex gap-3 items-center'>
                                    <img src={slide.image} alt="profile-image" className='h-fit'/>
                                    <div>
                                        <h2 className='font-semibold'>{slide.title}</h2>
                                        <h6 className='text-[#C8C8C8] text-sm'>{slide.location}</h6>
                                    </div>
                                </div>
                                <p className='my-3 flex-grow overflow-hidden hover:overflow-auto text-sm' style={{ maxHeight: '8rem' }}>{slide.testimony}</p>
                                <div className='mt-auto mb-3'>
                                    <img src={slide.rate} alt="rating" className='w-fit h-auto'/>
                                </div>
                            </div>
                        );
                    })}
                </section>
                {/* slide button section */}
                <div className='flex gap-5 justify-center my-5 pt-5'>
                    <button 
                        onClick={handlePrevClick} 
                        className={`border p-2 rounded-lg ${activeButton === 'prev' ? 'bg-[#028A4C] text-white' : ''}`}
                    >
                        <SlArrowLeft />
                    </button>
                    <button 
                        onClick={handleNextClick} 
                        className={`border p-2 rounded-lg ${activeButton === 'next' ? 'bg-[#028A4C] text-white' : ''}`}
                    >
                        <SlArrowRight />
                    </button>
                </div>
            </main>
        </>
    );
};

export default Testimonial;
