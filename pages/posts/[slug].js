import React from 'react'
import styles from '../../styles/Post.module.css';
import { getSingleEntry } from '../../utilities/firebase/getEntries';
import WebLayout from '../../components/layout/WebLayout';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
const ViewPost = (props) => {
    const post = JSON.parse(props.post);
    console.log(post);
  return (
    <WebLayout>
            <div className={styles.row}>
                <div className={styles.leftcolumn}>
                <div className={styles.card}>
                    <a href='/'><span><i className="fa fa-arrow-left"></i> Go Back</span></a>
                    <h2>{post.title}</h2>
                    <h5>{moment(post.date).fromNow()}</h5>
                    <div style={{textAlign:"center"}}>
                        <Image src={post.imageUrl} width="500px" height="500px" alt={post.title} />

                    </div>
                    <p dangerouslySetInnerHTML={{__html: post.body}}>
                    </p>
                </div>
                </div>
            </div>
    </WebLayout>
  )
}

export async function getServerSideProps(context){
    const {slug} = context.params;
    const res = await getSingleEntry(slug);
    if(res){
        const post = JSON.stringify(res);
        return {
            props:{
                post,
                status:true
            }
        }
    }
    else{
        return {
            props:{
                post:null,
                status:false
            }
        }
    }
}

export default ViewPost