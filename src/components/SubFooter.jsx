import React from 'react'
import Button from './Button'

const SubFooter = () => {
  return (
    <div>
        <div className="bg-white w-full h-[500px] flex justify-center items-center">
              <div className="flex flex-col items-center gap-[32px]">
                  <div className="">
                      <h1 className='text-[85px] font-bold'>Let's Create Together</h1>
                  </div>
                  <div className="w-[847px]">
                      <p className='text-[22px] text-center font-medium'>Ready to elevate your digital presence? Contact us to discuss how DPH can turn your ideas into visually captivating realities that drive results</p>
                  </div>
                  <div className="">
                      <Button color="darkGreen">
                        Get in Touch Now
                      </Button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default SubFooter