import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../Assets/service-1.jpg";
import image2 from "../Assets/service-2.jpg";
import image3 from "../Assets/service-3.jpg";
import image4 from "../Assets/service-4.jpg";

const Services = () => {
  const cardData = [
    {
      image: image1,
      title: "Job Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Job Visa",
    },
    {
      image: image2,
      title: "Business Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Business Visa",
    },
    {
      image: image3,
      title: "Diplomatic Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Diplomatic Visa",
    },
    {
      image: image4,
      title: "Student Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Student Visa",
    },
    {
      image: image1,
      title: "Tourist Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Residence Visa",
    },
    {
      image: image2,
      title: "Transit Visa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia fugit dolores nesciunt adipisci obcaecati veritatis cum, ratione aspernatur autem velit.",
      ButtonText: "Tourist Visa",
    },
  ];

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
    <div className="container mx-auto px-4 py-10 mt-16">
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
        <div className="xl:w-3/5 mx-auto">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
            </div>
            <span className="mx-4 text-blue-900 text-xl font-medium font-family">
              Visa Categories
            </span>
            <div className="flex items-center">
              <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
              <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
            </div>
          </div>
          <h1
            className="text-center text-[#003A66] mb-7 sm:text-5xl text-4xl mt-6 font-family font-semibold"
            style={{ lineHeight: isLargeScreen ? "3.8rem" : "3rem" }}
          >
            Enabling Your Immigration Successfully
          </h1>
          <p className="text-center text-[#8488a0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
      </motion.div>

      <div className="min-h-screen flex items-center justify-center py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 p-6">
          {cardData.map((card, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full transition-transform ease-in-out duration-700 delay-150 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>

              <div className="absolute inset-0 bg-[#003A66] mx-8 rounded-lg flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 group-hover:top-[38%] transition-all duration-500 ease-in-out z-20">
                <h2 className="text-2xl font-family font-semibold mb-5">
                  {card.title}
                </h2>
                <p className="text-center text-gray-400 border-gray-600 border-t py-6 px-4">
                  {card.description}
                </p>
                <button className="mt-4 px-10 py-4 bg-[#E02454] rounded-full text-white hover:bg-red-600 transition-colors duration-200">
                  Explore More
                </button>
              </div>

              <div className="absolute left-1/2 -mt-8 transform -translate-x-1/2">
                <button className="text-white bg-[#003a66] py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-5 font-family text-lg sm:text-xl md:text-2xl font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e02454] transition duration-300 ease-in-out">
                  {card.ButtonText}
                </button>
              </div>

              <div className="flex justify-center z-10 mt-20">
                <button className="text-[#e02454] bg-gray-100 py-4 px-4 font-family font-medium rounded-full md:px-6 lg:px-12 text-lg focus:outline-none focus:ring-2 focus:ring-[#e02454] transition duration-300 ease-in-out">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
