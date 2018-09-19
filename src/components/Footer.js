import React from 'react'
import logo from '../img/logo.svg'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-branding">
        <img className="footer-logo" src={logo} alt="" />
      </div>
      <div className="footer-social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon icon-facebook">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon icon-instagram">Instagram</a>
      </div>
    </div>
  </footer>
)

export default Footer
