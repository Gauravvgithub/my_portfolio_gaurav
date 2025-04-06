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
        <div className="mywork-container" >
            {mywork_data.map((work,index)=>{
                return <a key={index} href={work.w_link} target='blank' style={{textDecoration:"none"}}><img key={index} src={work.w_img} alt="img" /><span>{work.w_name}</span></a>
            })}
        </div>
        <a href="https://github.com/Gauravvgithub" target='blank' style={{textDecoration:"none", color:"inherit"}}>
        <div className="mywork-showmore" >
            <p>Show More</p>
            <img src={arrow_icon} alt="---->" />
        </div>
        </a>
    </div>
  )
}

export default MyWork