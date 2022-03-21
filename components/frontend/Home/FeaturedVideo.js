import React from 'react'
const FeaturedVideo = () => {
  return (
    <div style={{width:"80%", margin:"auto", textAlign:"center"}}>
        <iframe 
            className='embeded-youtube-video'
            src="https://www.youtube.com/embed/DU_0tvCMM8E?autoplay=1&mute=1&controls=0" 
            title="YAMUNA ASHA CITY" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default FeaturedVideo