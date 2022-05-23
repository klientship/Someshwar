import React from 'react'
import SiteNav from './SiteNav'
import HomeBanner from '../Home/HomeBanner'
import Head from 'next/head';
const SiteHeader = (props) => {
  return (
    
    <header id="page-header">
        <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
      <SiteNav settings={props.settings}/>
      <HomeBanner settings={props.settings} />
    </header>
  )
}

export default SiteHeader