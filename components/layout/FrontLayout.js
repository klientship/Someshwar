import React from 'react'
import Footer from '../frontend/UI/Footer'
import SiteHeader from '../frontend/UI/SiteHeader'
import Map from '../frontend/Home/Map'

import Head from 'next/head';

const FrontLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">
    <Head>
      <title>Someshwarvista | Experience the life beyond Ordinary</title>
      <meta name="description" content="Greetings from Someshwar Vista, Vista' includes 5 blocks of delightfully designed residential apartments with 1BHK, 2 BHK, and 3 BHK spanning around 2.6 acre spacious land. The property offers specifications such as club house/community centre, intercom"/>
    </Head>
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