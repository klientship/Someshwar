import React from 'react'
import Script from 'next/script';
const SiteScripts = () => {
  return (
   <>
            <Script src='/js/jquery-2.2.1.min.js' strategy='beforeInteractive'  />
            <Script src='/js/owl.carousel.min.js'  />
            <Script src='/js/custom.js'  />
            <Script src='/js/pace.min.js'  />
            <Script src='/js/readmore.min.js'  />
            <Script src='/js/scrollReveal.min.js'  strategy='beforeInteractive'  />
            <Script src='/js/jquery.magnific-popup.min.js' strategy='beforeInteractive'  />
   </>
  )
}

export default SiteScripts