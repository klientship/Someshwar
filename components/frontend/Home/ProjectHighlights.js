import Image from 'next/image'
import {SimpleGrid} from '@mantine/core';

const ProjectHighlights = (props) => {
    let project_overview,project_type,project_status;
    if(props.settings){
      project_overview = props.settings.project_overview;
      project_type = props.settings.project_type;
      project_status = props.settings.project_status;
    }
  return (
    <div className="block" id="about" style={{width:"75%", margin:'auto'}} >
        <div className="container">
	        <h2 className='text-center' >Project <span >Highlight</span></h2>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>{ project_overview} </p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <p style={{fontWeight: "bold",fontFamily: "Montserrat"}} ><strong>Project Type:</strong> {project_type}</p><br />

                        <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}><strong>Project Status:</strong> {project_status}</p><br />
                        <h3 className='mb-0 pb-0'>Builder:</h3>
                        <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>
                       
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
                      {props.settings.approved_banks.map((bank, index) => {
                return (
                    <div className="logo" key={index}>
                        <a >
                        <Image width="250px" height="140px" src={bank.logo} alt={bank.name} />
                        </a>
                    </div>
                )
            })}

            
    </SimpleGrid>

        </div>
  </div>
 
  )
}

export default ProjectHighlights