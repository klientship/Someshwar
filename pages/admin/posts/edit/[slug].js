import { useRouter } from "next/router";
import AdminLayout from '../../../../components/layout/AdminLayout';
import PostCreate from '../../../../components/posts/PostCreate';
import { useNotifications } from "@mantine/notifications";
import { getSingleEntry } from "../../../../utilities/firebase/getEntries";
import { firebaseUpdatePost } from "../../../../utilities/firebase/setEntries";

const Edit = (props) => {
    const router = useRouter();
    const notifications = useNotifications();
    const post = JSON.parse(props.post);


    const discardClickHandler =()=>{
      router.replace('/admin/posts');
    }

    const formSubmitHandler = async (id, title, date, body, imageUrl)=>{
      const result = await firebaseUpdatePost(id, {
          title, date: date.toString(), body, imageUrl
      });

      if(result){
          notifications.showNotification({
              title: 'Success!',
              message: 'The Post Has Been Successfuly Saved!',
              autoClose: 5000,
              color: 'green',
          });
          router.replace('/admin/posts');
       }else{
          notifications.showNotification({
              title: 'Error!',
              message: 'There was an unknown error!',
              autoClose: 5000,
              color: 'red',
          }); 
       }
    }

   return (
    <AdminLayout>
        <PostCreate onDiscardClicked={discardClickHandler} onSubmitHandler={formSubmitHandler} existingPost={post} />
    </AdminLayout>
  )
}

export async function getServerSideProps (context){
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

export default Edit