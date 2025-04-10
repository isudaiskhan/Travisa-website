import React from "react";
import { FaEnvelope, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className="bg-[#003a66] text-white py-3 px-14 justify-between items-center hidden lg:flex">
        <div className="flex items-center">
          <div className="mr-4">
            <FaPhoneAlt className="inline-block mr-2 text-[#e02454]" />
            <span className="text-gray-300">+012 345 6789</span>
          </div>
          <div>
            <FaEnvelope className="inline-block mr-2 text-[#e02454]" />
            <span className="text-gray-300">example@gmail.com</span>
          </div>
        </div>
        <div className="space-x-3 flex items-center">
          <div className="border-2 p-2 rounded-full hover:bg-white cursor-pointer duration-300">
            <FaFacebookF className="text-lg text-[#e02454]" />
          </div>
          <div className="border-2 p-2 rounded-full hover:bg-white cursor-pointer duration-300">
            <FaTwitter className="text-lg cursor-pointer text-[#e02454]" />
          </div>
          <div className="border-2 p-2 rounded-full hover:bg-white cursor-pointer duration-300">
            <FaLinkedinIn className="text-lg cursor-pointer text-[#e02454]" />
          </div>
          <div className="border-2 p-2 rounded-full hover:bg-white cursor-pointer duration-300">
            <FaInstagram className="text-lg cursor-pointer text-[#e02454]" />
          </div>
          <div className="border-2 p-2 rounded-full hover:bg-white cursor-pointer duration-300">
            <FaYoutube className="text-lg cursor-pointer text-[#e02454]" />
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <h2 className="text-gray-300">
            Help <span className="ms-2">/</span>{" "}
          </h2>
          <h2 className="text-gray-300">
            Support <span className="ms-2">/</span>{" "}
          </h2>
          <h2 className="text-gray-300">Contact</h2>
        </div>
      </div>
    </>
  );
};

export default TopBar;
