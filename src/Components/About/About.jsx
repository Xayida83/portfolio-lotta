import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

export const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        
        <div className="about-right">
          <div className="about-para">
            <p>My career has always revolved around service and teamwork, with several years spent as a teacher. This experience taught me to be flexible and handle stressful situations effectively. In 2021, I decided to change direction and began my journey into IT, focusing on web development with JavaScript and .NET.</p>
            <p> Currently, I’m a student at Nackademin, set to graduate in May 2025. My goal is to combine my passion for technology with my experience in service and leadership in a dynamic role within frontend development. I’m motivated to keep learning, grow as a developer, and contribute value in a future role.</p>
          </div>
          <div className="skills-list">
            <h3>My Key skills</h3>
            <ul className="about-skills">
              <li className="about-skill">CSS</li>
              <li className="about-skill">HTML</li>              
              <li className="about-skill">JavaScript</li>
              <li className="about-skill">React JS</li>
              <li className="about-skill">Strapi</li>
              <li className="about-skill">C#</li>
              <li className="about-skill">.NET</li>
              <li className="about-skill">SQL</li> 
            </ul>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>20+</h2>
          <p>YEARS OF WORKEXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>3+</h2>
          <p>YEARS AS IT-STUDENT</p>
        </div>
        {/* <hr /> */}
        {/* <div className="about-achievement">
          <h2>15+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr /> */}
      </div>
    </div>
  )
}