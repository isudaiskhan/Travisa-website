import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import image1 from "../Assets/training-1.jpg";
import image2 from "../Assets/training-2.jpg";
import image3 from "../Assets/training-3.jpg";
import image4 from "../Assets/training-4.jpg";

const teamMembers = [
  {
    name: "IELTS Coaching",
    designation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.",
    image: image1,
  },
  {
    name: "TOEFL Coaching",
    designation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.",
    image: image2,
  },
  {
    name: "PTE Coaching",
    designation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.",
    image: image3,
  },
  {
    name: "OET Coaching",
    designation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.",
    image: image4,
  },
];

const Training = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    // Initial check
    handleScreenChange();

    // Listen for changes
    mediaQuery.addListener(handleScreenChange);

    // Clean up
    return () => {
      mediaQuery.removeListener(handleScreenChange);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <div className="w-full py-20 mt-5 overflow-hidden bg-[#f0f5fb]">
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
              CHECK OUR TRAINING
            </span>
            <div className="flex items-center">
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
            </div>
          </div>

          <div className="xl:w-1/2 mx-auto">
            <h1
              className="text-center text-[#003A66] mb-7 sm:text-5xl text-4xl mt-6 font-family font-semibold"
              style={{ lineHeight: isLargeScreen ? "3.8rem" : "3rem" }}
            >
              Get the Best Coacing Service Training with Our Travisa
            </h1>
            <p className="text-center text-[#8488a0]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
        </motion.div>
        <div className="w-full lg:px-7 px-4 mt-5">
          <div className="container mx-auto grid lg:grid-cols-4 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 200 + index * 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  y: { type: "spring", stiffness: 40 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="w-full my-4 p-4 relative group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={`Team member ${index + 1}`}
                    className="w-full rounded transition-transform ease-in-out duration-700 delay-150 group-hover:scale-110 group-hover:-translate-y-1"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded bg-[#1a4d349c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bottom-0 left-0 w-full flex flex-col items-center justify-start p-4 bg-[#E02454] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1/2 translate-y-full">
                      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-2xl font-semibold mb-3">
                          {member.name}
                        </p>
                        <p className="text-gray-200 text-lg mb-5">
                          {member.designation}
                        </p>
                        <div className="flex space-x-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center cursor-pointer duration-300 text-white">
                            <span className="mr-2">Read More</span>
                            <FaLongArrowAltRight className="text-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 text-2xl font-semibold left-0 w-full text-center text-white p-2 z-10 transition-opacity duration-500 group-hover:opacity-0">
                    {member.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="flex text-white justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#003A66] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-4 px-10 overflow-hidden rounded-full bg-[#e02454] group">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
