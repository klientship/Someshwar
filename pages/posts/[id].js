import React from "react";
import styles from "../../styles/Post.module.css";
import { getSingleEntry } from "../../utilities/firebase/getEntries";
import WebLayout from "../../components/layout/WebLayout";
import { SimpleGrid } from "@mantine/core";
import PostImageView from "../../components/posts/PostImageView";
import {BsHouseDoorFill} from "react-icons/bs";
const ViewPost = (props) => {
  const post = JSON.parse(props.post);
  console.log(post);
  return (
    <WebLayout>
      <div className={styles.row}>
        <div className={styles.leftcolumn}>
          <div className={styles.card}>
            <a href="/">
              <span>
                <i className="fa fa-arrow-left"></i> Go Back
              </span>
            </a>

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
                {post.imageOneUrl && <PostImageView src={post.imageOneUrl} />}
                {post.imageTwoUrl && <PostImageView src={post.imageTwoUrl} />}
                {post.imageThreeUrl && <PostImageView src={post.imageThreeUrl} />}
                {post.imageFourUrl && <PostImageView src={post.imageFourUrl} />}

              
              </SimpleGrid>
            </div>
             <div className="text-center villa-feature-section">
             <h2>Features: </h2>

                <ul className="villa-feature-list">

                  <li className="villa-feature-list__item"><BsHouseDoorFill /> {post.bhk} BHK</li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> {post.sqfeet} Sq Feet </li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> Land Size: {post.landSize} </li>
                  <li className="villa-feature-list__item"><BsHouseDoorFill /> Price: {post.price}</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await getSingleEntry(id);
  if (res) {
    const post = JSON.stringify(res);
    return {
      props: {
        post,
        status: true,
      },
    };
  } else {
    return {
      props: {
        post: null,
        status: false,
      },
    };
  }
}

export default ViewPost;
