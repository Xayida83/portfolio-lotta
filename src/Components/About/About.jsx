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
            <p> My professional journey began in education, where I spent several years honing my skills in leadership, teamwork, and service. This experience taught me to thrive under pressure, adapt to changing circumstances, and guide others toward shared goals.</p>

            <p>In 2021, I transitioned into IT, focusing on web development with JavaScript and .NET. Since then, I have built a solid foundation in frontend technologies, blending my technical expertise with my ability to connect with people.</p>

            <p>My ambition is to continue growing as a frontend developer in a role that values collaboration, innovation, and user-centric design. I am passionate about contributing to meaningful projects while constantly evolving and delivering value.</p>
          </div>
          <div className="skills-list">
            <h3>Knowledge</h3>
            <ul className="about-skills">
              <li className="about-skill">CSS 
                <p>SASS</p>
                <p>LESS</p>
              </li>
              <li className="about-skill">HTML</li>
              <li className="about-skill">JavaScript 
                <p>TypeScript</p>
                <p>React</p>
                <p>Next</p>
                <p>Vue</p>
              </li>
              <li className="about-skill">CMS 
                <p>Strapi</p>
                <p>WordPress</p>
              </li>
              <li className="about-skill">GIT</li>                
              <li className="about-skill">C#</li>
              <li className="about-skill">.NET</li>
              <li className="about-skill">SQL</li>               
              <li className="about-skill">SEO</li> 
              <li className="about-skill">Figma</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h2>20+</h2>
          <p>YEARS OF WORKEXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>4</h2>
          <p>YEARS AS IT-STUDENT</p>
        </div>
        <hr /> 
        <div className="about-achievement">
          <h2>15+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div> */}
    </div>
  )
}
