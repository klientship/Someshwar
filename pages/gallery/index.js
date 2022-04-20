import React from 'react'
import HomeGallery from '../../components/frontend/Home/HomeGallery'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllGalleryImages } from '../../utilities/firebase/gallery'


import {getGalleryImages,getHomepageSettings} from '../../utilities/api';


const Gallery = (props) => {
    const images  =  JSON.parse(props.images);
    const settings  =  JSON.parse(props.settings);

    if(!images){
        images = [];
    }
  return (
    <WebLayout settings={settings}>
        <HomeGallery images={images} allPage={true} />
    </WebLayout>
  )
}


export async function getServerSideProps (context){
    const resImages = await getGalleryImages();
    const settings = await getHomepageSettings();

    const props = {
        images:[],
        settings:[],
      };

    if(settings){
        props.settings = JSON.stringify(settings.data[0]);
      }

      
    if(resImages){
        props.images = JSON.stringify(resImages);
    }
    
      return {
          props
        }
}
  

export default Gallery