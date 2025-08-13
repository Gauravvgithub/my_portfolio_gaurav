import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import CustomCursor from "./Components/CustomCursorPointer/CustomCursorPointer";
import BackToTop from "./Components/BackToTop/BackToTop";
import ClickSpark from "../src/utils/ClickSpark";

const App = () => {
  return (
    <>
      <ClickSpark
        sparkColor="white"
        sparkSize={60}
        sparkRadius={200}
        sparkCount={20}
        duration={2000}
        extraScale={2}
      >
        <CustomCursor />
        <Navbar />
        <BackToTop />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </ClickSpark>
    </>
  );
};

export default App;
