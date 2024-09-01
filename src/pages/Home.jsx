import React from 'react'
import Tailor from "../components/Tailor"
import ContactForm from "../components/ContactForm"
import SubFooter from "../components/SubFooter"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import SubPortfolio from "../components/SubPortfolio"
import Info from "../components/Info"
import Seam from '../components/Seam'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Portfolio from './Portfolio'

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Info />
            <Tailor />
            <Seam />
            <SubPortfolio />
            {/* <Portfolio/> */}
            <Testimonial />
            <ContactForm />
            <SubFooter />
            <Footer />
        </>
    )
}

export default Home
