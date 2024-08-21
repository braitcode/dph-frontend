import React from 'react'
import Button from './Button'
import { data } from "./DB/InfoDB"

const Info = () => {
  return (
    <div className='container w-full font-spaceGrotesk'>
        <div className="w-full h-80 bg-white m-auto pt-4 lg:flex lg:items-center lg:justify-center lg:gap-[400px]">
          <div className="lg:w-[1260px] lg:m-auto pt-4 lg:flex lg:items-center lg:justify-between">
          <div className="font-bold text-2xl text-center pb-2 lg:text-start">
                <h1 className='lg:w-[420px] lg:font-bold lg:text-5xl'>DPH Surpassed and Exceeded Our Expectations</h1>
            </div>
            <div className="text-center lg:text-start lg:w-[515px]">
                <p className="pb-4 text-[#323F49] lg:text-xl lg:font-semibold ">We are your partners in crafting digital brilliance. Our expertise spans UI/UX , mobile and website, web development, brand guidelines and product design.</p>
                <Button color='darkGreen'>
                  Get in Touch
                </Button>
            </div>
          </div>
        </div>

       <div className="w-full bg-[#034D2B] text-white m-auto lg:h-[884px]">
        <h1 className="text-center font-semibold text-3xl py-6 lg:font-bold lg:text-[55px] lg:mb-14 lg:pt-10">Why Choose Us ?</h1>
        <div className="lg:w-[1239px] lg:m-auto">
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-[554px]">
            <h1 className="text-center font-medium text-2xl pb-2 lg:font-semibold lg:text-5xl lg:text-start lg:mb-4">creative visionaries, innovative  and passionate entrepreneurs</h1>
            <p className='text-center lg:text-start lg:font-medium lg:text-[20px] lg:w-96'>We are a team of visionary creators, strategist, and storytellers with a deep passion for design and commitment to excellence</p>
          </div>

          <div className='pt-8 grid grid-cols-1 gap-8 py-6 lg:w-[690px] lg:grid-cols-2 lg:gap-10'>
            {data.map((item, index) => (
              <div key={index} className='bg-white h-64 w-9/12 border m-auto rounded-2xl lg:w-[320px] lg:h-[300px'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className="bg-black w-[54px] h-[54px] rounded-md mt-6">
                   <div className='h-[50px] w-[50px] flex items-center justify-center'>
                   <img src={item.image} alt="" />
                   </div>
                </div> 
                <div className="text-black">
                <h1 className='text-lg font-semibold py-4 lg:font-bold lg:text-xl'>{item.title}</h1>
                  <p className='text-sm text-[#525252] lg:font-medium lg:text-[16px]'>{item.content}</p>
                  </div>  
              </div>
            </div>      
              ))
            }
          </div>
          </div>
        </div>
        </div>
       </div>
  )
}

export default Info