import { SimpleGrid } from "@mantine/core";

const NearByPlace = (props) => {
    let places = [];
    if(props.places){
      places = props.places.data;
    }
  return (
    <div className="block" id="gallery">
        <div className="container">
            <h2>Near By Places</h2>
            <div className="gallery text-center" data-scroll-reveal="enter bottom and move 20px">
            <SimpleGrid 
                cols={3} 
                spacing="xs"
                breakpoints={[
                    { maxWidth: 980, cols: 3, spacing: 'md' },
                    { maxWidth: 755, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 2, spacing: 'sm' },
                ]}
            >

{places.map((place, index) => (
            
            <div key={index}>
            <a href="/img/near_place/surathkal.jpg" className="gallery-item image-popup">
                <div className="image bg-transfer">
                    <img src={place.img} alt=""/>
                </div>
                
            </a>
            <span className='gallery-image-text'>{place.name} <span>{place.distance}</span></span>
        </div>

           
          ))}
          
               
            </SimpleGrid>         
            </div>
           
        </div>
    </div>

    
  )
}

export default NearByPlace