import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

export const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non provident animi labore possimus accusamus veniam earum?</p>
            <p> Assumenda, velit ex modi neque pariatur quas aperiam doloremque libero dicta provident officia nobis?</p>
          </div>
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
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}