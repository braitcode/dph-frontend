import React from 'react'
import errorPage from "../assets/images/404.png"
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  return (
    <>
    <div>
      {/* <Navbar /> */}
      <div className=" h-[100vh] w-full flex justify-center items-center">

        <div className="w-11/12 h-[70%] flex flex-col lg:items-center xl:items-center gap-[40px]">
          <img src={errorPage} alt=""  className='lg:w-9/12 xl:w-7/12'/>
          <div className="flex flex-col gap-[20px]">
            <h1 className='text-[30px] flex justify-center font-spaceGrotesk lg:text-[55px] font-bold'>Page Not Found</h1>
            <div className="flex justify-center">

            <p className='text-[18px] font-spaceGrotesk lg:text-[32px] text-center w-[698px]'>We can't find the page that you are looking for... !</p>
            </div>
            <Link to="/">
            
            <div className="flex justify-center">
              <Button size="medium" color="success" type="submit">
                Go Back
              </Button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PageNotfound;