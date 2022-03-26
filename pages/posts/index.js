import React from 'react'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllPosts } from '../../utilities/firebase/getEntries';
import moment from 'moment';
import Head from 'next/head';
import HomeArticlesSection from '../../components/frontend/Home/HomeArticlesSection';

const Posts = (props) => {
    const posts = JSON.parse(props.posts);
  return (
      <WebLayout>

        <div className="block" id="features" style={{marginTop:"3em"}}>
            <div className="container m-auto">
                <HomeArticlesSection posts={posts} allPage={true} />
            </div>
        </div>
      </WebLayout>
  )
}

export async function getServerSideProps (context){
    const res = await firebaseGetAllPosts();
    if(res){
        const posts = JSON.stringify(res);
        return {
            props:{
                posts,
                status:true
            }
        }

    }
    else{
        return {
            props:{
                posts:null,
                status:false
            }
        }
    }
}

export default Posts