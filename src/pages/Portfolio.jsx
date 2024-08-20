import React from 'react';
import image1 from '../assets/portfolioimages/image1.png';
import image2 from '../assets/portfolioimages/image2.png';
import image3 from '../assets/portfolioimages/image3.png';
import image4 from '../assets/portfolioimages/image4.png';

const Portfolio = () => {
    const data = [
        { id: 1, image: image1, title: "Car rental website", position: "UI/UX Web design" },
        { id: 2, image: image2, title: "NFT website", position: "UI/UX Web design" },
        { id: 3, image: image3, title: "My Watch", position: "UI/UX Web design" },
        { id: 4, image: image4, title: "Admin Dashboard", position: "UI/UX Web design" }
    ];

    return (
        <>
            <main className='container m-auto'>
                <section className='flex flex-col items-center gap-5 py-5'>
                    <h2 className='text-2xl text-[#02864A] font-spaceGrotesk font-semibold'>Our Projects</h2>
                    <h1 className='text-3xl font-bold'>Some of our finest works!</h1>

                    <div className='flex gap-3'>
                        <p>All Works</p>
                        <p>Web Design</p>
                        <p>App Design</p>
                    </div>
                </section>

                <section className='container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8'>
                    {data.map((project) => (
                        <div key={project.id} className='w-fit'>
                            <img src={project.image} alt={project.title} className='w-fit h-[80%] object-cover rounded-t-xl' />
                            <div className='px-9 border  rounded-b-lg shadow-lg'>
                            <h3 className='text-xl font-bold mt-3'>{project.title}</h3>
                            <p className='text-gray-600'>{project.position}</p>
                            <div>
                                <p>See now</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Portfolio;
