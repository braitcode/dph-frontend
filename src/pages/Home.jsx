import React from 'react'
import Tailor from "../components/Tailor"
import ContactForm from "../components/ContactForm"
import SubFooter from "../components/SubFooter"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import Portfolio from "../pages/Portfolio"
import Seam from '../components/Seam'


const Home = () => {
    return (
        <>
            <Tailor />
            <Seam />
            <Portfolio />
            <Testimonial />
            <ContactForm />
            <SubFooter />
            <Footer />
        </>
    )
}

export default Home
