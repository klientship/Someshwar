import { Button, Grid, Menu, Table } from '@mantine/core';
import { useRouter } from 'next/router';
import PostRow from "./PostRow";
import deleteSingleDoc from '../../utilities/firebase/deleteEntries';

const PostsIndex = ({posts}) => {
    const router = useRouter();
    const createPostHandler = ()=>{
        router.push('/admin/posts/create');
    }

    const deleteClickHandler=async(id)=>{
       const x = await deleteSingleDoc(id);
       router.replace('/admin/posts');
    }
  return (
      <>
      <h2 style={{margin:"0 1em 0 0", display:"inline"}}>Posts</h2>
      <Button onClick={createPostHandler} color="grape">Create Post</Button>
     
      <div className=''>
      </div>
       <Table highlightOnHover>
            <thead>
                <tr>
                    <th>Post Title</th>
                    <th>Creation Date</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {posts.map((post, index) => {
                return (
                  <PostRow key={index} post={post}  deleteClickHandler={deleteClickHandler} />
                )
            })}
            </tbody>
        </Table>
      </>

  )
}

export default PostsIndex