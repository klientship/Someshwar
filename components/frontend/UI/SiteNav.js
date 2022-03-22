import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const SiteNav = () => {


  return (
    <nav className="navigation background-is-dark" style={{backgroundColor:"black"}}>
    <div className="container">
    <div className="wrapper">
      <div className="left">
        <a className="brand" href="/" >
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
        <li><a href="/" className="scroll">Home</a></li>
        <li>
            <a  href="/posts" className="scroll">Articles</a>
        </li>
        <li>
            <a href="/gallery" className="scroll">Gallery</a>
        </li>
        <li>
          <Link href="/#pricing">
            <a  className="scroll">Pricing</a>
            </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a  className="scroll">Contact</a>
          </Link>
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