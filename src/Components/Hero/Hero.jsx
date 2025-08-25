import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/LindbergCV.pdf'
import grades from '../../assets/examensbevis-Nackademin.pdf'

export const Hero = () => {
  return (
    <section id='home' className='hero' aria-labelledby="hero-heading">
      <img src={profile_img} alt="Charlotta Lindberg's profile picture" />
      <h1 id="hero-heading">I'm Charlotta Lindberg</h1>
      <p>Graduated frontend and .NET developer</p>
      <div className="hero-action" role="group" aria-label="Download documents">
        <a 
          href={resume}
          download='CV_Lindberg'
          className="hero-resume"
          aria-label="Download my resume"
        >
          Download my resume
        </a>
        <a 
          href={grades}
          download='examensbevis-Nackademin.pdf'
          className="hero-resume"
          aria-label="Download my grades"
        >
          Download my grades from Nackademin
        </a>
      </div>
    </section>
  )
}
