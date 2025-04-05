import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import CustomCursor from './Components/CustomCursorPointer/CustomCursorPointer'
import BackToTop from './Components/BackToTop/BackToTop'

const App = () => {
  return (
    <div>
      <CustomCursor/>
      <Navbar/>
      <BackToTop/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;