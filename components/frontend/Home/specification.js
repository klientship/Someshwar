import { Button } from '@mantine/core'
import React from 'react'

const Specification = () => {
  const downloadFile = () => {
    window.location.href = "/static/files/Brochure.pdf"
  }
  return (
    <div className="block background-is-dark" id="about">
    <div className="container" id="pricing">
        <h2>Specifications</h2>
        <div className="row">
            <div className="col-md-6 col-sm-6" data-scroll-reveal="enter left and move 20px" style={{margin:"auto"}}>
                <ul>
                  <li>24-hour security with cctv surveillance.</li>
                  <li>Centralized sewage treatment plant (stp).</li>
                  <li>Club house with Gym, Badminton court, swimming pool & with other indoor games.</li>
                  <li>Street light.</li>
                  <li>Undergroung  electricity cables with individual service trench for each site.</li>
                  <li>Children’s play area.</li>
                  <li>Informal playground with basketball & tennis courts.</li>
                  <li>Fully landscaped waterfront developed with jogging & bicycle tracks.</li>
                  <li>Green park with seating and other comforts.</li>
                  <li>Wide asphalt  roads of imternational standards with beautiful street scape and storm water drains.</li>
                  <li>24-hour water supply with overhead tank.</li>
                 
                </ul>
                {/* <Button color={"red"} onClick={downloadFile}>
                  <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
                </Button> */}
            </div>
          
            <div  className="col-md-3 col-sm-3">
             
              </div>
             
            
            
            <div className="col-md-3 col-sm-3">
            
              
            </div>
           
           
        </div>
        
    
    
    <div className="background-wrapper">
        <div className="background-color background-color-black opacity-80"></div>
    </div>
    
</div>
</div>
  )
}

export default Specification