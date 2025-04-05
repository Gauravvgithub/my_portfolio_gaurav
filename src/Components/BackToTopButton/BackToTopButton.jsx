import React from 'react';
import { useEffect, useState } from 'react';
import './BackToTopButton.css'
import keyboard_arrow_up from '../../assets/keyboard_arrow_up.svg'

const BackToTopButton = () => {

    const [backToTopButton,setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp =() =>{
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })

    }

  return (
    <div>
        { backToTopButton &&(
            <button className='arrow-button' style={{position:"fixed", bottom: "50px" , right:"50px", height:"50px", width:"50px", fontSize:"5px", borderRadius:"50%"}} onClick={scrollUp} ><img src={keyboard_arrow_up} alt="up" /></button>
        )}

    </div>
  )
}

export default BackToTopButton