import { Button } from '@mantine/core'
import React from 'react'

const Specification = () => {
  const downloadFile = () => {
    window.location.href = "/static/files/Brochure.pdf"
  }
  return (
    <div className="block background-is-dark" style={{backgroundColor:"#EFFFFD"}} id="about">
    <div className="container" id="pricing" >
        <h2 class="text-center" style={{color:"black",fontSize:"39px" }}>Specifications</h2>
        <div className="row one" >




            <div className="col-6 col-lg-5" style={{margin:"auto", color:"black"}}>
          <img style={{marginLeft:"42%", width:"15%"}} src="/static/img/amenities/002-outdoor-walls.4e1829b7.svg"></img>
               <h2 style={{color:"black", textAlign:"center", marginBottom:"15px"}}>External Wall Finishes</h2>
               <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>Structural glazing curtain walls</p>
               <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>ACP external grade</p>
                {/* <Button color={"red"} onClick={downloadFile}>
                  <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
                </Button> */}
            </div>
            <div className="col-6 col-lg-5" style={{margin:"auto", color:"black"}}>
            <img style={{marginLeft:"42%", width:"15%"}} src="/static/img/amenities/003-indoor-walls.6045e785.svg"></img>
               <h2 style={{color:"black", textAlign:"center", marginBottom:"15px"}}>Internal Wall Finishes</h2>
               <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>Putty and Emulsion Paint</p>
               <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>Full Height wall tiles in toilets.</p>
                {/* <Button color={"red"} onClick={downloadFile}>
                  <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
                </Button> */}
            </div>
              
        </div>
          
        <div className="row one">

<div className="col-6 col-lg-5 " style={{margin:"auto", color:"black", paddingTop:"6%"}}>
<img style={{marginLeft:"42%", width:"15%"}} src="/static/img/amenities/001-indoor-flooring.959badad.svg"></img>
   <h2 style={{color:"black", textAlign:"center", marginBottom:"15px", }}>Flooring</h2>
   <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>600 X 600 Branded Porcelain Tiles and Vitrified Colour Tiles in common areas.</p>
   {/* <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>ACP external grade</p> */}
    {/* <Button color={"red"} onClick={downloadFile}>
      <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
    </Button> */}
</div>
<div className="col-6 col-lg-5" style={{margin:"auto", color:"black", paddingTop:"6%"}}>
<img style={{marginLeft:"42%", width:"15%"}} src="/static/img/amenities/012-general-info.9e547f5e.svg"></img>
   <h2 style={{color:"black", textAlign:"center", marginBottom:"15px"}}>General</h2>
   <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>The Roof structure is of RCC with high grade concrete and sky light.</p>
   <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>The boundary wall consists of infill masonry between RCC columns.</p>
   <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>Internal walls consists of Solid block and / or dry wall</p>
   <p  style={{color:"black", textAlign:"center", marginBottom:"15px"}}>The external walkways are covered with a canopy to protect the public from sunlight and rain.</p>
    {/* <Button color={"red"} onClick={downloadFile}>
      <i style={{marginRight:"0.5em"}} className="fa fa-download"></i> Download Brochure
    </Button> */}
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