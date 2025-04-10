import React, { useState, useEffect } from "react";
import image1 from "../Assets/office-1.jpg";
import image2 from "../Assets/office-2.jpg";
import image3 from "../Assets/office-3.jpg";
import image4 from "../Assets/office-4.jpg";
import { motion } from "framer-motion";

const WorldWideOffices = () => {
  const cardsData = [
    {
      image: image1,
      country: "Australia",
      phone: "+123.456.7890",
      email: "travisa@example.com",
      address:
        "123, First Floor, 123 St Roots Terrace, Los Angeles 90010, United States of America.",
    },
    {
      image: image2,
      country: "Canada",
      phone: "(012) 0345 6789",
      email: "travisa@example.com",
      address:
        "123, First Floor, 123 St Roots Terrace, Los Angeles 90010, United States of America.",
    },
    {
      image: image3,
      country: "United Kingdom",
      phone: "01234.567.890",
      email: "travisa@example.com",
      address:
        "123, First Floor, 123 St Roots Terrace, Los Angeles 90010, United States of America.",
    },
    {
      image: image4,
      country: "India",
      phone: "+123.45.67890",
      email: "travisa@example.com",
      address:
        "123, First Floor, 123 St Roots Terrace, Los Angeles 90010, United States of America.",
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
    <>
      <div className="container mx-auto px-4 py-8 mt-16">
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
              Worldwide Offices
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
              Explore Our Office Worldwide
            </h1>
            <p className="text-center text-[#8488a0]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm bg-[#F0F5FB] hover:shadow-[#60aae29c] duration-300 rounded-lg overflow-hidden shadow-xl mx-auto group"
            >
              <div className="overflow-hidden w-full">
                <img
                  src={card.image}
                  alt={card.country}
                  className="object-cover transition-transform ease-in-out duration-300 delay-100 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>
              <div className="px-6 pb-8 py-2">
                <h2 className="font-medium text-[26px] mb-3 text-center text-[#003A66]">
                  {card.country}
                </h2>
                <p className="text-[#e02454] font-medium text-xl mb-3 text-center">
                  {card.phone}
                </p>
                <p className="text-gray-700 text-xl mb-4 text-center">
                  {card.email}
                </p>
                <p className="text-gray-500 text-lg text-center">
                  {card.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorldWideOffices;
