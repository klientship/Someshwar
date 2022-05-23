import FrontLayout from '../components/layout/FrontLayout'
import { firebaseGetGalleryImagesForHome } from '../utilities/firebase/gallery';
import { firebasePostsForHome } from '../utilities/firebase/getEntries';
import Amenities from '../components/frontend/Home/Amenities';
import FeaturedVideo from '../components/frontend/Home/FeaturedVideo'
import HomeArticlesSection from '../components/frontend/Home/HomeArticlesSection'
import HomeGallery from '../components/frontend/Home/HomeGallery'
import ProjectHighlights from '../components/frontend/Home/ProjectHighlights'
import NearByPlace from '../components/frontend/Home/NearByPlace'
import Specification from '../components/frontend/Home/specification'
import { useRouter } from 'next/router'; 
import dynamic from "next/dynamic";
const SiteScripts = dynamic(()=> import('./scripts'), {ssr:false});
import { useEffect } from 'react';
import Head from 'next/head';
const x = 0;


import {getBanks,getGalleryImages,getHomepageSettings,getVillas,getNearByLocations} from '../utilities/api';

export default function Home(props) {
  // const posts = JSON.parse(props.posts);

  const images = JSON.parse(props.images);
  const settings = JSON.parse(props.settings);
  const villas = JSON.parse(props.villas);
  const banks = JSON.parse(props.banks);
  const places = JSON.parse(props.places);


  return (
    <FrontLayout settings={settings}>
    
      <FeaturedVideo settings={settings} />
      <ProjectHighlights settings={settings}/>
      <HomeArticlesSection villas={villas} />
      <Amenities />
      <Specification />
      <HomeGallery images={images} />
      <NearByPlace places={places}/>
    </FrontLayout>
  )
}

export async function getServerSideProps (context){
  // const res = await firebasePostsForHome();
  const resImages = await getGalleryImages();
  const settings = await getHomepageSettings();
  const villas = await getVillas();
  const banks = await getBanks();
  const places = await getNearByLocations();

  const props = {
    posts:[],
    status:false,
    images:[],
    settings:[],
    villas:[],
    banks:[],
    places:[]
  };

  if(villas){
    props.villas = JSON.stringify(villas);
  }
  if(banks){
    props.banks = JSON.stringify(banks);
  }
  if(settings){
    props.settings = JSON.stringify(settings.data[0]);
  }
  if(places){
    props.places = JSON.stringify(places);
  }

  // if(res){
  //     const posts = JSON.stringify(res);
  //     props.posts = posts;
  //     props.status = true;
  // }
  if(resImages){
    const images = JSON.stringify(resImages);
    props.images = images;
  }
  return {
    props
  }
}

