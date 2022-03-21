import React from 'react'
import SiteNav from './SiteNav'
import HomeBanner from '../Home/HomeBanner'

const SiteHeader = () => {
  return (
    <header id="page-header">
      <SiteNav />
      <HomeBanner />
    </header>
  )
}

export default SiteHeader