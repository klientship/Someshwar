import React from 'react'
import Footer from '../frontend/UI/Footer'
import SiteHeader from '../frontend/UI/SiteHeader'


const FrontLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">

      <SiteHeader />
      <div id="page-content">
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default FrontLayout