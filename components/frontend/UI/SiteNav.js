import React from 'react'
import Image from 'next/image'

const SiteNav = () => {
  return (
    <nav className="navigation background-is-dark" style={{backgroundColor:"black"}}>
    <div className="container">
    <div className="wrapper">
      <div className="left">
      <a href="index-v1.html" className="brand"
        >
        <Image 
            src="/static/img/logo.png"
            alt="nothing"
            width="150px"
            height="84px"
        />
      </a>
      </div>
      <div className="right">
      <ul className="nav navigation-links animate">
        <li><a href="#page-top" className="scroll">Home</a></li>
        <li><a href="#about" className="scroll">About</a></li>
        <li><a href="#gallery" className="scroll">Gallery</a></li>
        <li><a href="#pricing" className="scroll">Pricing</a></li>
        <li><a href="#contact" className="scroll">Contact</a></li>
      </ul>
      <div className="nav-btn">
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
      </div>
    </div>
    </div>
  </nav>
  )
}

export default SiteNav