import AdminLayout from '../../../components/layout/AdminLayout';
import PostsIndex from '../../../components/posts/PostsIndex';
import { firebaseGetAllPosts } from '../../../utilities/firebase/getEntries';

const Posts = (props) => {
   const posts = JSON.parse(props.posts);
   
  return (  
    <AdminLayout page="posts">
       <PostsIndex posts={posts} />
    </AdminLayout>
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