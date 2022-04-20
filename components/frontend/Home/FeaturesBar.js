import Image from 'next/image'

const FeaturesBar = () => {
  return (
    <div className="block background-is-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div
            className="feature has-icon"
            data-scroll-reveal="enter left and move 20px"
          >
            <i className="icon"
              >
                  <Image src="/img/icon-white-shield.png" height="81px" width="74px" alt="White Shield" />
            </i>
            <div className="description">
              <h3>Modern & Safe Living</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ac ornare felis. Nam velit neque, blandit id
                placerat
              </p>
              <a href="" className="btn btn-default btn-rounded arrow"
                >Read More</a
              >
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div
            className="feature has-icon"
            data-scroll-reveal="enter bottom and move 20px"
          >
            <i className="icon"
              >
                <Image src="/img/icon-white-pin.png" height="81px" width="74px" alt="White Pin" />
                </i>
            <div className="description">
              <h3>Peaceful Location</h3>
              <p>
                Mauris ac ornare felis. Nam velit neque, blandit id
                placerat eu, venenatis at purus. Nunc maximus ultrices
                lacus
              </p>
              <a href="" className="btn btn-default btn-rounded arrow"
                >Read More</a
              >
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div
            className="feature has-icon"
            data-scroll-reveal="enter right and move 20px"
          >
            <i className="icon"
              >
                <Image src="/img/icon-white-wallet.png" height="81px" width="74px" alt="White Pin" />
            </i>
            <div className="description">
              <h3>Great Starting Prices</h3>
              <p>
                Nam velit neque, blandit id placerat eu, venenatis at
                purus. Nunc maximus ultrices lacus eu fringilla.
              </p>
              <a href="" className="btn btn-default btn-rounded arrow"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="background-wrapper">
      <div className="bg-transfer opacity-15">
        <Image src="/img/bg-01.jpg" height="81px" width="74px" alt="Background" />
      </div>
      <div className="background-color background-color-black"></div>
    </div>
  </div>
  )
}

export default FeaturesBar