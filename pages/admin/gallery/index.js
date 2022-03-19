import React from 'react'
import { useEffect, useState } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout'
import { firebaseGetAllGalleryImages } from '../../../utilities/firebase/gallery';

import GridPage from '../../../components/grid/GridPage';

const Gallery = (props) => {
    // const [images, setImages]= useState([]);

    // useEffect(()=>{
    //     getAllImages();
    // },[]);

    // const getAllImages = async()=>{
    //     const res = await firebaseGetAllGalleryImages();
    //     if(res){
    //        setImages(res);
    //        console.log("Images set")
    //     }
    // }

    const images = JSON.parse(props.images);

  return (
    <AdminLayout page="gallery">
         <GridPage images={images} />
    </AdminLayout>
  )
}

export async function getServerSideProps (context){
  const res = await firebaseGetAllGalleryImages();
    console.log("Inside RES, got images");
    const images = await JSON.stringify(res);
    return {
        props:{
        images,
        status:true
        }
    }

}





export default Gallery