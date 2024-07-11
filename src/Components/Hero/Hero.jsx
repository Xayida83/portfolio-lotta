import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

export const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Alex Bennett,</span> frontend developer based in Sweden</h1>
      <p>I'm a student living in Stockholm exated about changing careers.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}
