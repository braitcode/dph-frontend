import React, { useState, useEffect } from "react";
import image1 from "../assets/portfolioimages/image1.png";
import image2 from "../assets/portfolioimages/image2.png";
import image3 from "../assets/portfolioimages/image3.png";
import image4 from "../assets/portfolioimages/image4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Portfolio = () => {
  const data = [
    { id: 1, image: image1, title: "Car rental website", position: "UI/UX Web design", category: "Web Design" },
    { id: 2, image: image2, title: "NFT website", position: "UI/UX Web design", category: "Web Design" },
    { id: 3, image: image3, title: "My Watch", position: "UI/UX Web design", category: "App Design" },
    { id: 4, image: image4, title: "Admin Dashboard", position: "UI/UX Web design", category: "Web Design" },
  ];

  const [activeCategory, setActiveCategory] = useState("All Works");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (activeCategory) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading time
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

//   to filter by category
  const filteredData = activeCategory === "All Works"
    ? data
    : data
        .filter((project) => project.category === activeCategory)
        .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <main className="container m-auto px-4 sm:px-2 lg:px-8">
      <section className="flex flex-col items-center gap-5 py-5">
        <h2 className="lg:text-2xl md:text-xl text-[#02864A] font-spaceGrotesk font-semibold">
          Our Projects
        </h2>
        <h1 className="lg:text-3xl text-xl md:text-2xl font-bold font-spaceGrotesk">
          Some of our finest works!
        </h1>

        <div className="flex lg:gap-3 gap-5 font-spaceGrotesk">
          {["All Works", "Web Design", "App Design"].map((category) => (
            <p
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer ${
                activeCategory === category ? "text-[#02864A] font-bold border-b-2 border-[#02864A]" : "text-gray-600"
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
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-8">
          {filteredData.length > 0 ? (
            filteredData.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:w-full lg:h-96 rounded-t-xl"
                />
                <div className="lg:px-9 px-6 py-3 border border-b-4 rounded-b-lg font-spaceGrotesk">
                  <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.position}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <p className="text-[#02864A] font-semibold cursor-pointer font-spaceGrotesk">See more</p>
                    <FaArrowRightLong className="text-sm text-[#02864A] mt-[2px] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No projects available in this category.</p>
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
