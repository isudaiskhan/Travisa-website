import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimage1 from "../Assets/carousel-1.jpg";
import bgimage2 from "../Assets/carousel-2.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    handleScreenChange();

    mediaQuery.addListener(handleScreenChange);

    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    dots: true,
    customPaging: (i) => (
      <button
        className={`w-4 h-4 rounded-full ${
          i === currentSlide
            ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg transform scale-125 animate-pulse"
            : "bg-gray-400"
        } transition-all duration-300 ease-in-out`}
        aria-label={`Slide ${i + 1}`}
      />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {dots.map((dot, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl transform scale-125 animate-pulse"
                : "bg-gray-400"
            } transition-all duration-300 ease-in-out`}
            aria-label={`Slide ${index + 1}`}
            style={{
              boxShadow:
                index === currentSlide
                  ? "0 4px 10px rgba(0, 0, 0, 0.3)"
                  : "none",
              border:
                index === currentSlide
                  ? "2px solid rgba(255, 255, 255, 0.6)"
                  : "none",
            }}
          />
        ))}
      </div>
    ),
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const slideTextVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="relative">
        <button
          className="absolute top-1/2 p-3 bg-[#e02453ab] hover:bg-[#e02454] duration-300 transform -translate-y-1/2 md:left-12 sm:left-8 left-4 text-white rounded-full z-10"
          onClick={goToPrev}
        >
          <BsChevronLeft className="sm:text-4xl text-2xl text-white" />
        </button>
        <button
          className="absolute top-1/2 p-3 bg-[#e02453ab] hover:bg-[#e02454] duration-300 transform -translate-y-1/2 md:right-12 sm:right-8 right-4 text-white rounded-full z-10"
          onClick={goToNext}
        >
          <BsChevronRight className="sm:text-4xl text-2xl text-white" />
        </button>

        <div className="overflow-hidden relative">
          <Slider ref={sliderRef} {...settings} className="relative">
            <div className="relative">
              <div
                className="bg-no-repeat h-screen bg-blend-multiply bg-[#00000075] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgimage1})` }}
              >
                <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
                  <div className="max-w-5xl mt-10 sm:p-5">
                    <motion.div
                      key={currentSlide}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideTextVariants}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-center text-white font-semibold mb-4 font-family text-2xl uppercase">
                        Solution For All Type Of Visas
                      </h2>
                      <h1
                        className="text-[40px] text-center mb-5 sm:text-6xl font-semibold font-family sm:px-0 px-1 lg:text-[80px] text-white"
                        style={{
                          lineHeight: isLargeScreen ? "6.2rem" : "3rem",
                        }}
                      >
                        Immigration Process Starts Here!
                      </h1>
                      <p className="text-white text-center font-medium leading-8 font-family text-lg">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>

                      <div className="flex justify-center mt-12">
                        <button className="bg-[#e02454] hover:bg-[#e02453d2] text-white py-4 px-4 rounded-full md:px-6 lg:px-10 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
                          More Details
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-no-repeat h-screen bg-blend-multiply bg-[#00000075] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgimage2})` }}
              >
                <div className="absolute max-w-6xl px-4 mx-auto inset-0 flex flex-col items-center justify-center">
                  <div className="max-w-4xl mt-10 sm:p-11">
                    <motion.div
                      key={currentSlide}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideTextVariants}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-center text-white font-semibold mb-4 font-family text-2xl uppercase">
                        Solution For All Type Of Visas
                      </h2>
                      <h1
                        className="text-[40px] text-center mb-5 sm:text-6xl font-semibold font-family sm:px-0 px-1 lg:text-[80px] text-white"
                        style={{
                          lineHeight: isLargeScreen ? "6.2rem" : "3rem",
                        }}
                      >
                        Best Visa Immigrations Services
                      </h1>
                      <p className="text-white text-center font-medium leading-8 font-family text-lg">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>

                      <div className="flex justify-center mt-12">
                        <button className="bg-[#e02454] hover:bg-[#e02453d2] text-white py-4 px-4 rounded-full md:px-6 lg:px-10 text-lg focus:outline-none focus:ring-2 focus:ring-[#3ca341] transition duration-300 ease-in-out">
                          More Details
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/*  Dots */}
          <div className="absolute bottom-8 w-full flex justify-center space-x-8">
            {[...Array(2).keys()].map((index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded-full ${
                  index === currentSlide
                    ? "bg-[#e02454] shadow-lg transform scale-150"
                    : "bg-gray-300"
                } transition-all duration-300 ease-in-out`}
                aria-label={`Slide ${index + 1}`}
                style={{
                  border:
                    index === currentSlide
                      ? "2px solid rgba(255, 255, 255, 0.6)"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
