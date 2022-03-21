import Image from 'next/image'
import {SimpleGrid} from '@mantine/core';

const ProjectHighlights = () => {
   
  return (
    <div className="block" id="about" style={{width:"75%", margin:'auto'}} >
        <div className="container">
	        <h2 className='text-center'>Project <span style={{color:"#9F292B"}}>Highlight</span></h2>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <p>Yamuna Asha City by Yamuna Homes & Design Pvt. Ltd.The first of
                        its kind premium residential sites consisting of 5,6,7 to 10
                        cents sites within a 36 acres residential habitiat at
                        Kulai,Mangaluru creating an expectional new community in the
                        Historic Beach City of Mangalore. The rapid growth of Mangaluru
                        city has led to a number of high rise apartments being built as
                        a fixed template for a collective housing. Yamuna Asha city
                        offers a refreshing change of a community habitat falling within
                        150mtrs of the Arabian Sea. Here we strive to create an ambience
                        for a contemporary lifestyle with modern amenities within a
                        secure community. Lush gardens and water features aims to
                        provide a serene environment for its residents. The layout and
                        the architecture have been planned incorporating all distance
                        from the sea share also provides you with additional
                        recreational facilities. Proximity to reputed schools, colleges
                        and business establishment makes Yamuna Asha City an ideal
                        location for your home to lead a holistic and balanced
                        lifestyle.</p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <p><strong>Project Type:</strong> Residential</p><br />

                        <p><strong>Project Status:</strong> On-going</p><br />
                        
                        <p>
                          <h3 className='mb-0 pb-0'>Builder:</h3>
                        Yamuna Homes & Design Pvt. Ltd.<br />
                        
                        NH 66, Kulai, Near Raheja waterfront apartment, Mangaluru, Karnataka 575019</p>
                    
                </div>
	        </div>
            <hr />
	  </div>


        <div className="container col-md-12 text-center">
        <h3>Approved Banks</h3>
        <SimpleGrid cols={4} spacing="xs"    breakpoints={[
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
                    <Image width="250px" height="140px" src="/static/img/bank/Punjab national bank.jpg" alt="Punjab national Bank" />
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
            <div className="logo">
                <a href="#">
                    <Image width="250px" height="140px" src="/static/img/bank/Union bank.jpg" alt="Union Bank" />
                </a>
            </div>
    </SimpleGrid>

        </div>
  </div>
 
  )
}

export default ProjectHighlights