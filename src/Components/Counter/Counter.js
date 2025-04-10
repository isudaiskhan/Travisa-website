import React, { useState, useEffect } from "react";
import bgimage from "../Assets/breadcrumb.png";
import { FaAtlas, FaUsers, FaUserCheck, FaHandshake } from "react-icons/fa";

const stats = [
  {
    icon: <FaAtlas />,
    label: "VISA CATEGORIES",
    key: "years",
    bg: "bg-blue-700",
  },
  {
    icon: <FaUsers />,
    label: "TEAM MEMBERS",
    key: "clients",
    bg: "bg-red-700",
  },
  {
    icon: <FaUserCheck />,
    label: "VISA PROCESS",
    key: "projects",
    bg: "bg-pink-700",
  },
  {
    icon: <FaHandshake />,
    label: "SUCCESS RATE",
    key: "success",
    bg: "bg-blue-700",
  },
];

const Counter = () => {
  const [experience, setExperience] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    success: 0,
  });

  useEffect(() => {
    const durations = {
      years: 90,
      clients: 8,
      projects: 65,
      success: 32,
    };

    const incrementValues = {
      projects: 100,
      clients: 1,
      years: 1,
      success: 1,
    };

    const resetExperience = () => {
      setExperience({
        years: 0,
        clients: 0,
        projects: 0,
        success: 0,
      });
    };

    const intervals = Object.keys(experience).map((property) => {
      return setInterval(() => {
        setExperience((prevExperience) => ({
          ...prevExperience,
          [property]: Math.min(
            prevExperience[property] + (incrementValues[property] || 1),
            property === "years"
              ? 31
              : property === "clients"
              ? 377
              : property === "projects"
              ? 4900
              : 98 // Stop success rate at 98%
          ),
        }));
      }, durations[property]);
    });

    // Add event listener for visibility change
    document.addEventListener("visibilitychange", resetExperience);

    // Cleanup: remove event listener and clear intervals
    return () => {
      document.removeEventListener("visibilitychange", resetExperience);
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <>
      <div className="relative py-28 mt-10">
        <div
          className="absolute inset-0 bg-fixed bg-no-repeat bg-blend-multiply bg-[#dadfe6] bg-cover filter blur-sm"
          style={{ backgroundImage: `url(${bgimage})` }}
        ></div>

        <div className="relative container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-24 px-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="shadow-md rounded-b-full group text-center flex flex-col items-center relative z-10 h-full"
            >
              <div className="w-full bg-[#003A66] text-white flex justify-center items-center pb-10 rounded-t-md">
                <div className="p-7 bg-[#1d6196b2] -mt-5 rounded-t-md rounded-bl-[3rem] border-b-4 border-b-red-500 relative text-6xl">
                  <div className="group-hover:rotate-360 duration-500">
                    <span
                      role="img"
                      className="text-[#E02454]"
                      aria-label={stat.label}
                    >
                      {stat.icon}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white p-10 shadow-lg shadow-gray-900 rounded-b-full flex flex-col justify-between flex-grow">
                <div className="text-[#003A66] text-xl font-semibold font-family uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-3xl font-bold text-[#E02454] mt-2">
                  {stat.key
                    ? stat.key === "projects"
                      ? `${(experience[stat.key] / 1000).toFixed(1)}K`
                      : stat.key === "success"
                      ? `${experience[stat.key]}%`
                      : experience[stat.key]
                    : stat.value}
                  {stat.key === "years"
                    ? "+"
                    : stat.key === "clients"
                    ? "+"
                    : null}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
