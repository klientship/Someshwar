import Image from "next/image";

const Footer = () => {
  return (
    <footer id="page-footer" className="block background-is-dark">
    <div className="container">
    <a href="#" className="brand">
        <Image src="/static/img/logo.png" width="150px" height="100%" alt="" />
      </a>
      <div className="row">
        <div className="col-md-4 col-sm-12">
        
          Yamuna Asha City by Yamuna Homes & Design Pvt. Ltd.
          The first of its kind premium residential sites 
          consisting of 5,6,7 to 10 cents sites within a 46 
          acres residential habitiat at Kulai,Mangaluru 
          creating an expectional new community in the 
          Historic Beach City of Mangalore.


          
        </div>
        <div className="col-md-4 col-sm-12">
         

          
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="contact-data text-align-right">
            <h3 style={{margin:"0.5em 0 0 0"}}>Contact</h3>

            <figure style={{marginTop:"1em"}}> 
              <i style={{color:"#E67F10"}} className="fa fa-map-marker"></i> 
              &nbsp; Vajra Realties 1st Floor, Essel Tower, Above Axis BankBunts Hostel, Mangalore.
            </figure>

            <figure style={{marginTop:"1em"}}> <i  style={{color:"#E67F10"}} className="fa fa-phone"></i> +91-9741735307, +91-9448912515</figure>
            <figure style={{marginTop:"1em"}}> <i style={{color:"#E67F10"}} className="fa fa-envelope-o"></i> <a href="mailto:info@vajrarealties.com"
                >info@vajrarealties.com</a
              ></figure>
           
          </div>
        </div>
      </div>
      <hr />
      <div className="note">	&#169; 2022 All Rights Reserved</div>
      
      <div className="to-top">
        <a href="#page-top" className="arrow-up framed scroll">
          <i className="arrow_up"></i>
        </a>
      </div>
    </div>
    <div className="background-wrapper">
      <div className="bg-transfer opacity-30">
        <Image src="/static/img/footer-bg.jpg" width="150px" height="100%" alt="" />
      </div>
      <div className="background-color background-color-black"></div>
    </div>
  </footer>
  )
}

export default Footer