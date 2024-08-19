import React from 'react'
import Button from './Button'
import arrowRight from "../assets/icons/Line arrow-right.png"

const SubFooter = () => {
  return (
    <div>
        <div className="bg-white w-full h-[500px] flex justify-center items-center">
              <div className="flex flex-col items-center gap-[32px]">
                  <div className="">
                      <h1 className='text-[85px] font-bold font-spaceGrotesk'>Let's Create Together</h1>
                  </div>
                  <div className="w-[847px]">
                      <p className='text-[22px] text-center font-medium font-spaceGrotesk'>Ready to elevate your digital presence? Contact us to discuss how DPH can turn your ideas into visually captivating realities that drive results</p>
                  </div>
                  <div className="flex">
                      <Button color="darkGreen">
                        <div className="flex gap-2">
                          <p className='font-spaceGrotesk'>Get in Touch Now</p> <img src={arrowRight} alt="" />
                        </div>
                      </Button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default SubFooter