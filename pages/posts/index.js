import React from 'react'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllPosts } from '../../utilities/firebase/getEntries';
import moment from 'moment';
import Head from 'next/head';
import HomeArticlesSection from '../../components/frontend/Home/HomeArticlesSection';


import {getGalleryImages,getHomepageSettings} from '../../utilities/api';


const Posts = (props) => {
    const posts = JSON.parse(props.posts);
    const settings  =  JSON.parse(props.settings);
    
  return (
    <WebLayout settings={settings}>

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
    const settings = await getHomepageSettings();

    const props = {
        posts:[],
        settings:[],
      };

    if(settings){
        props.settings = JSON.stringify(settings.data[0]);
      }

      
    if(res){
        props.posts = JSON.stringify(res);
    }
    
      return {
          props
        }

}

export default Posts