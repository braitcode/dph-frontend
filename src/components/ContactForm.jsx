import React from 'react'
import Button from "../components/Button"
import phone from "../assets/icons/phone icon.png"
import sms from "../assets/icons/sms.png"
import location from "../assets/icons/location.png"

const ContactForm = () => {
    return (
        <div className="bg-[#034D2B] w-full xl:h-[741px] flex justify-center items-center py-12 px-4">
            <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-12">
                <div className="xl:w-[45%] flex flex-col gap-[36px] xl:p-4">
                    <div className="flex flex-col gap-[20px] text-center xl:text-left">
                        <h1 className='text-white xl:text-[45px] text-[24px] font-bold w-[80%] mx-auto xl:mx-0 font-spaceGrotesk'>
                            Book A Complimentary Consultation
                        </h1>
                        <p className='text-white text-[18px] font-medium font-spaceGrotesk'>
                            Book a no-cost consultation to discuss your brand, our team of experienced professionals are ready to give you maximum and professional advice.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[23px] text-center xl:text-left">
                        <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={phone} alt="" />
                            +234 998 890 4847
                        </p>

                        <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={sms} alt="" />
                            Dph@gmail.com
                        </p>

                        <p className='text-white text-[18px] font-bold flex justify-center xl:justify-start gap-4 font-spaceGrotesk'>
                            <img src={location} alt="" />
                            1, Dph cresent, Lagos, Nigeria
                        </p>
                    </div>
                </div>

                <div className="bg-white xl:w-[45%] w-full h-auto rounded-xl p-6">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className='text-[18px] font-bold font-spaceGrotesk'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='First name'
                                    className='border text-[14px] p-2 rounded-lg font-spaceGrotesk' />
                            </div>

                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className='text-[18px] font-bold font-spaceGrotesk'>Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className='border text-[14px] p-2 rounded-lg font-spaceGrotesk' />
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className='text-[18px] font-bold font-spaceGrotesk'>Email</label>
                                <input
                                    type="email"
                                    placeholder='johndoe@gmail.com'
                                    className='border text-[14px] p-2 rounded-lg font-spaceGrotesk' />
                            </div>

                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className='text-[18px] font-bold font-spaceGrotesk'>Phone</label>
                                <input
                                    type="tel"
                                    placeholder='123-456-7890'
                                    className='border text-[14px] p-2 rounded-lg font-spaceGrotesk'
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className='text-[18px] font-bold font-spaceGrotesk'>Message</label>
                            <textarea
                                placeholder='Type your message'
                                className='text-[14px] border rounded-lg p-2 font-spaceGrotesk'
                                rows="5">
                            </textarea>
                        </div>

                        <div className="flex justify-center xl:justify-start">
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