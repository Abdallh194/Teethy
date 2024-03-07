import React from "react";
import HomePage from "./HomePage";
import About from "../Components/About";
import Why from "./Why";
import Services from "./Services";
import Doctors from "./Doctors";
import Contact from "./Contact";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Why />
      <Services />
      <Contact />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Content;
