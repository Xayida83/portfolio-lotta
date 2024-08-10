import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer logo" />
          <p>I am a frontend developer student from Sweden.</p>
        </div>
        
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Lotta Lindberg. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>
            Term of Services
          </p>
          <p>
            Privacy Policy
          </p>
          <p>
            Connect whit me
          </p>
        </div>
      </div>      
    </div>
  )
}

export default Footer
