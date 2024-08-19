import React from 'react'
// import Button from "../components/Button"

const Info = () => {
  return (
    <div className='container w-full bg-black'>
        <div className="w-11/12 h-80 border bg-white m-auto pt-4">
            <div className="font-bold text-2xl text-center pb-6">
                <h1>DPH Surpassed and Exceeded Our Expectations</h1>
            </div>
            <div className="text-center">
                <p className="pb-4">We are your partners in crafting digital brilliance Our expertise spans UI/UX , mobile and website, web development, brand guidelines and product design.</p>
                <button className='border border-green-600 p-4'>Get in Touch Now</button>
            </div>
        </div>

        <div className="w-11/12 bg-[#034D2B] text-white m-auto">
          <div className="w-full">
          <h1 className="text-center font-semibold text-3xl py-6">Why Choose Us?</h1>
          <div className="">
            <h1 className="text-center font-medium text-2xl pb-2">creative visionaries, innovative  and passionate entrepreneurs</h1>
            <p className='text-center'>We are s team of visionary creators, strategist, and storytellers with a deep passion for design and commitment to excellence</p>
          </div>

          <div className='pt-8 grid grid-cols-1 gap-8 py-6'>
            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4'>Client Driven Approach</h1>
                  <p className='text-sm'>With a focus on client satisfaction, we develop solutions that seamlessly integrate with with your goal and visions.</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4'>Strategic Thinking</h1>
                  <p className='text-sm'>We fuse creativity with strategic insight to ensure every move aligns with your brand vision</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4'>Creative Excellence</h1>
                  <p className='text-sm'>Our team of creative visionaries is dedicated to delivering outstanding captivating results</p>
                  </div>  
              </div>
            </div>

            <div className='bg-white h-64 w-9/12 border m-auto rounded-2xl'>
              <div className=" h-60 w-10/12 m-auto mt-2">
              <div className=" bg-black w-10 h-10 rounded-md mt-6">
                {/* for the image */}
                </div> 
                <div className="text-black">
                  {/* content/info */}
                  <h1 className='text-lg font-semibold py-4'>Timely Delivery</h1>
                  <p className='text-sm'>Our commitment to timely execution means project are completed on schedule, without fail.</p>
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