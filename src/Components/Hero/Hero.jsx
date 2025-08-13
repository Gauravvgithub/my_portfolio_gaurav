import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume_gaurav from "../../assets/GAURAV-RESUME.pdf";

import SplitText from "../../utils/SplitText";
import ProfileCard from "../../utils/ProfileCard";
import toast, { Toaster } from 'react-hot-toast';

const Hero = () => {
  const notify = () => toast('Here is your toast.');
  const handleAnimationComplete = () => {
    // console.log();
  };

  return (
    <>
      <div id="home" className="hero">
        {/* <img
        src={profile_img}
        alt="my_image"
        style={{ width: "20rem", height: "18rem", borderRadius: "100%" }}
        /> */}
        {/* <h1> */}
        {/* <span>I'm Gaurav,</span> Full Stack Developer based in India. */}
        {/* <BlurText
        text="I'm Gaurav, Full Stack Developer based in India."
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="flex justify-center text-8xl text-center"
        /> */}
        <ProfileCard
          name="Gaurav"
          title="Web Developer"
          handle="gauravvgithub"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profile_img}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open("https://github.com/gauravvgithub", "_blank")}
        />

        {/* <div style={{position: 'relative', height: '300px'}}> */}
        <SplitText
          text="I'm Gaurav, Full Stack Developer based in India."
          className="flex justify-center text-6xl text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          onClick={notify}
        />
        {/* <Toaster /> */}
        {/* </div> */}
        {/* </h1> */}
        {/* <p>
        I am a full stack developer from Delhi, India.
        </p> */}
        <div className="hero-action">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="hero-connect">Connect with me</div>
          </AnchorLink>
          <a
            href={resume_gaurav}
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="hero-resume">My Resume</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
