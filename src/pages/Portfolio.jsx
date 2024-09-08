import React, { useState, useEffect,} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolioPageData } from "../components/DB/SundayDb";
import Button from "../components/Button";
import portimage from '../assets/portfolioimages/portfolio.png';
import NavBar from '../components/NavBar';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";
import SubFooter from "../components/SubFooter";

const ITEMS_PER_PAGE = 8;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (activeCategory) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading time
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  // Filtering and sorting by category
  const filteredData =
    activeCategory === "All Works"
      ? portfolioPageData
      : portfolioPageData
          .filter((project) => project.category === activeCategory)
          .sort((a, b) => a.title.localeCompare(b.title));

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Get items for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Pagination handlers
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <NavBar/>
      <main className="w-11/12 mx-auto container font-spaceGrotesk">

        <section className="lg:flex justify-between items-center my-[45px] py-[42px]">
          <div className="lg:w-[582px]">
            <h1 className="xl:text-[55px] lg:text-[35px] text-[25px] md:text-[40px] font-bold leading-tight lg:text-start text-center">Explore Our Impressive Portfolio </h1>
            <p className="text-lg lg:mr-[96px] xl:text-[24px] text-[12px] md:text-[18px] font-medium text-pretty my-3 text-[#575253] lg:text-start text-center">In the past, we have worked on dozens of developments and cutting-edge Web & Digital projects</p>
            <div className="flex gap-3 my-5 lg:justify-start justify-center">
            <Link to="/signup">
            
              <Button size="small" color="success">
                <div className="flex gap-2">
                  <span className="md:text-[15px] text-[12px] p-[0.1rem]">Get Started</span><FaArrowRightLong className='mt-1' />
                </div>
              </Button>
            </Link>
              <div className="border-2 border-[#028A4C] rounded-md text-[#028A4C]">
                <Link to='/contact'>
                <Button size="small" color="white">
                  <span className="md:text-[15px] text-[12px] font-spaceGrotesk">Book a consultant</span>
                </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:justify-center">

          <img src={portimage} alt="portfolio-image" className="rounded-lg" />
          </div>
        </section>

        <section className="flex flex-col items-center lg:items-start gap-3 py-5">
          <h1 className="lg:text-3xl xl:text-[45px] text-2xl md:text-3xl font-bold font-spaceGrotesk">
            Some of our finest works!
          </h1>

          <div className="flex lg:gap-3 xl:gap-7 md:gap-3 gap-2 font-spaceGrotesk md:text-base text-sm lg:text-lg xl:text-xl">
            {["All Works", "Web Design", "App Design"].map((category) => (
              <p
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer ${
                  activeCategory === category
                    ? "text-[#02864A] font-bold border-b-2 border-[#02864A]"
                    : "text-[#090A0B]"
                } transition-colors duration-300 ease-in-out`}
              >
                {category}
              </p>
            ))}
          </div>
        </section>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-t-4 border-[#02864A] border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 xl:gap-12 my-8">
            {currentData.length > 0 ? (
              currentData.map((project) => (
                <div key={project.id} className="overflow-hidden">
                  <img
                    src={project.image}
                    alt="project-images"
                    className="w-full h-64 lg:w-full lg:h-[371px] rounded-t-xl"
                  />
                  <div className="lg:px-9 xl:px-12 px-6 py-3 border border-b-4 rounded-b-lg font-spaceGrotesk">
                    <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.type}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <p className="text-[#02864A] font-semibold cursor-pointer font-spaceGrotesk">
                        See more
                      </p>
                      <FaArrowRightLong className="text-sm text-[#02864A] mt-[2px] cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No projects available in this category.
              </p>
            )}
          </section>
        )}

        {/* Pagination section */}
        <div className="flex justify-center my-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md text-[#02864A] border-[#02864A] disabled:opacity-50"
          >
            <IoIosArrowBack />
          </button>

          {/* Numbered Pagination */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-[#02864A] text-white" : "text-[#60697A]"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2  rounded-md text-[#02864A] border-[#02864A] disabled:opacity-50"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </main>
      <Testimonial/>
      <SubFooter/>
      <Footer/>
    </>
  );
};

export default Portfolio;
