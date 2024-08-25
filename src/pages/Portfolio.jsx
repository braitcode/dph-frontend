import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { portfolioData } from "../components/DB/SundayDb"; // Adjust the path as needed

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [isLoading, setIsLoading] = useState(false);

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
      ? portfolioData
      : portfolioData
          .filter((project) => project.category === activeCategory)
          .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="max-w-[1260px] container m-auto px-4 sm:px-2 lg:px-12">
      <section className="flex flex-col items-center gap-3 py-5">
        <h2 className="lg:text-2xl xl:text-[28px] md:text-xl text-[#02864A] font-spaceGrotesk font-semibold">
          Our Projects
        </h2>
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
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-7 my-8">
          {filteredData.length > 0 ? (
            filteredData.map((project) => (
              <div key={project.id} className="overflow-hidden">
                <img
                  src={project.image}
                  alt="project-images"
                  className="w-[600px] h-64 lg:w-full lg:h-[425px] rounded-t-xl"
                />
                <div className="lg:px-9 xl:px-12 px-6 py-3 border border-b-4 rounded-b-lg font-spaceGrotesk">
                  <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.position}</p>
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

      <div className="flex items-center gap-3 justify-center mb-9 font-spaceGrotesk">
        <p className="text-[#02864A] font-semibold cursor-pointer">View all</p>
        <FaArrowRightLong className="text-sm text-[#02864A] mt-[2px] cursor-pointer" />
      </div>
    </main>
  );
};

export default Portfolio;
