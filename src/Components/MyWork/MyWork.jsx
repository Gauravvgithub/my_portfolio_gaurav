import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="theme-pattern" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <a key={index} href={work.w_link} target='blank' ><img key={index} src={work.w_img} alt="img" /> </a>
            })}
        </div>
        <div className="mywork-showmore">
            <p><a href="https://github.com/Gauravvgithub" target='blank'>Show More</a></p>
            <img src={arrow_icon} alt="---->" />
        </div>
    </div>
  )
}

export default MyWork