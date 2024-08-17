import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h2>My school projects</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
          <img src={work.w_img} alt="project image" />
        </a>
          // <img key={index} src={work.w_img} alt=""/>           
        })}
      </div>
      <a href="http://github.com/Xayida83" target="_blank" rel="noopener noreferrer">
        <div className="mywork-showmore">
          <p>See my GitHub</p>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </a>
    </div>
  )
}

export default MyWork