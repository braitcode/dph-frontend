import './App.css'
import About from './pages/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import Tailor from './components/Tailor'
import Portfolio from './pages/Portfolio'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <Tailor />
     <About/>
     <Portfolio/>
     <Testimonial/>
     <ContactForm/>
     <SubFooter/>
     <Footer/>
    </>
  )
}

export default App
