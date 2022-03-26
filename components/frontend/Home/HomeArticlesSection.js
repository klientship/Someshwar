import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link';
import { Button, Card, SimpleGrid } from '@mantine/core';
const HomeArticlesSection = (props) => {
  let posts = [];
  if(props.posts){
    posts = props.posts;
  }
  return (
    
    <div className="block" id="features">
    <div className="container">
      <h2>Villas:</h2>
      <div className="row">
        <SimpleGrid cols={3}
         breakpoints={[
          { maxWidth: 980, cols: 3, spacing: 'md' },
          { maxWidth: 755, cols: 2, spacing: 'sm' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
          {posts.map((villa, index) => (
              <Card shadow="sm" key={index} p="sm" component='a' href={`/posts/${villa.id}`}>
                  <div className='home-villa-card'>
                    <Card.Section>
                      {villa.imageOneUrl ? <Image src={villa.imageOneUrl} width="300px" height="300px" objectFit='cover'/>:"" }
                    </Card.Section>
                    <div style={{marginLeft:'1em'}}>
                    <h3>{villa.bhk} BHK</h3>
                    <h3>{villa.sqfeet} Sq.Feet</h3>
                    <h3>{villa.landSize} Land Size</h3>
                    <Button n sx={(theme)=>({
                backgroundColor: '#9F292B',
                '&:hover':{
                  backgroundColor: theme.colors.red[7]
                }
              })}>View Details</Button>
                    </div>
                  </div>
              </Card>
           
          ))}
        </SimpleGrid>
                  {/* href={`/posts/${article.slug}`} */}

      </div>

        {!props.allPage && <div className="text-center" style={{marginTop:"1em"}}>
          <a
            href="/posts"  
            className="btn btn-rounded  btn-primary" 
            style={{backgroundColor:"#9F292B", fontSize:'1.3em', border:0, padding:"0.5em 1em"}}
          >View More</a>
        </div> }
    </div>
  </div>
  )
}

export default HomeArticlesSection