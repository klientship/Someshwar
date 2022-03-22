import Image from 'next/image'
import moment from 'moment';
import Link from 'next/link';
const HomeArticlesSection = (props) => {
  let posts = [];
  if(props.posts){
    posts = props.posts;
  }
  return (
    
    <div className="block" id="features">
    <div className="container">
      <h2>Articles:</h2>
      <div className="row">
        
          {posts.map((article, index) => (
            <div key={index} className="col-md-4 col-sm-4">
            <div className="blog-item">
            <Link href={`/posts/${article.slug}`}>
                <a className="image no-roll-effect">
                <h3>{article.title}</h3>
                <div className="bg-transfer">
                  <img src={article.imageUrl} width="100%" height="100%" alt="article"/>
                {/* <Image src="/static/img/feature-image-01.jpg" width="100%" height="100%" alt="article" /> */}
                </div>
              </a></Link>
              <figure className="date">
                <i className="icon_clock_alt"></i>{moment(article.date).fromNow()}
              </figure>
              <p>
                {article.snippet}
              </p>
              <Link href={`/posts/${article.slug}`}><a
                className="btn btn-rounded btn-primary arrow"
                >Read More</a></Link>
            </div>
          </div>
          ))}
      
      </div>

        <div className="text-center">
          <Link  href="/posts"><a
                className="btn btn-rounded btn-primary arrow"
                >View More</a></Link>
        </div>
    </div>
  </div>
  )
}

export default HomeArticlesSection