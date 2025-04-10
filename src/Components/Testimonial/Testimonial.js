import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import image1 from "../Assets/testimonial-1.jpg";
import image2 from "../Assets/testimonial-2.jpg";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ rating }) => {
  const sliderRef = useRef();

  const images = [image1, image2, image1, image2];
  const productNames = [
    "Client Name",
    "Client Name",
    "Client Name",
    "Client Name",
  ];
  const prices = ["Profession", "Profession", "Profession", "Profession"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addListener(handleScreenChange);

    return () => mediaQuery.removeListener(handleScreenChange);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 150, opacity: 0 }} // Initial position: below its final position and hidden
        whileInView={{ y: 0, opacity: 1 }} // Move to original position (y: 0) and become fully visible when in view
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="container py-12 mx-auto mt-8 relative"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="sm:px-0 px-3"
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
            </div>
            <span className="mx-4 text-blue-900 text-xl font-medium font-family">
              OUR CLIENTS RIVIEWS
            </span>
            <div className="flex items-center">
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
            </div>
          </div>

          <div className="xl:w-3/5 mx-auto">
            <h1
              className="text-center text-[#003A66] mb-7 sm:text-5xl text-4xl mt-6 font-family font-semibold"
              style={{ lineHeight: isLargeScreen ? "3.8rem" : "3rem" }}
            >
              What Our Clients Say
            </h1>
            <p className="text-center text-[#8488a0]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
        </motion.div>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-wrap -mx-4 sm:mt-20 mt-24">
                <div className=" mx-auto w-11/12 md:px-3 sm:px-14 px-4 mb-4">
                  <div className="rounded-md bg-[#F0F5FB] overflow-hidden flex">
                    <div className="w-full px-8 py-8">
                      <p className="text-[#7a8a9e] text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitati eiusmod tempor incididunt.
                      </p>
                      <div className="flex items-center justify-end mt-5 space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`w-5 h-5 ${
                              index < rating ? "" : "text-[#e02454]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 flex">
                    <img
                      className="w-28 rounded-full border-4 border-[#e02454] object-cover mb-3 sm:mb-0 sm:mr-7"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                    <div className="relative flex flex-wrap mt-4">
                      <div className="w-full sm:w-auto">
                        <h2 className="text-2xl font-medium text-[#003A66]">
                          {productNames[index]}
                        </h2>
                        <p className="text-[#7a8a9e] text-xl mt-2">
                          {prices[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="absolute group top-0 right-28 xl:mt-60 mt-72"
          onClick={goToPrev}
        >
          <BsArrowLeft className="text-5xl text-[#003A66] hover:text-[#e02454] duration-300" />
        </button>
        <button
          className="absolute top-0 group right-0 xl:mt-60 mt-72 mr-8"
          onClick={goToNext}
        >
          <BsArrowRight className="text-5xl text-[#003A66] hover:text-[#e02454] duration-300" />
        </button>
      </motion.div>
    </>
  );
};

export default Testimonial;
