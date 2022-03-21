import React from 'react'

const NearByPlace = () => {
  return (
    <div className="block" id="gallery">
        <div className="container">
            <h2>Near By Places</h2>
            <div className="gallery" data-scroll-reveal="enter bottom and move 20px">
                <div className="row">
                    <div className="col-md-4 col-sm-4 text-center ">
                        <a href="/static/img/near_place/surathkal" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/surathkal" alt=""/>
                            </div>
                            
                        </a>
                        SURATHKAL RAILWAY STATION 4KM
                        
                    </div>
                   
                    
                    <div className="col-md-4 col-sm-4 text-center">
                        <a href="/static/img/near_place/airport" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/airport" alt=""/>
                            </div>
                        </a>
                        MANGALORE INTERNATIONAL AIRPORT 12KM
                        
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center">
                        <a href="/static/img/near_place/" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/" alt=""/>
                            </div>
                        </a>
                        RYAN INTERNATIONAL SCHOOL 0.5KM
                       
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center">
                        <a href="/static/img/near_place/panambur.jpg" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/panambur.jpg" alt=""/>
                            </div>
                        </a>
                        PANAMBUR BEACH 2KM
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center">
                        <a href="/static/img/near_place/nitk.jpg" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/nitk.jpg" alt=""/>
                            </div>
                        </a>
                        NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA 4KM
                    
                    </div>
                    
                    <div className="col-md-4 col-sm-4 text-center">
                        <a href="/static/img/near_place/mrpl.jpg" className="gallery-item image-popup">
                            <div className="image bg-transfer">
                                <img src="/static/img/near_place/mrpl.jpg" alt=""/>
                            </div>
                        </a>
                        MRPL 6KM
                       
                    </div>
                   
                </div>
               
            </div>
           
        </div>
    </div>

    
  )
}

export default NearByPlace