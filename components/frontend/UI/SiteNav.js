import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SiteNav = () => {
  return (
    <nav className="navigation background-is-dark" style={{backgroundColor:"black"}}>
    <div className="container">
    <div className="wrapper">
      <div className="left">
      <Link href="/" className="brand"
        >
        <Image 
            src="/static/img/logo.png"
            alt="nothing"
            width="150px"
            height="84px"
        />
      </Link>
      </div>
      <div className="right">
      <ul className="nav navigation-links animate">
        <li><Link href="/#page-top" className="scroll">Home</Link></li>
        <li><Link href="/#about" className="scroll">About</Link></li>
        <li><Link href="/#gallery" className="scroll">Gallery</Link></li>
        <li><Link href="/#pricing" className="scroll">Pricing</Link></li>
        <li><Link href="/#contact" className="scroll">Contact</Link></li>
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