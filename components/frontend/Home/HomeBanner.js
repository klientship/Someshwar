import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="hero-section background-is-dark">
      <div className="wrapper">
        <div className="hero-title">
          <div className="container">
            <h1 className="animate">
              Yamuna Asha City:
              <br />
              Residential Gated Community Layout
            </h1>
            <p  className="animate">
                  Rera Number:<br />
                  PRM/KA/RERA/1257/334/PR/190913/002849
              </p>
          </div>
        </div>
      </div>
      <div
        className="owl-carousel"
        data-owl-dots="0"
        data-owl-nav="1"
        data-owl-autoplay="1"
        data-owl-loop="1"
        data-owl-fadeout="1"
      >
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/gallery-big-04.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/gallery-big-01.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
        <div className="hero-slide">
          <div className="bg-transfer">
            <Image
              src="/static/img/gallery-big-02.jpg"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
