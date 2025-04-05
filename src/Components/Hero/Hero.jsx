import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume_gaurav from '../../assets/GAURAV_RESUME_2025.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="my_image" style={{width:"320px", height:"320px"}} />
        <h1><span>I'm Gaurav,</span> frontend developer based in India.</h1>
        <p>I am a frontend developer from Delhi, India with 01 year of experience in Dice Academy.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
              <a href={resume_gaurav} download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero