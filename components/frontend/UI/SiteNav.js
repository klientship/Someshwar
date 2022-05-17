import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const SiteNav = (props) => {


  return (
    <nav className="navigation background-is-dark show-background" style={{backgroundColor:"#024A56"}}>
      
    
    <div className="container">
    <div className="wrapper">
      <div className="left">
        <a className="brand" href="/" >
          <Image 
              src={props.settings.logo}
              alt="nothing"
              width="150px"
              height="84px"
          />
        </a>
      </div>
      <div className="right">
      <ul className="nav navigation-links animate">
        <li><a href="/" className="scroll">Home</a></li>
        <li>
            <a  href="/#about" className="scroll">Overview</a>
        </li>
        <li>
            <a href="/gallery" className="scroll">Gallery</a>
        </li>
        <li>
            <a  href="/posts" className="scroll">Floor Plans</a>
        </li>
        <li>
          <a href="/contact"className="scroll">Contact</a>
        </li>
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