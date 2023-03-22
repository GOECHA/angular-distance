import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/">
      <h1 className="footer">Angular Distance</h1>
      </Link>
    </div>
  )
}

export default Footer;

