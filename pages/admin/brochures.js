import React from 'react'
import BrochureIndex from '../../components/brochure/BrochureIndex'
import AdminLayout from '../../components/layout/AdminLayout'
import { firebaseGetAllBrochures } from '../../utilities/firebase/brochures'

const Brochures = (props) => {
    const brochures = JSON.parse(props.brochures);
    console.log(brochures);
  return (
    <AdminLayout page="brochure">
        <BrochureIndex brochures={brochures} />
    </AdminLayout>
  )
}

export async function getServerSideProps (context){
    const res = await firebaseGetAllBrochures();
    if(res){
        const brochures = JSON.stringify(res);
        return {
            props:{
                brochures,
                status:true
            }
        }

    }
    else{
        return {
            props:{
                brochures:null,
                status:false
            }
        }
    }
}


export default Brochures