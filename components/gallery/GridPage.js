import { Button, Card, Grid } from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { getImageUrl } from '../../utilities/firebase/gallery';
import MultiFileUploader from '../UI/MultiFileUploader';
import GalleryImage from './GalleryImage';

const GridPage = (props) => {
  const [images, setImages] = useState([]);
  const [showDropZone, setShowDropZone] = useState(false);

  useEffect(()=>{
    setImages([]);
    props.images.forEach(image => {
      localGetImageUrl(image);
    })
  },[]);

  const localGetImageUrl = (image)=>{
    getImageUrl(image._location.path_)
    .then(
      urlObj =>{
        setImages((prevImages)=> prevImages.concat(urlObj));
      })
    .catch(err=> console.log("There was an error inside usestate: ",err));
  }

  const deleteImageHandler = (url)=>{
    setImages((prevImages)=> {
      return prevImages.filter(image => image.url !== url)
    });

  }

  return (
    <div>
      <Card shadow="sm" style={{margin:"1em"}}>
      <h3 style={{margin:0, display:"inline"}}>Gallery</h3>
            <Button style={{marginLeft:"1em"}} onClick={()=>setShowDropZone(prevShowDropZone => !prevShowDropZone) }>
                Upload
              </Button>
      </Card>
      {showDropZone && <MultiFileUploader onFileUploadSuccess={localGetImageUrl} />}
        <Grid>
           {images.map((image, index)=>{
               return (
                <Grid.Col span={2} key={index}>
                 {image && image.status && 
                  <GalleryImage onDeleteClicked={deleteImageHandler} image={image} />
                 
                } 
                </Grid.Col>
           )})}
        </Grid>

    </div>
  )
}

export default GridPage