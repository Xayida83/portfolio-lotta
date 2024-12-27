import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedIn_icon from '../../assets/linkedin_icon.svg'

// import linkedIn_icon from '.../../assets/linkedin_icon.svg'


// import arrow_icon from '../../assets/arrow_icon.svg'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7af03018-697b-4758-a92d-1baebbe401f9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h2>Get in touch</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p></p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" /> <p>lindberg.lotta.rebecka<wbr/>@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" /> <p>(+46) 72 992 17 05</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" /> <p>Stockholm, Sweden</p>
            </div>
            <div className="contact-detail">
              <img src={linkedIn_icon} alt="location icon" /> <a href="https://www.linkedin.com/in/charlotta-lindberg/"><p>LinkedIn</p></a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
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