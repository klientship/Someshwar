import React from 'react'
import SiteNav from './SiteNav'
import HomeBanner from '../Home/HomeBanner'

const SiteHeader = (props) => {
  return (
    <header id="page-header">
      <SiteNav settings={props.settings}/>
      <HomeBanner settings={props.settings} />
    </header>
  )
}

export default SiteHeader