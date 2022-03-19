import { Grid } from '@mantine/core';

const GridPage = ({images}) => {
    if(!images){
        images = [];
    }
    console.log("Inside component:", images);
  return (
    <div>
        <Grid>
           {images.map((image, index)=>{
               return (
                <Grid.Col span={3} key={index}>
                    <img src={image.url} style={{objectFit:'cover'}} width={500} height={500} alt="uploaded" /> 
                </Grid.Col>
           )})}
        </Grid>

    </div>
  )
}

export default GridPage