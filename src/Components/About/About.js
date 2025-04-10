import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../Assets/about-2.png";
import image2 from "../Assets/about-3.jpg";
import { FaMapMarkedAlt, FaPassport, FaTicketAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const About = () => {
  const features = [
    "Offer 100 % Genuine Assistance",
    "It's Faster & Reliable Execution",
    "Accurate & Expert Advice",
  ];

  const vibrateAnimation = {
    animate: {
      x: [0, -5, 5, -5, 5, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.5,
        ease: "easeInOut",
        repeatDelay: 3,
      },
    },
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialRight = {
    x: initialXRight, // Set initial position for right element
    opacity: 0,
  };

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

  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const durations = {
      years: 150,
      clients: 50,
      projects: 70,
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
      });
    };

    const intervals = Object.keys(experience).map((property) => {
      return setInterval(() => {
        setExperience((prevExperience) => ({
          ...prevExperience,
          [property]: Math.min(
            prevExperience[property] + 1,
            property === "years" ? 15 : property === "clients" ? 50 : 50
          ),
        }));
      }, durations[property]);
    });

    document.addEventListener("visibilitychange", resetExperience);

    return () => {
      document.removeEventListener("visibilitychange", resetExperience);
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <>
      <div className="container mx-auto sm:px-5 px-6 py-20 mt-8 overflow-hidden">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full sm:w-2/5 px-5 mb-8 md:mb-0">
            <div className="container mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} // Initial state: small size and hidden
                whileInView={{ scale: 1, opacity: 1 }} // Animate to larger size and visible when in view
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 60,
                  duration: 1,
                }}
                className="grid gap-2 bg-[#F0F5FB] rounded-xl"
              >
                <div>
                  <img src={image1} alt="Image 1" className="w-full" />
                </div>

                <div>
                  <img
                    src={image2}
                    alt="Image 2"
                    className="rounded-t-full w-full border-b-[6px] border-b-[#003a66]"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - Text */}
          <motion.div
            initial={initialRight}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="w-full lg:w-3/5 md:mt-4"
          >
            <div className="mb-8 px-6">
              <h2 className="text-2xl font-family font-medium text-[#003A66] capitalize mb-3">
                About the company
              </h2>
              <h1
                className="flex mt-5 flex-wrap text-[#003A66] font-family sm:text-5xl text-4xl font-semibold"
                style={{ lineHeight: isLargeScreen ? "3.8rem" : "3rem" }}
              >
                We're Trusted Immigration Consultant Agency.
              </h1>

              <p className="text-gray-500 font-family text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                architecto consectetur iusto perferendis blanditiis assumenda
                dignissimos, commodi fuga culpa earum explicabo libero sint est
                mollitia saepe! Sequi asperiores rerum nemo!
              </p>
            </div>

            <div className="w-full sm:flex px-6 mt-8">
              <div className="sm:w-1/2">
                {/* Box 1 - Experience */}
                <div className="flex items-center">
                  <FaMapMarkedAlt className="text-5xl text-[#e02454]" />
                  <div className="flex flex-col items-start ps-5">
                    <h3 className="text-xl font-medium font-family text-[#003A66]">
                      Best Immigration Resources
                    </h3>
                  </div>
                </div>
              </div>

              <div className="sm:w-1/2 sm:mt-0 mt-5">
                {/* Box 2 - Happy Clients */}
                <div className="flex items-center sm:ml-12">
                  <FaPassport className="text-5xl text-[#e02454]" />
                  <div className="flex flex-col items-start ps-5">
                    <h3 className="text-xl font-medium font-family text-[#003A66]">
                      Return Visas Availabile
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center mt-10 rounded-lg px-5">
              <div className="flex flex-col items-center text-center mb-6 md:mb-0 sm:mr-10 bg-gray-100 rounded-lg p-3.5">
                <div className="mb-4">
                  <FaTicketAlt className="text-[#003a66] text-7xl" />
                </div>
                <h2 className="sm:text-6xl text-4xl font-family font-bold text-[#003a66] mb-4 mr-2">
                  {experience.clients}
                </h2>

                <p className="text-gray-500 text-lg">Years of Experience</p>
              </div>

              <div className="flex flex-col items-start">
                <ul className="space-y-4 mb-7">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center font-family font-medium text-lg text-[#003a66]"
                    >
                      <FaCheck className="text-white bg-[#e02454] rounded-full mr-2 text-xl p-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center">
                  <motion.div {...vibrateAnimation}>
                    <FaPhoneVolume className="text-[#003a66] mr-2 text-5xl" />
                  </motion.div>
                  <div className="ml-5">
                    <p className="text-[#003a66] text-lg mb-1">
                      Have any questions?
                    </p>
                    <p className="text-[#e02454] font-semibold text-xl tracking-wide">
                      Free: +0123 456 7890
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
