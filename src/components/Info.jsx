import React from 'react'
import Button from './Button'
import { data } from "./DB/InfoDB"
import arrowRight from "../assets/icons/Line arrow-right.png"

const Info = () => {
  return (
    <div className='w-full font-spaceGrotesk'>
        <div className="w-full bg-white m-auto pt-4 px-4 md:w-full lg:px-0 lg:flex lg:items-center lg:justify-center lg:gap-[400px]">
          <div className="py-8 md:w-[680px] md:m-auto md:flex md:flex-col md:justify-between md:items-center md:mt-10 xl:w-[1260px] xl:flex-row xl:m-auto xl:flex xl:items-center xl:justify-between">
          <div className="font-bold text-2xl text-center pb-2 md:text-start xl:text-start">
                <h1 className='md:w-[700px] md:text-3xl md:font-medium xl:w-[420px] xl:font-bold xl:text-5xl'>DPH Surpassed and Exceeded Our Expectations</h1>
            </div>
            <div className="text-center md:text-start xl:text-start xl:w-[515px]">
                <p className="pb-4 text-[#323F49] md:w-[500px] md:text-center xl:text-start xl:w-[500px] xl:text-xl xl:font-semibold">We are your partners in crafting digital brilliance. Our expertise spans UI/UX , mobile and website, web development, brand guidelines and product design.</p>
                <div className="flex justify-center xl:justify-start md:w-full md:justify-center">
          <Button color="success" size="medium" className="md:mx-auto">
             <div className="flex items-center gap-2">
            <span className="text-[15px]">Get in Touch Now</span>
            <img src={arrowRight} alt=""/>
            </div>
         </Button>
       </div>
            </div>
          </div>
        </div>

       <div className="w-full bg-[#034D2B] text-white m-auto">
        <h1 className="text-center font-semibold text-3xl py-1 md:text-5xl xl:font-bold xl:text-[55px] xl:py-6">Why Choose Us ?</h1>
        <div className="md:w-[700px] md:m-auto xl:w-[1239px] xl:m-auto">
        <div className="w-full md:flex-col md:justify-center xl:flex lg:items-center xl:flex-row">
          <div className="px-4 xl:w-[554px]">
            <h1 className="text-center font-medium text-2xl md:font-semibold md:text-3xl xl:text-start xl:font-bold xl:text-[45px] xl:pb-6 xl:leading-10">Creative Visionaries, Innovative  and Passionate Entrepreneurs</h1>
            <p className='text-center xl:text-start xl:font-medium xl:text-[20px] xl:w-96'>We are a team of visionary creators, strategist, and storytellers with a deep passion for design and commitment to excellence</p>
          </div>

          <section className='py-10'>
           <div className="grid gap-9 grid-cols-1 md:w-[700px] md:grid-cols-2 xl:w-[690px] xl:grid-cols-2 xl:gap-10">
           { data.map((item, index) => (
              <div key={index} className=' bg-white w-9/12 border m-auto rounded-2xl md:w-full xl:w-[320px]'>
              <div className="h-60 w-4/5 pl-8 mt-2 xl:flex xl:flex-col xl:gap-6">
              <div className="bg-black mt-6 w-[54px] h-[54px] rounded-md xl:mt-2">
                   <div className='h-[50px] w-[50px] flex items-center justify-center'>
                   <img src={item.image} alt="" />
                   </div>
                </div> 
                <div className="text-black">
                <h1 className='text-lg font-semibold py-4 xl:py-0 xl:font-bold xl:text-xl xl:pb-2'>{item.title}</h1>
                  <p className='text-sm text-[#525252] lg:font-medium xl:text-[16px] xl:w-[241px]'>{item.content}</p>
                  </div>  
              </div>
            </div>      
              ))
            }
           </div>
          </section>
          </div>
        </div>
        </div>

       </div>
  )
}

export default Info