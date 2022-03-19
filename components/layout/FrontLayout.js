import React from 'react'
import Amenities from '../frontend/Home/Amenities'
import FeaturedVideo from '../frontend/Home/FeaturedVideo'
import FeaturesBar from '../frontend/Home/FeaturesBar'
import HomeArticlesSection from '../frontend/Home/HomeArticlesSection'
import ProjectHighlights from '../frontend/Home/ProjectHighlights'
import Footer from '../frontend/UI/Footer'
import SiteHeader from '../frontend/UI/SiteHeader'

const FrontLayout = () => {
  return (
    <div className="page-wrapper" id="page-top">

      <SiteHeader />
      <div id="page-content">
          <HomeArticlesSection />
          <FeaturesBar />
          <ProjectHighlights />
          <Amenities />
          <FeaturedVideo />
      </div>
      <Footer />
    </div>
  )
}

export default FrontLayout