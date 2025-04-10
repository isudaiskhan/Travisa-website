import React from "react";
import { motion } from "framer-motion";
import { RxSlash } from "react-icons/rx";
import bgimage from "../../Assets/breadcrumb.png";
import TopBar from "../../TopBar/TopBar";
import Navbar from "../../Navbar/Navbar";
import WorldWideOffices from "../../WorldWideOffices/WorldWideOffices";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaChevronRight, FaPhone, FaShare } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import Footer from "../../Footer/Footer";
import ScrollButton from "../../ScrollButton/ScrollButton";

const ContactSection = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="relative">
        <div className="relative h-96 flex justify-center items-center overflow-hidden">
          <div
            className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#0d4774]"
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col items-center pt-10 sm:ps-10 sm:px-0 px-5 h-full"
            >
              <h1 className="sm:text-7xl text-5xl font-family font-semibold text-center text-white mt-28">
                Contact Us
              </h1>
              <div className="flex flex-wrap items-center text-lg mt-6 justify-center">
                <h2 className="text-white mr-3">Home</h2>
                <RxSlash className="text-white mr-3" />

                <h2 className="text-white mr-3">Pages</h2>
                <RxSlash className="text-white mr-3" />

                <h2 className="text-[#e02454]">Contact</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-white sm:px-4 px-6 py-10 container mx-auto mt-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center mb-3">
              <span className=" text-blue-900 text-xl font-medium font-family">
                Quick Contact
              </span>
              <div className="flex items-center ml-4">
                <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
                <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold font-family text-[#003A66] mb-4 leading-snug">
              Have Questions? Don't Hesitate to Contact Us
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              totam deserunt tempora. Tempore neque necessitatibus corporis
              error earum sint quae?
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded">
                <FaMapLocationDot className="text-[#003A66] text-6xl" />
              </div>
              <div>
                <h3 className="font-semibold font-family text-2xl text-[#003A66]">
                  Location
                </h3>
                <p className="text-md text-gray-500">
                  123, First Floor, 123 St Roots Terrace, Los Angeles 90010,
                  United States of America.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col sm:flex-row gap-10 mb-6 mt-5">
              <div className="flex gap-4">
                <div>
                  <FaPhone className="text-[#003A66] text-4xl" />
                </div>
                <div>
                  <h4 className="font-semibold font-family text-xl text-[#003A66]">
                    Quick Contact
                  </h4>
                  <p className="font-family text-xl mb-3 text-[#003A66]">
                    <span className="block">Phone:</span> +012 3456 7890
                  </p>
                  <p className="font-family text-xl text-[#003A66]">
                    <span className="block">Email:</span> travisa@example.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <IoCalendarNumberSharp className="text-[#003A66] text-6xl" />
                </div>
                <div>
                  <h4 className="font-semibold font-family text-xl text-[#003A66]">
                    Opening Hrs
                  </h4>
                  <p className="font-family text-xl mb-3 text-[#003A66]">
                    <span>Mon - Friday:</span> <br />
                    09.00 am to 07.00 pm
                  </p>
                  <p className="font-family text-xl mb-3 text-[#003A66]">
                    <span>Saturday:</span> <br />
                    10.00 am to 05.00 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="bg-gray-100 p-4 rounded">
                <FaShare className="text-[#003A66] text-6xl" />
              </div>

              <div className="flex flex-wrap gap-4 text-[#e02454] text-sm font-semibold">
                {["facebook", "twitter", "instagram"].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="flex items-center hover:underline hover:text-[#003A66] transition duration-200"
                  >
                    {name}
                    <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#e02454] text-white text-[0.65rem]">
                      <FaChevronRight />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center mb-3">
              <span className=" text-blue-900 text-xl font-medium font-family">
                Let's Connect
              </span>
              <div className="flex items-center ml-4">
                <div className="h-[3px] bg-blue-900 w-full sm:w-16"></div>
                <div className="h-[3px] bg-red-500 w-full sm:w-16"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold font-family text-[#003A66] mb-4 leading-snug">
              Send Your Message
            </h2>
            <p className="text-gray-500 mb-5">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
            </p>

            {/* Form */}
            <form className="space-y-4 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 focus:outline-[#003A66] p-3 rounded-md w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-3 focus:outline-[#003A66] rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border border-gray-300 p-3 focus:outline-[#003A66] rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Your Project"
                  className="border border-gray-300 p-3 focus:outline-[#003A66] rounded-md w-full"
                />
              </div>

              <input
                type="text"
                placeholder="Your Project"
                className="border border-gray-300 p-3 focus:outline-[#003A66] rounded-md w-full"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="border border-gray-300 p-3 focus:outline-[#003A66] rounded-md w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-[#e02454] text-white px-6 py-3 w-full rounded-md hover:bg-[#003A66] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <WorldWideOffices />

      {/* Map */}
      <div className="overflow-hidden p-5 container mx-auto rounded">
        <div className="relative h-full" style={{ paddingBottom: "36.25%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273841.1102308948!2d-74.18405101663417!3d40.68398427732833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1717082829377!5m2!1sen!2s"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full"
          ></iframe>
        </div>
      </div>

      <Footer />
      <ScrollButton />
    </>
  );
};

export default ContactSection;
