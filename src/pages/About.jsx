import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { data } from "../components/DB/InfoDB"
import arrowRight from "../assets/icons/Line arrow-right.png"
import dot from "../assets/icons/dot.svg";
import Testimonial from '../components/Testimonial'
import SubFooter from '../components/SubFooter'
import Team from '../components/Team'
import hero from '../assets/abouthero.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className='pt-[4rem] lg:pt-[8rem] font-spaceGrotesk'>
          <div className='pt-[2rem] pb-[1.5rem]'>
            <h1 className='mx-auto font-bold text-[24px] sm:text-[32px] lg:text-[55px] text-center leading-[1.8rem] lg:mb-7 '>
              Your Partner In Digital Success
            </h1>
            <p className='mx-auto container w-11/12 text-center leading-[1.2rem]font-spaceGrotesk text-[16px] lg:text-[28px] xl:text-[32px]'>
              We provide the digital tools and strategies to elevate your business, with a commitment to your success.
            </p>
          </div>
          <img className='mx-auto max-w-[1540px] w-full' src={hero} alt="" />
        </div>
        <div className='w-full font-spaceGrotesk'>
          <div className="w-full bg-white m-auto pt-4 px-4 md:w-full lg:px-0 lg:flex lg:items-center lg:justify-center lg:gap-[400px]">
            <div className="container py-8 md:w-[680px] md:m-auto md:flex md:flex-col md:justify-between md:items-center md:mt-4 xl:w-11/12 xl:flex-row xl:m-auto xl:flex xl:items-center xl:justify-between">
              <div className="font-bold text-2xl text-center pb-2 md:text-start xl:text-start">
                <h1 className='md:w-[700px] md:text-3xl md:font-medium xl:w-[420px] xl:font-bold xl:text-5xl'>DPH Surpassed and Exceeded Our Expectations</h1>
              </div>
              <div className="text-center md:text-start xl:text-start xl:w-[515px]">
                <p className="pb-4 text-[#323F49] md:w-[500px] md:text-center xl:text-start xl:w-[500px] xl:text-xl xl:font-semibold">We are your partners in crafting digital brilliance. Our expertise spans UI/UX , mobile and website, web development, brand guidelines and product design.</p>
                <div className="flex justify-center xl:justify-start md:w-full md:justify-center">
                  <Link to='/contact'>
                    <Button color="success" size="medium" className="md:mx-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-[15px]">Get in Touch Now</span>
                        <img src={arrowRight} alt="" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-black">
            <div className="flex justify-between text-white   py-6 md:py-5 font-spaceGrotesk xl:text-[32px]  text-[8px] md:text-[19px]  container w-11/12 m-auto  ">
              <span>Branding</span> <img src={dot} alt="" className="w-[5px]" />
              <span>Web Development</span>{" "}
              <img src={dot} alt="" className="w-[5px]" />
              <span>Consultation</span> <img src={dot} alt="" className="w-[5px]" />
              <span>Mobile Development</span>
            </div>
          </div>

          <div className="w-full bg-[#034D2B] text-white m-auto">
            <h1 className="pt-10 pb-5 text-center font-semibold text-3xl pt[71px] md:text-5xl md:pt-[71px] md:pb-8 xl:font-bold xl:text-[55px] xl:pt-[71px]">Why Choose Us ?</h1>
            <div className="container pb-4 md:pb-[71px] md:w-[700px] md:m-auto xl:w-11/12 xl:m-auto ">
              <div className="w-full md:flex-col md:justify-between xl:flex lg:items-center xl:flex-row">
                <div className="px-4 xl:w-[554px] xl:px-0">
                  <h1 className="text-center font-medium text-2xl md:font-semibold md:text-3xl md:pb-2 xl:text-start xl:font-bold xl:text-[45px] xl:pb-6 xl:leading-10">Creative Visionaries, Innovative  And Passionate Entrepreneurs</h1>
                  <p className='text-center xl:text-start xl:font-medium xl:text-[20px] xl:w-96'>We are a team of visionary creators, strategist, and storytellers with a deep passion for design and commitment to excellence</p>
                </div>

                <section className='py-10'>
                  <div className="grid gap-9 grid-cols-1 md:w-[700px] md:grid-cols-2 xl:w-[690px] xl:grid-cols-2 xl:gap-10">
                    {data.map((item, index) => (
                      <div key={index} className=' bg-white w-9/12 border m-auto rounded-2xl md:w-full xl:w-[320px]'>
                        <div className="h-60 m-auto w-4/5 mt-2 xl:flex xl:flex-col xl:gap-6">
                          <div className="bg-black mt-6 w-[54px] h-[54px] rounded-md xl:mt-2">
                            <div className='h-[50px] w-[50px] flex items-center justify-center'>
                              <img src={item.image} alt="" />
                            </div>
                          </div>
                          <div className="text-black">
                            <h1 className='text-lg font-semibold py-4 xl:py-0 xl:font-bold xl:text-xl xl:pb-2'>{item.title}</h1>
                            <p className='text-sm text-[#525252] lg:font-medium xl:text-[16px] xl:w-full'>{item.content}</p>
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
        {/* teams */}
        <Team />
        <Testimonial />
        <SubFooter />
        <Footer />
      </div>
    </>
  )
}

export default About