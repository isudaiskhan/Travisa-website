import React from "react";
import Layout from "../../Layout/Layout";
import TopBar from "../../TopBar/TopBar";
import Hero from "../../Hero/Hero";
import About from "../../About/About";
import Counter from "../../Counter/Counter";
import Services from "../../Services/Services";
import Features from "../../Features/Features";
import Countries from "../../Countries/Countries";
import Testimonial from "../../Testimonial/Testimonial";
import Training from "../../Training/Training";
import WorldWideOffices from "../../WorldWideOffices/WorldWideOffices";
import Footer from "../../Footer/Footer";
import ScrollButton from "../../ScrollButton/ScrollButton";

const Home = () => {
  return (
    <>
      <TopBar />
      <Layout>
        <Hero />
        <About />
        <Counter />
        <Services />
        <Features />
        <Countries />
        <Testimonial />
        <Training />
        <WorldWideOffices />
        <Footer />
        <ScrollButton />
      </Layout>
    </>
  );
};

export default Home;
