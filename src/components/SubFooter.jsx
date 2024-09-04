import React from 'react'
import Button from './Button'
import arrowRight from "../assets/icons/Line arrow-right.png"
import { Link } from 'react-router-dom'

const SubFooter = () => {
  return (
    <div>
        <div className="container lg:w-11/12 bg-white m-auto w-full xl:h-[500px] h-[350px] flex justify-center items-center">
              <div className="flex flex-col items-center gap-[32px]">
                  <div className="">
                      <h1 className='xl:text-[85px] text-[30px] font-bold font-spaceGrotesk'>Let's Create Together</h1>
                  </div>
                  <div className="xl:w-[847px] w-[90%]">
                      <p className='xl:text-[22px] text-[16px] text-center font-medium font-spaceGrotesk'>Ready to elevate your digital presence? Contact us to discuss how DPH can turn your ideas into visually captivating realities that drive results</p>
                  </div>
                  <div className="flex">
                    <Link to="/contact">
                    
                      <Button color="success">
                        <div className="flex gap-2">
                          <p className='font-spaceGrotesk'>Get in Touch Now!</p> <img src={arrowRight} alt="" />
                        </div>
                      </Button>
                    </Link>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default SubFooter

