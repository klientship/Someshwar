import Image from 'next/image'
import {SimpleGrid} from '@mantine/core';

const ProjectHighlights = () => {
   
  return (
    <div className="block" id="about" style={{width:"75%", margin:'auto'}} >
        <div className="container">
	        <h2 className='text-center'>Project <span style={{background: "-webkit-linear-gradient(90deg, #0700b8 0%, #00ff88 100%),-webkit-background-clip: text,-webkit-text-fill-color: transparent"}}>Highlight</span></h2>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>Vista' includes 5 blocks of delightfully designed residential apartments with 1BHK, 2 BHK and 3 BHK spanning around 2.6 acre specious land.The property offers specifications such as club house/community centre, intercom facility, park, lift(S), visitor parking, water storage, security/fire alarm, piped-Gas ,Generator Backup. Location Advantages : Bus Stop 150 M M ,Railway Station 5 Km ,School 1 KM , Hospital 3 km, Temple 500 M, Church 1 km , Mosque 2 Km . Completion : The first phase, A and B block is expected to complete by May 2021. Someshwar vista is a perfect home that has all the upmarket features and is well within the reach with affordable price tag. So indulge in Nature and surround yourself with greenery, positivity and good health all this and more at an unbelievable price.</p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <p style={{fontWeight: "bold",fontFamily: "Montserrat"}} ><strong>Project Type:</strong> Residential</p><br />

                        <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}><strong>Project Status:</strong> On-going</p><br />
                        
                        <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>
                          <h3 className='mb-0 pb-0'>Builder:</h3>
                          Someshwar Promoters & Developers<br />
                        
                          Near Lotus Mall, Kulshekar Mangaluru</p>
                    
                </div>
	        </div>
            <hr />
	  </div>


        <div className="container col-md-12 text-center">
        <h3 >Approved Banks</h3>
        <SimpleGrid cols={3} spacing="xs"    breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
             ]}> 
                  <div className="logo">
                <a href="#">
                    <Image width="250px" height="140px" src="/static/img/bank/Karnataka bank.jpg" alt="Karnataka Bank" />
                </a>
            </div>

            <div className="logo">
                <a href="#">            
                    <Image width="250px" height="140px" src="/static/img/bank/Canara Bank.jpg" alt="Canara Bank" />
                </a>
            </div>
            <div className="logo">
                <a href="#">
                    <Image width="250px" height="140px" src="/static/img/bank/Corporation bank.jpg" alt="Corporation Bank" />
                </a>
            </div>
            
            <div className="logo">
                <a href="#">
                    <Image width="250px" height="140px" src="/static/img/bank/Hdfc Bank.jpg" alt="Hdfc Bank" />
                </a>
            </div>
            <div className="logo">
                    <a href="#">
                        <Image width="250px" height="140px" src="/static/img/bank/Axis Bank Logo.jpg" alt="Axis Bank" />
                    </a>
            </div>
          
            <div className="logo">
                <a href="#">
                    <Image width="250px" height="140px" src="/static/img/bank/state bank of india.jpg" alt="state bank of india" />
                </a>
            </div>
            
    </SimpleGrid>

        </div>
  </div>
 
  )
}

export default ProjectHighlights