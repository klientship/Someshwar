import { useState, useEffect } from 'react';
import { getImageUrl } from '../../../utilities/firebase/gallery';
import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import PostImageView from "../../../components/posts/PostImageView";

const HomeGallery = (props) => {

  return (
    <div className="block" id="gallery">
    <div className="container">
        <h2>Gallery.</h2>
        <SimpleGrid cols={4} spacing="xs"   breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 2, spacing: 'sm' },
      ]}>
           {props.images.map((image, index)=>(
            <div key={index}>
                   <PostImageView src={image.img_path}  key={index} />
                {/* <Image src={image.img_path} width={400} height={400} alt="gallery image" objectFit='cover' /> */}
             </div>
            ))}
           
        </SimpleGrid>
        {!props.allPage && <div className="text-center" style={{marginTop:"1em"}}>
          <a 
            className="btn btn-rounded btn-primary" 
            href="/gallery" 
            style={{backgroundColor:"#f4bc1c", fontSize:'1em', border:0, padding:"0.8em 1.3em"}}
          >View More</a>
        </div>}
        
    </div>
</div>
  )
}

export default HomeGallery