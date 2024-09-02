import React from 'react'
import errorPage from "../assets/images/404.png"
import Navbar from '../components/NavBar'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-[100vh] w-full flex justify-center items-center">

        <div className="flex flex-col gap-[40px]">
          <img src={errorPage} alt="" />
          <div className="flex flex-col gap-[40px]">
            <h1 className='flex justify-center font-spaceGrotesk text-[55px] font-bold'>Page Not Found</h1>
            <div className="flex justify-center">

            <p className='font-spaceGrotesk text-[32px] text-center w-[698px]'>We can't find the page that you are looking for... !</p>
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
  )
}

export default PageNotfound;