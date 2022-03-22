import { useState, useEffect } from 'react';
import { getImageUrl } from '../../../utilities/firebase/gallery';
import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
const HomeGallery = (props) => {
    const [images, setImages] = useState([]);

    let propImages = props.images;
    if(!propImages){
      propImages = [];
    }
    useEffect(()=>{
        propImages.forEach(image => {
          localGetImageUrl(image);
        })
      },[propImages]);
    
      const localGetImageUrl = (image)=>{
        getImageUrl(image._location.path_)
        .then(
          urlObj =>{
            setImages((prevImages)=> prevImages.concat(urlObj));
          })
        .catch(err=> console.log("There was an error inside usestate: ",err));
      }

      
  return (
    <div className="block" id="gallery">
    <div className="container">
        <h2>Gallery.</h2>
        <SimpleGrid cols={4} spacing="xs"   breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}>
            {images.map((image, index)=>(
            <div key={index}>
                <Image src={image.url} width={400} height={400} alt="gallery image"   objectFit='cover' />
             </div>
            ))}
           
        </SimpleGrid>
        {!props.allPage && <div className="text-center" style={{marginTop:"1em"}}>
          <a 
            className="btn btn-rounded btn-primary" 
            href="/gallery" 
            style={{backgroundColor:"#9F292B", fontSize:'1.3em', border:0, padding:"0.5em 1em"}}
          >View More</a>
        </div>}

        
    </div>
</div>
  )
}

export default HomeGallery