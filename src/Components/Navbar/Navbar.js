import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../Assets/brand-logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("HOME");
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);

    const aboutPaths = ["/about"];
    const servicePaths = ["/service"];
    const pagesPaths = ["/features", "/countries", "/testimonial", "/training"];
    const contactPaths = ["/contact"];

    if (aboutPaths.some((path) => location.pathname.includes(path))) {
      setActiveMenuItem("About");
    } else if (servicePaths.some((path) => location.pathname.includes(path))) {
      setActiveMenuItem("Service");
    } else if (pagesPaths.some((path) => location.pathname.includes(path))) {
      setActiveMenuItem("Pages");
    } else if (contactPaths.some((path) => location.pathname.includes(path))) {
      setActiveMenuItem("Contact");
    } else {
      setActiveMenuItem("Home");
    }
  }, [location]);

  const navItems = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "/about" },
    { id: "service", label: "Service", link: "/service" },
    {
      id: "pages",
      label: "Pages",
      submenu: [
        { label: "Features", link: "/features" },
        { label: "Countries", link: "/countries" },
        { label: "Testimonial", link: "/testimonial" },
        { label: "Training", link: "/training" },
      ],
    },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      <nav
        className={`sticky top-0 w-full bg-white z-50 transition duration-300 ${
          hasScrolled ? "top-0 shadow-xl" : ""
        }`}
      >
        <div className="relative container mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="lg:py-4 py-6 mx-auto flex items-center justify-between lg:justify-start">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <img src={logo} alt="logo" className="object-cover" />

              <span className="sm:text-5xl text-3xl font-semibold font-family text-[#e02454]">
                Travisa
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-5 ml-auto">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="relative p-4 group cursor-pointer"
                  >
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-[#003A66] text-lg duration-300 group font-semibold hover:text-[#e02454] ${
                        activeMenuItem === item.label ? "text-[#e02454]" : ""
                      }`}
                      activeclassname="text-[#e02454] underline"
                      style={{
                        color: activeMenuItem === item.label ? "#e02454" : "",
                      }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      {item.id === "pages" && (
                        <MdOutlineKeyboardArrowDown className="inline text-2xl duration-500 group-hover:rotate-180 ml-1" />
                      )}
                    </NavLink>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg w-60 z-10 pt-4">
                        {item.submenu.map((subItem) => (
                          <li
                            key={subItem.label}
                            className="border-b border-b-[#e02454] hover:border-transparent hover:bg-[#e02454]"
                          >
                            <NavLink
                              to={subItem.link}
                              className="block w-full p-4 px-7 font-semibold text-[#e02454] hover:text-white transition-colors duration-300"
                              activeclassname="text-[#EB1616]"
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <button className="flex items-center bg-[#e02454] hover:bg-[#003A66] rounded-full text-white px-4 py-2 sm:px-4 sm:py-3.5 text-sm sm:text-base duration-300">
                <span className="mr-2 font-semibold">Get A Quote</span>
                <FaArrowRight className="text-lg" />
              </button>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="sm:text-5xl text-4xl text-[#003a66]" />
                ) : (
                  <IoMdMenu className="sm:text-5xl text-4xl text-[#003a66]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            className="absolute right-0 min-h-screen w-full sm:w-3/5 py-4 px-8 shadow md:w-1/3 bg-[#003a66] z-50"
          >
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={closeMobileMenu}
            >
              <AiOutlineClose className="text-4xl text-[#e02454]" />
            </button>
            <ul className="mt-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="relative p-3 select-none group cursor-pointer"
                >
                  {!item.submenu ? (
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white text-lg duration-300 font-semibold hover:text-[#e02454] ${
                        activeMenuItem === item.label ? "text-[#e02454]" : ""
                      }`}
                      activeclassname="text-[#e02454] underline"
                      style={{
                        color: activeMenuItem === item.label ? "#e02454" : "",
                      }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className={`text-white text-lg duration-300 font-semibold hover:text-[#e02454] ${
                        activeMenuItem === item.label ? "text-[#e02454]" : ""
                      }`}
                      style={{
                        color: activeMenuItem === item.label ? "#e02454" : "",
                      }} // Apply color based on activeMenuItem
                    >
                      {item.label}
                      <MdOutlineKeyboardArrowDown
                        className={`inline text-2xl duration-300 ml-1 transform ${
                          openSubmenu === item.id ? "rotate-180" : "rotate-0"
                        }`}
                      />
                      {openSubmenu === item.id && (
                        <ul className="pt-2">
                          {item.submenu.map((subItem) => (
                            <li
                              key={subItem.label}
                              className="border-b-white border-b bg-[#e02454] shadow-lg hover:border-transparent hover:bg-[#e02454]"
                            >
                              <NavLink
                                to={subItem.link}
                                onClick={() => setMobileMenu(false)}
                                className="block w-full px-7 tracking-wider text-white text-sm p-4 hover:text-white transition-colors duration-300"
                                activeclassname="text-[#81c408]"
                              >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="flex mt-5 rounded-full ms-2 items-center bg-[#e02454] text-white px-2 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base hover:bg-[#3ca341] duration-300">
              <span className="mr-2 font-semibold">Get A Quote</span>
              <FaArrowRight className="text-lg" />
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
