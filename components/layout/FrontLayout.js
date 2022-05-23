import React from 'react'
import Footer from '../frontend/UI/Footer'
import SiteHeader from '../frontend/UI/SiteHeader'
import Map from '../frontend/Home/Map'


const FrontLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">
  
      <SiteHeader settings={props.settings} />
      <div id="page-content">
          {props.children}
      </div>
      <Map/>
      <Footer settings={props.settings} />
    </div>
  )
}

export default FrontLayout