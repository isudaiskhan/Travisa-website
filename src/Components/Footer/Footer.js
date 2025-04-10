import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaShare } from "react-icons/fa";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
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

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialXLeft = windowSize.width >= 640 ? -200 : -100; // Initial X position for left animation
  const initialXRight = windowSize.width >= 640 ? 200 : 100; // Initial X position for right animation

  const initialGreen = {
    x: initialXLeft,
    opacity: 0,
  };

  const initialRed = {
    x: initialXRight,
    opacity: 0,
  };

  return (
    <>
      <div className="bg-[#003A66]">
        <div className="container py-12 mx-auto mt-28 md:px-2 px-6 text-gray-300 overflow-hidden">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:flex lg:flex mx-auto container"
          ></motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full lg:w-1/4 md:w-2/5">
              <motion.div
                initial={initialGreen}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="space-y-3 mt-16"
              >
                <h6 className="text-[#e02454] text-3xl font-family font-medium ps-2">
                  Contact Info
                </h6>
                <div className="mt-20 text-white py-4 space-y-3">
                  <div className="flex items-center space-x-2 text-white">
                    <FiMapPin className="ml-2" />
                    <span>123 Street, New York, USA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <FiPhone className="ml-2" />
                    <span>+012 345 67890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <FiMail className="ml-2" />
                    <span>example@gmail.com</span>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center justify-start">
                <div className="md:flex items-center py-6 text-center">
                  <motion.div
                    initial={initialGreen}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="flex justify-end text-white space-x-3 flex-wrap ps-1"
                  >
                    <div className="px-2 cursor-pointer py-2">
                      <FaShare className="text-[#e02454] text-xl" />
                    </div>

                    <div className="px-2 cursor-pointer py-2 group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]">
                      <FaFacebookF className="group-hover:text-[#e02454] text-white text-xl" />
                    </div>
                    <div className="px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]">
                      <AiOutlineTwitter className="group-hover:text-[#e02454] text-white text-xl" />
                    </div>

                    <div className="px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]">
                      <FaInstagram className="group-hover:text-[#e02454] text-white text-xl" />
                    </div>

                    <div className="px-2 py-2 cursor-pointer group rounded-full border-2 duration-300 border-white hover:bg-[#E8F5E9]">
                      <AiFillLinkedin className="group-hover:text-[#e02454] text-white text-xl" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/5 md:w-2/5">
              <motion.div
                initial={initialGreen}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="space-y-3 mt-16"
              >
                <h6 className="text-[#e02454] text-3xl font-family font-medium">
                  Opening Time
                </h6>
                <div className="">
                  <h1 className="font-medium text-lg font-family text-[#6c757d]">
                    Mon - Friday :
                  </h1>
                  <h4 className="text-lg font-medium font-family mt-2 text-white">
                    09.00 am to 07.00 pm
                  </h4>
                  <h1 className="font-medium text-lg mt-5 font-family text-[#6c757d]">
                    Saturday :
                  </h1>
                  <h4 className="text-lg font-medium font-family mt-2 text-white">
                    10.00 am to 05.00 pm
                  </h4>
                  <h1 className="font-medium text-lg mt-5 font-family text-[#6c757d]">
                    Vacation :
                  </h1>
                  <h4 className="text-lg font-medium font-family mt-2 text-white">
                    All Sunday is our vacation
                  </h4>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/5 md:w-2/5">
              <motion.div
                initial={initialRed}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="space-y-3 mt-16"
              >
                <h6 className="text-[#e02454] text-3xl font-family font-medium ps-2">
                  Our Services
                </h6>
                <ul>
                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Business
                    </li>
                  </div>
                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Evaluation
                    </li>
                  </div>
                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Migrate
                    </li>
                  </div>
                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Study
                    </li>
                  </div>

                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Counselling
                    </li>
                  </div>

                  <div className="flex cursor-pointer items-center group">
                    <MdKeyboardArrowRight className="mr-1 text-xl text-white duration-500 group-hover:text-[#e02454]" />
                    <li className="py-2 text-white group-hover:tracking-widest duration-500 group-hover:text-[#e02454]">
                      Work / Career
                    </li>
                  </div>
                </ul>
              </motion.div>
            </div>

            <div className="overflow-hidden md:w-2/5 lg:w-[27%] md:px-0 px-2 w-full">
              <motion.div
                initial={initialRed}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="md:mx-auto md:max-w-md"
              >
                <div className="mt-16 md:px-3">
                  <div className="text-white">
                    <h1 className="text-[#E02454] text-3xl font-family font-medium">
                      Newsletter
                    </h1>
                    <p className="mt-5 text-lg">
                      Dolor amet sit justo amet elitr clita ipsum elitr
                      est.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>

                  <div className="w-full flex justify-center items-center mt-6">
                    <div className="rounded-lg shadow-md w-full relative">
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="py-4 rounded-full border caret-black bg-[#E8F5E9] text-black focus:outline-none w-full pl-5 pr-12 placeholder:text-gray-500"
                      />

                      <button className="absolute top-1 text-lg right-1.5 p-2.5 px-6 border bg-[#E02454] hover:bg-[#003a66] duration-300 rounded-full">
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="tracking-wider py-7 text-start bg-[#E02454] mt-8 overflow-hidden">
          <div className="flex flex-col mx-auto container lg:px-10 px-0 sm:ps-0 sm:pe-0 ps-5 pe-5 lg:flex-row lg:space-y-0 space-y-5">
            <motion.div
              initial={initialGreen}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="lg:w-7/12 lg:text-start text-center"
            >
              <h1 className="text-white text-lg">
                <span>Travisa</span> , Copyright © 2024 All rights reserved .
              </h1>
            </motion.div>
            <motion.div
              initial={initialRed}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="lg:w-5/12 flex flex-wrap lg:justify-end justify-center space-x-5"
            >
              <h1 className="text-white text-lg">
                Developed by{" "}
                <a
                  className="border-b hover:text-[#003a66] duration-300"
                  href="https://github.com/isudaiskhan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sudais Khan .
                </a>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
