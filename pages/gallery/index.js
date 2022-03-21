import React from 'react'
import HomeGallery from '../../components/frontend/Home/HomeGallery'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllGalleryImages } from '../../utilities/firebase/gallery'

const Gallery = ({images}) => {
  return (
    <WebLayout>
        <HomeGallery images={images} />

    </WebLayout>
  )
}


export async function getServerSideProps (context){
    const resImages = await firebaseGetAllGalleryImages();
    if(resImages){
      const images = JSON.stringify(resImages);
      return {
          props:{
              images:images
          }
      }
    }else{
        return {
            props:{
                images:[]
            }
        }
    }
    
}
  

export default Gallery