import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const SiteNav = () => {


  return (
    <nav className="navigation background-is-dark" style={{backgroundColor:"black"}}>
    <div className="container">
    <div className="wrapper">
      <div className="left">
      <Link href="/" scroll={true} passHref>
        <a className="brand" >
          <Image 
              src="/static/img/logo.png"
              alt="nothing"
              width="150px"
              height="84px"
          />
        </a>
      </Link>
      </div>
      <div className="right">
      <ul className="nav navigation-links animate">
        <li><Link href="/#page-top" className="scroll">Home</Link></li>
        <li>
          <Link href="/posts" passHref scroll={true}>
            <a  className="scroll">Articles</a>
          </Link>
        </li>
        <li>
         <Link href="/gallery">
            <a  className="scroll">Gallery</a>
        </Link>
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