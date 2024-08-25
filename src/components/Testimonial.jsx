import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { testimonialData } from "./DB/SundayDb";


const Testimonial = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("next"); // Set the right button as active by default

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 1
    );
    setActiveButton("prev");
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 3 ? 0 : prevIndex + 1
    );
    setActiveButton("next");
  };

  return (
    <>
      <main className="px-4 sm:px-2 lg:px-8 bg-[#F2F2F2] py-7">
        <h1 className="text-3xl text-center font-semibold font-spaceGrotesk">
          Testimonial
        </h1>
        {/* testimony box */}
        <section className="container m-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:gap-12 lg:gap-10 md:gap-5 lg:py-7 py-3 xl:p-9">
          {testimonialData.slice(currentIndex, currentIndex + 3).map((slide, index) => {
            const isMiddleItem = index === 1;
            return (
              <div
                key={slide.id}
                className={`p-3 border-2 rounded-lg font-spaceGrotesk transition-transform duration-500 mt-5 flex flex-col justify-between lg:h-[13rem] xl:h-[18rem] xl:p-5 ${
                  isMiddleItem
                    ? "lg:scale-[115%] md:scale-[110%] text-white bg-[#028A4C]"
                    : "border-[#B3B3B3] text-[#4B4B4B]"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={slide.image}
                    alt="profile-image"
                    className="h-fit"
                  />
                  <div>
                    <h2 className="font-semibold">{slide.title}</h2>
                    <h6 className="text-[#C8C8C8] text-sm">{slide.location}</h6>
                  </div>
                </div>
                <p
                  className="my-3 flex-grow overflow-hidden hover:overflow-auto text-sm xl:text-xl"
                  style={{ maxHeight: "9rem" }}
                >
                  {slide.testimony}
                </p>
                <div className="mt-auto mb-3">
                  <img src={slide.rate} alt="rating" className="w-fit h-auto" />
                </div>
              </div>
            );
          })}
        </section>
        {/* slide button section */}
        <div className="flex gap-5 justify-center my-5 pt-5">
          <button
            onClick={handlePrevClick}
            className={`border p-2 rounded-lg ${
              activeButton === "prev" ? "bg-[#028A4C] text-white" : ""
            }`}
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className={`border p-2 rounded-lg ${
              activeButton === "next" ? "bg-[#028A4C] text-white" : ""
            }`}
          >
            <SlArrowRight />
          </button>
        </div>
      </main>
    </>
  );
};

export default Testimonial;
