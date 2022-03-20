import { Grid } from '@mantine/core';
import { useEffect } from 'react';

const GridPage = ({images}) => {
    if(!images){
        images = [];
    }
  return (
    <div>
        <Grid>
           {images.map((image, index)=>{
               return (
                <Grid.Col span={3} key={index}>
                  <h1>hello world</h1>
                    {/* <img src={image.url} style={{objectFit:'cover'}} width={500} height={500} alt="uploaded" />  */}
                </Grid.Col>
           )})}
        </Grid>

    </div>
  )
}

export default GridPage