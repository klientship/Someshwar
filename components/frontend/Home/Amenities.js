import Image from "next/image";
import { SimpleGrid } from "@mantine/core";
const Amenities = () => {
  return (
    <div className="block " id="about">
      <div
        className="container text-center"
        style={{ width: "75%", margin: "auto", marginTop: "2em" }}
      >
        <h2 >Amenities</h2>
        <SimpleGrid cols={4} spacing="xs" breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/002-car-parking.svg"
              width="70px"
              height="70%"
              alt="car parking"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>CAR PARKING</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/008-lift.svg"
              width="70px"
              height="70%"
              alt="CCTV Cameras"
            />
            <br />
            <p  style={{fontWeight: "bold",fontFamily: "Montserrat"}}>LIFT</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/006-fire-safety.svg"
              width="70px"
              height="70%"
              alt="Club House"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>FIRE SAFETY</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/007-intercom.svg"
              width="70px"
              height="70%"
              alt="Club House"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>INTERCOM</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/001-24hr-backup-electricity.svg"
              width="70px"
              height="70%"
              alt="Fire Saftey"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>24HR BACKUP ELECTRICITY</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/010-security.svg"
              width="70px"
              height="70%"
              alt="Intercom"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>SECURITY</p>
          </div>
          <div className="amenitiesImage">
            <Image
              src="/img/amenities/playground.svg"
              width="70px"
              height="70%"
              alt="Play Area"
            />
            <br />
            <p style={{fontWeight: "bold",fontFamily: "Montserrat"}}>PLAY AREA</p>
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
