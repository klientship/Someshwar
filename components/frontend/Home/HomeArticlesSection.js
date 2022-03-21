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
              <a href="blog-detail.html" className="image no-roll-effect">
                <h3>{article.title}</h3>
                <div className="bg-transfer">
                  <img src={article.imageUrl} width="100%" height="100%" alt="article"/>
                {/* <Image src="/static/img/feature-image-01.jpg" width="100%" height="100%" alt="article" /> */}
                </div>
              </a>
              <figure className="date">
                <i className="icon_clock_alt"></i>{moment(article.date).fromNow()}
              </figure>
              <p>
                {article.snippet}
              </p>
              <a
                href={`/posts/${article.slug}`}
                className="btn btn-rounded btn-primary arrow"
                >Read More</a>
            </div>
          </div>
          ))}
      
      </div>

        <div className="text-center">
          <a
                href="/posts"
                className="btn btn-rounded btn-primary arrow"
                >View More</a>
        </div>
    </div>
  </div>
  )
}

export default HomeArticlesSection