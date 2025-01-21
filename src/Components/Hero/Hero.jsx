import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/LindbergCV.pdf'
import grades from '../../assets/Betygsutdrag_dec.pdf'

export const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>I'm Charlotta Lindberg</h1>
      <p>Graduated .NET developer with focus on frontend.</p>
      <div className="hero-action">
        {/* <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div> */}
        <a href={resume}
        download='CV_Lindberg'
        className="hero-resume">Download my resume
        </a>
        <a href={grades}
        download='Betygsutdrag_dec.pdf'
        className="hero-resume">Download my grades
        </a>
      </div>
    </div>
  )
}
