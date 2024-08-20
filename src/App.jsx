import './App.css'
import About from './pages/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import Tailor from './components/Tailor'

function App() {

  return (
    <>
      <Tailor />
     <About/>
     <ContactForm/>
     <SubFooter/>
     <Footer/>
    </>
  )
}

export default App
