import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Service from "./Components/Pages/Service/Service";
import Features from "./Components/Pages/Pages/Features";
import Countries from "./Components/Pages/Pages/Countries";
import Testimonial from "./Components/Pages/Pages/Testimonial";
import Training from "./Components/Pages/Pages/Training";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
