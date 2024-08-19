import React from 'react'
import Button from "../components/Button"

const ContactForm = () => {
  return (
    <div>
        <div className="bg-[#034D2B] w-full h-[741px] flex justify-center items-center gap-12">
            
                <div className="w-[45%] flex flex-col gap-[36px]">
                    <div className="flex flex-col gap-[20px]">
                        <h1 className='text-white text-[45px] font-bold w-[80%]'>Book A Complimentary Consultation</h1>
                        <p className='text-white text-[18px] font-medium'>Book a no-cost consultation to discuss your brand, our team or experienced professionals are ready to give you maximum and professional advice.</p>
                    </div>
                    <div className="flex flex-col gap-[23px]">
                        <p className='text-white text-[18px] font-bold'>+234 998 890 4847</p>
                        <p className='text-white text-[18px] font-bold'>Dph@gmail.com</p>
                        <p className='text-white text-[18px] font-bold'>1, Dph cresent, lagos Nigeria</p>
                    </div>
                </div>
                <div className="bg-white w-[45%] h-[517px] rounded-xl p-6">
                    <form className="flex flex-col gap-9">
                      <div className="flex justify-between">
                          <div className="w-[48%] flex flex-col gap-2">
                              <label className='text-[18px] font-bold'>First Name</label>
                              <input type="text" placeholder='First name' className='border text-[14px] p-2 rounded-lg' />
                          </div>
                          <div className="w-[48%] flex flex-col gap-2">
                              <label className='text-[18px] font-bold'>Last Name</label>
                              <input type="text" placeholder='Last Name' className='border text-[14px] p-2 rounded-lg' />
                          </div>
                      </div>
                      <div className="flex justify-between">
                          <div className="w-[48%] flex flex-col gap-2">
                              <label className='text-[18px] font-bold'>Email</label>
                              <input type="email" placeholder='johndoe@gmail.com' className='border text-[14px] p-2 rounded-lg' />
                          </div>
                          <div className="w-[48%] flex flex-col gap-2">
                              <label className='text-[18px] font-bold'>Phone</label>
                              <input type="tel" placeholder='johndoe@gmail.com' className='border text-[14px] p-2 rounded-lg' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                          </div>
                      </div>
                      <div className="">
                        <div className="flex flex-col gap-2">
                            <label className='text-[18px] font-bold'>Message</label>
                            <textarea name="" id="" placeholder='Type your message' className='text-[14px] border rounded-lg p-2' rows="5"></textarea>
                        </div>
                      </div>
                      <div className="">
                          <Button size="large" color="success">
                              Send a message
                          </Button>
                      </div>
                    </form>
                </div>
            
        </div>
    </div>
  )
}

export default ContactForm