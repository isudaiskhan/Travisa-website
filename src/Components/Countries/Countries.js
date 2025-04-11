import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../Assets/country-1.jpg";
import image2 from "../Assets/country-2.jpg";
import image3 from "../Assets/country-3.jpg";
import image4 from "../Assets/country-4.jpg";
import image5 from "../Assets/brazil.jpg";
import image6 from "../Assets/india.jpg";
import image7 from "../Assets/usa.jpg";
import image8 from "../Assets/italy.jpg";

const featuresData = [
  {
    image: image1,
    flag: image5,
    countryName: "Brazil",
  },
  {
    image: image2,
    flag: image6,
    countryName: "India",
  },
  {
    image: image3,
    flag: image7,
    countryName: "USA",
  },
  {
    image: image4,
    flag: image8,
    countryName: "Italy",
  },
];

const Countries = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleScreenChange = () => setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addListener(handleScreenChange);

    return () => mediaQuery.removeListener(handleScreenChange);
  }, []);

  const FeatureCard = ({ image, flag, countryName }) => (
    <div className="relative flex flex-col items-center group">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 transition-transform duration-500 group-hover:rotate-360">
        <div className="rounded-full bg-white p-1 shadow-lg">
          <img src={flag} alt="Flag" className="rounded-full w-24 h-24" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
        className="shadow-lg rounded-lg shadow-gray-400 group flex flex-col items-center overflow-hidden bg-white relative"
      >
        <div className="w-full h-96 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt="Country"
            className="w-full h-full object-cover transition-transform ease-in-out duration-500 delay-100 group-hover:scale-125 group-hover:-translate-y-1"
          />
        </div>

        <div className="absolute inset-0 bg-[#003a669d] transition-transform duration-500 group-hover:translate-y-0 translate-y-full h-full flex items-center justify-center">
          <span className="text-white text-2xl font-family">{countryName}</span>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      <div className="mt-28 container mx-auto overflow-hidden py-10">
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
              COUNTRIES WE OFFER
            </span>
            <div className="flex items-center">
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
            </div>
          </div>

          <div className="xl:w-7/12 mx-auto">
            <h1
              className="text-center text-[#003A66] mb-7 sm:text-5xl text-4xl mt-6 font-family font-semibold"
              style={{ lineHeight: isLargeScreen ? "3.8rem" : "3rem" }}
            >
              Immigration & visa services following Countries
            </h1>
            <p className="text-center text-[#8488a0]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 px-10 lg:px-14 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7 gap-x-7 gap-y-20">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              flag={feature.flag}
              countryName={feature.countryName}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="flex text-white justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#003A66] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 py-4 px-10 overflow-hidden rounded-full bg-[#e02454] group">
            More Countries
          </button>
        </div>
      </div>
    </>
  );
};

export default Countries;
