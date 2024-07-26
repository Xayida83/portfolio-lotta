import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


// import arrow_icon from '../../assets/arrow_icon.svg'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>I'm currently avaliable to take on new projects, so feel free to contact me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" /> <p>lotta.lindberg83@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" /> <p>(+46) 72 992 17 05</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" /> <p>Stockholm, Sweden</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type="submit" className='contact-submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact