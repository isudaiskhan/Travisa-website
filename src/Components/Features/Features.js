import React, { useState, useEffect } from "react";
import {
  FaCcVisa,
  FaDollarSign,
  FaAtlas,
  FaUsers,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const featuresData = [
  {
    Icon: FaDollarSign,
    title: "Cost-Effective",
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    Icon: FaCcVisa,
    title: "Secure Payments",
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    Icon: FaAtlas,
    title: "Global Coverage",
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
  {
    Icon: FaUsers,
    title: "User-Friendly",
    description:
      "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus,",
  },
];

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
    className="shadow-lg rounded-lg shadow-gray-400 py-8 group flex flex-col items-center relative overflow-hidden"
  >
    <div className="p-6 bg-[#F0F5FB] group-hover:bg-white group-hover:rotate-360 duration-500 group-hover:rounded-full rounded-lg relative z-10">
      <Icon className="text-6xl text-[#003a66] group-hover:text-[#E02454]" />
    </div>
    <h1 className="text-xl text-[#003a66] text-center tracking-wide font-medium mt-7">
      {title}
    </h1>
    <p className="text-[#8488a0] text-center mt-4 px-12">{description}</p>
    <div className="flex items-center cursor-pointer mt-7 duration-300 text-[#E02454] hover:text-[#003a66]">
      <span className="mr-2">Read More</span>
      <FaLongArrowAltRight className="text-2xl" />
    </div>
    <div className="absolute inset-0 bg-[#dfe6ee] -z-10 transition-transform duration-500 group-hover:translate-y-0 translate-y-full h-full"></div>
  </motion.div>
);

const Features = () => {
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
    <div className="mt-12 container mx-auto overflow-hidden py-10">
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
            WHY CHOOSE US
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
            Offer Tailor Made Services That Our Client Requires
          </h1>
          <p className="text-center text-[#8488a0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 px-10 lg:px-14 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-[#e02454] hover:bg-[#003A66] text-white py-3.5 px-4 rounded-full md:px-6 lg:px-10 text-lg focus:outline-none transition duration-300 ease-in-out">
          More Features
        </button>
      </div>
    </div>
  );
};

export default Features;
