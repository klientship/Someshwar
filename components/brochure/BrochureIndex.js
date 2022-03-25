import { Button, Table } from "@mantine/core";
import BrochureRow from "./BrochureRow";

const BrochureIndex = ({brochures}) => {
  return (
    <>
    <h2 style={{margin:"0 1em 0 0", display:"inline"}}>Brochure Requests</h2>
   
    <div className=''>
    </div>
     <Table highlightOnHover style={{marginTop:"1em"}}>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
              </tr>
          </thead>
          <tbody>
            {brochures.map((brochure, index)=>{
                return (
                    <BrochureRow key={index} index={index} brochure={brochure} />
                )
            })}
          
          </tbody>
      </Table>
    </>
  )
}

export default BrochureIndex