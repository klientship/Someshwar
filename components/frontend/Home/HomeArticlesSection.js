import Image from 'next/image'

const HomeArticlesSection = () => {
  return (
    
    <div className="block" id="features">
    <div className="container">
      <h2>Articles:</h2>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="blog-item">
            <a href="blog-detail.html" className="image no-roll-effect">
              <h3>New project started</h3>
              <div className="bg-transfer">
                    <Image src="/static/img/feature-image-01.jpg" width="100%" height="100%" alt="article" />
              </div>
            </a>
            <figure className="date">
              <i className="icon_clock_alt"></i>10.07.2016
            </figure>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris ac ornare felis. Nam velit neque, blandit id placerat
              eu, venenatis
            </p>
            <a
              href="blog-detail.html"
              className="btn btn-rounded btn-primary arrow"
              >Read More</a
            >
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="blog-item">
            <a href="blog-detail.html" className="image no-roll-effect">
              <h3>New project started</h3>
              <div className="bg-transfer">
              <Image src="/static/img/feature-image-01.jpg" width="100%" height="100%" alt="article" />
              </div>
            </a>
            <figure className="date">
              <i className="icon_clock_alt"></i>10.07.2016
            </figure>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris ac ornare felis. Nam velit neque, blandit id placerat
              eu, venenatis
            </p>
            <a
              href="blog-detail.html"
              className="btn btn-rounded btn-primary arrow"
              >Read More</a
            >
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="blog-item">
            <a href="blog-detail.html" className="image no-roll-effect">
              <h3>New project started</h3>
              <div className="bg-transfer">
              <Image src="/static/img/feature-image-01.jpg" width="100%" height="100%" alt="article" />
              </div>
            </a>
            <figure className="date">
              <i className="icon_clock_alt"></i>10.07.2016
            </figure>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris ac ornare felis. Nam velit neque, blandit id placerat
              eu, venenatis
            </p>
            <a
              href="blog-detail.html"
              className="btn btn-rounded btn-primary arrow"
              >Read More</a
            >
          </div>
        </div>

        <div className="text-center">
          <a className="btn btn-rounded btn-primary" href="#">View More</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeArticlesSection