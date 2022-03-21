import React from 'react'
import Footer from '../frontend/UI/Footer'
import SiteHeader from '../frontend/UI/SiteHeader'
import NearByPlace from '../frontend/Home/NearByPlace'
import Specification from '../frontend/Home/specification'
import HomeArticlesSection from '../frontend/Home/HomeArticlesSection'
import FeaturesBar from '../frontend/Home/FeaturesBar'
import ProjectHighlights from '../frontend/Home/ProjectHighlights'
import Amenities from '../frontend/Home/Amenities'
import FeaturedVideo from '../frontend/Home/FeaturedVideo'

const FrontLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">

      <SiteHeader />
      <div id="page-content">
          <HomeArticlesSection />
          <FeaturesBar />
          <ProjectHighlights />
          <Amenities />
          <FeaturedVideo />
          <NearByPlace />
          <Specification />
      </div>
      <Footer />
    </div>
  )
}

export default FrontLayout