import React from 'react'
import './style.css'
import SocialMedia from '../social-media'

const Header = props => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>
        <SocialMedia />
      </div>
    </header>
  )
}

export default Header
