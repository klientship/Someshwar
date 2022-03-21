import React from 'react'
import WebLayout from '../../components/layout/WebLayout'
import { firebaseGetAllPosts } from '../../utilities/firebase/getEntries';
import moment from 'moment';
const Posts = (props) => {
    const posts = JSON.parse(props.posts);
  return (
      <WebLayout>
        <div className="block" id="features" style={{marginTop:"3em"}}>
            <div className="container m-auto">
                <h2 style={{marginBottom:"0px"}}>Articles:</h2>
                <div className="row">
                    <div style={{width:"100%", margin:"auto"}} >
                        {
                            posts.map((post, index)=>(
                                <div key={index} className="col-md-3 col-sm-3 " style={{border:"2px solid grey",paddingTop:"10px",paddingBottom:"10px",margin:"1em", height:"35em", borderRadius:"1.5em"}}>
                                    <div className="blog-item">
                                        <a href="blog-detail.html" className="image no-roll-effect">
                                            <h3>{post.title}</h3>
                                            <div className="bg-transfer">
                                                <img src={post.image} alt="" />
                                            </div>
                                        </a>
                                        <figure className="date"><i className="icon_clock_alt"></i>{moment(post.date).fromNow()}</figure>
                                        <p>
                                           {post.snippet}
                                        </p>
                                        <a href={`/posts/${post.slug}`} className="btn btn-rounded btn-primary arrow">Read More</a>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                
                </div>
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