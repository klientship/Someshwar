import { SimpleGrid } from "@mantine/core";

const NearByPlace = () => {
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
                    { maxWidth: 600, cols: 1, spacing: 'sm' },
                ]}
            >
                <div>
                    <a href="/static/img/near_place/surathkal.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/surathkal.jpg" alt=""/>
                        </div>
                        
                    </a>
                    <span className='gallery-image-text'>SURATHKAL RAILWAY STATION <span>4KM</span></span>
                </div>

                <div>
                    <a href="/static/img/near_place/airport.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/airport.jpg" alt=""/>
                        </div>
                    </a>
                    <span className='gallery-image-text'>MANGALORE INTERNATIONAL AIRPORT <span>12KM</span></span>
                </div>
                <div>
                    <a href="/static/img/near_place/ryaninternationalschool.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/ryaninternationalschool.jpg" alt=""/>
                        </div>
                    </a>
                    <span className='gallery-image-text'>RYAN INTERNATIONAL SCHOOL <span>0.5KM</span></span>
                </div>
                <div>
                    <a href="/static/img/near_place/panambur.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/panambur.jpg" alt=""/>
                        </div>
                    </a>
                    <span className='gallery-image-text'>PANAMBUR BEACH <span>2KM</span></span> 
                </div>
                <div>
                    <a href="/static/img/near_place/nitk.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/nitk.jpg" alt=""/>
                        </div>
                    </a>
                    <span className='gallery-image-text'>NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA <span>4KM</span></span> 
                </div>
                <div>
                    <a href="/static/img/near_place/mrpl.jpg" className="gallery-item image-popup">
                        <div className="image bg-transfer">
                            <img src="/static/img/near_place/mrpl.jpg" alt=""/>
                        </div>
                    </a>
                    <span className='gallery-image-text'>MRPL <span>6KM</span></span> 
                </div>
            </SimpleGrid>         
            </div>
           
        </div>
    </div>

    
  )
}

export default NearByPlace