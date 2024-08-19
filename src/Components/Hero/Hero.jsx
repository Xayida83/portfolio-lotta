import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/lottalindberg.pdf'

export const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Charlotta Lindberg,</span> frontend developer based in Sweden</h1>
      <p>I'm a student living in Stockholm exated about my new career as a developer.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        
        <a href={resume}
        download='Lindberg_CV.pdf'
        className="hero-resume">Download my resume
        </a>
      </div>
    </div>
  )
}
