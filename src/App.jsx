import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PageNotfound from "./pages/PageNotFound";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import { useAuth } from './components/contexts/Auth';
import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";
import toast, { Toaster } from 'react-hot-toast';
import Reset from "./components/Reset";





function App() {
  const { PrivateRoutes, AdminRoutes } = useAuth();

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotfound />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/check" element={<CheckEmail />} />
          <Route path="/reset-password/:token" element={<Reset />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
