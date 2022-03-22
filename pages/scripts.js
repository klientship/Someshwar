import React from 'react'
import Script from 'next/script';
const SiteScripts = () => {
  return (
   <>
            <Script src='/static/js/jquery-2.2.1.min.js' strategy='beforeInteractive'  />
            <Script src='/static/js/owl.carousel.min.js'  />
            <Script src='/static/js/custom.js'  />
            <Script src='/static/js/pace.min.js'  />
            <Script src='/static/js/readmore.min.js'  />
            <Script src='/static/js/scrollReveal.min.js'  strategy='beforeInteractive'  />
            <Script src='/static/js/jquery.magnific-popup.min.js' strategy='beforeInteractive'  />
   </>
  )
}

export default SiteScripts