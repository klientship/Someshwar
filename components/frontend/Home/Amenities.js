import Image from "next/image";
import { SimpleGrid } from "@mantine/core";
const Amenities = () => {
  return (
    <div className="block " id="about">
      <div
        className="container text-center"
        style={{ width: "75%", margin: "auto", marginTop: "2em" }}
      >
        <h2>Amenities</h2>
        <SimpleGrid cols={5} spacing="xs" breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/002-car-parking.svg"
              width="40px"
              height="100%"
              alt="car parking"
            />
            <br />
            <p>CAR PARKING</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/003-cctv-cameras.svg"
              width="40px"
              height="100%"
              alt="CCTV Cameras"
            />
            <br />
            <p>CCTV CAMERAS</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/004-club-house.svg"
              width="40px"
              height="100%"
              alt="Club House"
            />
            <br />
            <p>CLUB HOUSE</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/005-drainage-and-sewage-treatment.svg"
              width="40px"
              height="100%"
              alt="Club House"
            />
            <br />
            <p>DRAINAGE AND SEWAGE TREATMENT</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/006-fire-safety.svg"
              width="40px"
              height="100%"
              alt="Fire Saftey"
            />
            <br />
            <p>FIRE SAFETY</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/007-intercom.svg"
              width="40px"
              height="100%"
              alt="Intercom"
            />
            <br />
            <p>INTERCOM</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/static/img/amenities/009-play-area.svg"
              width="40px"
              height="100%"
              alt="Play Area"
            />
            <br />
            <p>PLAY AREA</p>
          </div>
          <div className="amenitiesImage">
          <Image
              src="/static/img/amenities/010-security.svg"
              width="40px"
              height="100%"
              alt="Security"
            />
            <br />
            <p>SECURITY</p>
          </div>
          <div className="amenitiesImage">
          <Image
              src="/static/img/amenities/011-indoor-games.svg"
              width="40px"
              height="100%"
              alt="Indoor Games"
            />
            <br />
            <p>INDOOR GAMES</p>
          </div>
          <div className="amenitiesImage">
          <Image
              src="/static/img/amenities/013-gymnasium.svg"
              width="40px"
              height="100%"
              alt="Gymnasium"
            />
            <br />
            <p>GYMNASIUM</p>
          </div>
        </SimpleGrid>


      </div>
      <div className="background-wrapper">
        <div className="background-color background-color-black opacity-5"></div>
      </div>
    </div>
  );
};

export default Amenities;
