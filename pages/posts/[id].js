import React from "react";
import styles from "../../styles/Post.module.css";
import { getSingleEntry } from "../../utilities/firebase/getEntries";
import WebLayout from "../../components/layout/WebLayout";
import { SimpleGrid } from "@mantine/core";
import PostImageView from "../../components/posts/PostImageView";
import {BsHouseDoorFill} from "react-icons/bs";


import {getSingleVilla,getHomepageSettings} from '../../utilities/api';


const ViewPost = (props) => {
  const post = JSON.parse(props.post);
  const settings = JSON.parse(props.settings);
  
  return (
    <WebLayout settings={settings}>
      <div className={styles.row}>
        <div className={styles.leftcolumn}>
          <div className={styles.card}>
            <a href="/">
              <span>
                <i className="fa fa-arrow-left"></i> Go Back
              </span>
            </a>

            <p class="mt-2">{post.description}</p>

            <div
              className="gallery text-center"
              data-scroll-reveal="enter bottom and move 20px"
            >
              <SimpleGrid
                cols={2}
                spacing="xs"
                breakpoints={[
                  { maxWidth: 980, cols: 2, spacing: "md" },
                  { maxWidth: 755, cols: 2, spacing: "sm" },
                  { maxWidth: 600, cols: 1, spacing: "sm" },
                ]}
              >

            {post.images.map((image, index) => (
              <PostImageView src={image.image} />
            ))}
                {/* {post.imageOneUrl && <PostImageView src={post.imageOneUrl} />}
                {post.imageTwoUrl && <PostImageView src={post.imageTwoUrl} />}
                {post.imageThreeUrl && <PostImageView src={post.imageThreeUrl} />}
                {post.imageFourUrl && <PostImageView src={p ost.imageFourUrl} />}

               */}
              </SimpleGrid>
            </div>
             <div className="text-center villa-feature-section">
             <h2>Features: </h2>

                <ul className="villa-feature-list">

                  <li className="villa-feature-list__item"><BsHouseDoorFill /> {post.bhk} BHK</li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> {post.sq_feet} Sq Feet </li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> Land Size: {post.land_size} </li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> Price: {post.price}</li>
                </ul>
                <a href="/contact" className="btn btn-primary btn-lg">Enquiry now</a>
             </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};


export async function getServerSideProps (context){
  const { id } = context.params;
  const res = await getSingleVilla(id);
  const settings = await getHomepageSettings();

    const props = {
      post:[],
      status: true,
        settings:[],
      };
      
      if(settings){
        props.settings = JSON.stringify(settings.data[0]);
      }
      if (res) {
        props.post = JSON.stringify(res);    
      }
      
      return {
        props
      }
}
  

export default ViewPost;
