import { useState, useEffect } from 'react';
import { getImageUrl } from '../../../utilities/firebase/gallery';
import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';

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
        <SimpleGrid cols={4} spacing="xs">
            {images.map((image, index)=>(
            <div key={index}>
                <Image src={image.url} width={400} height={400} alt="gallery image" />
             </div>
            ))}
           
        </SimpleGrid>
        {!props.allPage && <div className="text-center">
          <a className="btn btn-rounded btn-primary" href="/gallery">View More</a>
        </div>}
        
    </div>
</div>
  )
}

export default HomeGallery