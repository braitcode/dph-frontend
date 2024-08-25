import React from 'react';
import Button from "../components/Button";
import phone from "../assets/icons/phone icon.png";
import sms from "../assets/icons/sms.png";
import location from "../assets/icons/location.png";
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const fullPhoneNumber = `${data.countryCode}${data.phone}`;
        console.log('Form Data:', { ...data, fullPhoneNumber });
        alert(`Form Submitted Successfully with phone number: ${fullPhoneNumber}`);
    };

    return (
        <div className="bg-[#034D2B] w-full  xl:h-[741px] flex justify-center items-center py-12 px-4">
            <div className="w-full max-w-7xl m-auto flex flex-col xl:flex-row justify-center items-center gap-12">
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
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className="text-[18px] font-bold font-spaceGrotesk">First Name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.firstName ? 'border-red-500' : ''}`}
                                    {...register('firstName', { required: 'First name is required' })}
                                />
                                {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                            </div>

                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className="text-[18px] font-bold font-spaceGrotesk">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.lastName ? 'border-red-500' : ''}`}
                                    {...register('lastName', { required: 'Last name is required' })}
                                />
                                {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className="text-[18px] font-bold font-spaceGrotesk">Email</label>
                                <input
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    className={`border text-[14px] p-2 rounded-lg font-spaceGrotesk ${errors.email ? 'border-red-500' : ''}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                            </div>

                            <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                <label className="text-[18px] font-bold font-spaceGrotesk">Phone</label>
                                <div className="flex">
                                    <select
                                        className={`border-l border-t border-b rounded-l-lg bg-gray-50 text-[14px] p-2 font-spaceGrotesk ${errors.countryCode ? 'border-red-500' : ''}`}
                                        {...register('countryCode', { required: 'Country code is required' })}
                                    >
                                        <option value="+234">+234</option>
                                        {/* <option value="">Code</option> */}
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+91">+91</option>
                                        <option value="+235">+235</option>
                                        <option value="+241">+241</option>
                                        <option value="+244">+244</option>
                                        <option value="+1">+1</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className={`border rounded-r-lg text-[14px] w-full p-2 font-spaceGrotesk ${errors.phone ? 'border-red-500' : ''}`}
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                        })}
                                    />
                                </div>
                                {errors.countryCode && <span className="text-red-500 text-sm">{errors.countryCode.message}</span>}
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[18px] font-bold font-spaceGrotesk">Message</label>
                            <textarea
                                placeholder="Type your message"
                                className={`text-[14px] border rounded-lg p-2 font-spaceGrotesk ${errors.message ? 'border-red-500' : ''}`}
                                rows="5"
                                {...register('message', { required: 'Message is required' })}
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                        </div>

                        <div className="flex justify-center xl:justify-start">
                            <Button size="large" color="success" type="submit">
                                Send a message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
