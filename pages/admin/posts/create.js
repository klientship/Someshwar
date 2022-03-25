import React from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'
import PostCreate from '../../../components/posts/PostCreate'
import { useRouter } from 'next/router';
import { useNotifications } from '@mantine/notifications';
import { firebaseCreatePost } from '../../../utilities/firebase/setEntries';
const Create = () => {
    const router = useRouter();
    const notifications = useNotifications();

    const discardClickHandler =()=>{
        router.replace('/admin/posts');
    }

    const formSubmitHandler = async (id, bhk, sqfeet, landSize, price, imageOneUrl, imageTwoUrl, imageThreeUrl, imageFourUrl)=>{
        const result = await firebaseCreatePost({
            bhk, sqfeet, landSize, price, imageOneUrl, imageTwoUrl, imageThreeUrl, imageFourUrl
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
        <PostCreate onDiscardClicked={discardClickHandler} onSubmitHandler={formSubmitHandler} />
    </AdminLayout>
  )
}

export default Create