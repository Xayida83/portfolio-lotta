import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h2>My projects</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      {/* <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return 
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
          <img src={work.w_img} alt="project image" />
        </a>        
        })}
      </div> */}
      {/* <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="project-card">
              <div className="project-facts">
                <h3 className="project-title">{work.w_name}</h3>
                <p className="project-fact">Collaborator: {work.w_colab}</p>
                <p className="project-fact">Period: {work.w_period}</p>
                <p className="project-fact">{work.w_info}</p>
              </div>
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt={work.w_name} className="project-image" />
              </a>
            </div>
          );
        })}
      </div> */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-card">
            <img src={work.w_img} alt={work.w_name} className="project-image" />
            <div className="overlay">
              <div className="overlay-content">
                <h3 className="project-title">{work.w_name}</h3>
                <p className="project-fact">Collaborator: {work.w_colab}</p>
                <p className="project-fact">Period: {work.w_period}</p>
                <p className="project-fact">{work.w_info}</p>
                <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {work.w_see_link}
                  <img src={arrow_icon} alt="Arrow Icon" className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className='hero-action'>
          <a href="http://github.com/Xayida83" target="_blank" rel="noopener noreferrer">
            <div className="hero-resume">
              <p>See my GitHub <img src={arrow_icon} alt="arrow" /></p>
            </div>
          </a>
          <a href="https://codepen.io/Xayida83" target="_blank" rel="noopener noreferrer">
            <div className="hero-resume">
              <p>See my CodePen <img src={arrow_icon} alt="arrow" /></p>
            </div>
          </a>
      </div>
    </div>
  )
}

export default MyWork