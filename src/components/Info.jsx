import React from 'react'
import Button from './Button'

const Info = () => {
  return (
    <div className='container w-full bg-black'>
        <div className="w-11/12 h-80 border bg-white m-auto pt-4 ">
           <div className="lg:w-11/12 lg:flex lg:items-center lg:border border-red-600 lg:m-auto">
           <div className="font-bold text-2xl text-center pb-6 lg:text-start lg:w-1/2 lg:font-bold lg:text-5xl lg:border border-brown-600">
                <h1 className='lg:w-2/3'>DPH Surpassed and Exceeded Our Expectations</h1>
            </div>
            <div className="text-center lg:text-start lg:w-1/2 lg:font-medium text-xl lg:border border-blue-600">
                <p className="pb-4 lg:w-3/4">We are your partners in crafting digital brilliance Our expertise spans UI/UX , mobile and website, web development, brand guidelines and product design.</p>
                <Button color='darkGreen'>
                  Get in Touch
                </Button>
            </div>
           </div>
        </div>

       <div className="w-11/12 bg-[#034D2B] text-white m-auto lg:border border-red-700">
        <h1 className="text-center font-semibold text-3xl py-6 lg:font-bold lg:text-6xl lg:mb-8">Why Choose Us ?</h1>
        <div className="lg:w-11/12 lg:m-auto">
        <div className="w-full lg:flex lg:items-center">
          <div className="lg:w-2/5">
            <h1 className="text-center font-medium text-2xl pb-2 lg:font-semibold lg:text-5xl lg:text-start lg:mb-4">creative visionaries, innovative  and passionate entrepreneurs</h1>
            <p className='text-center lg:text-start lg:font-semibold lg:text-xl lg:w-96'>We are a team of visionary creators, strategist, and storytellers with a deep passion for design and commitment to excellence</p>
          </div>

          <div className='pt-8 grid grid-cols-1 gap-8 py-6 lg:w-3/5 lg:grid-cols-2 lg:gap-10'>
            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl lg:w-80 lg:h-72'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4 lg:font-bold lg:text-xl'>Client Driven Approach</h1>
                  <p className='text-sm text-[#525252] lg:font-semibold lg:text-lg'>With a focus on client satisfaction, we develop solutions that seamlessly integrate with with your goal and visions.</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl lg:w-80 lg:h-72'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4 lg:font-bold lg:text-xl'>Strategic Thinking</h1>
                  <p className='text-sm text-[#525252] lg:font-semibold lg:text-lg'>We fuse creativity with strategic insight to ensure every move aligns with your brand vision</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl lg:w-80 lg:h-72'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4 lg:font-bold lg:text-xl'>Creative Excellence</h1>
                  <p className='text-sm text-[#525252] lg:font-semibold lg:text-lg'>Our team of creative visionaries is dedicated to delivering outstanding captivating results</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl lg:w-80 lg:h-72'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4 lg:font-bold lg:text-xl'>Timely Delivery</h1>
                  <p className='text-sm text-[#525252] lg:font-semibold lg:text-lg'>Our commitment to timely execution means project are completed on schedule, without fail.</p>
                  </div>  
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
       </div>
  )
}

export default Info