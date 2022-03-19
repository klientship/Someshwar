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
      <Grid align="center">
          <Grid.Col span={1}>
          <h2>Posts</h2>
          </Grid.Col>
          <Grid.Col span={1}>
            <Button onClick={createPostHandler} color="grape">Create Post</Button>
            </Grid.Col>
            <Grid.Col span={10}>

            </Grid.Col>
      </Grid>
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