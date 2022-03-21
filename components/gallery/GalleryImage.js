import { Button, Modal } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import { firebaseDeleteImage } from '../../utilities/firebase/gallery';
import { useNotifications } from "@mantine/notifications";

const GalleryImage = ({image, onDeleteClicked}) => {
    const [showOptions, setShowOptions]=useState(false);
    const [showModal, setShowModal]=useState(false);
    const notifications = useNotifications();

    const onDeleteButtonClicked = async()=>{
        onDeleteClicked(image.url);
        const res = await firebaseDeleteImage(image.url);
        if(res){
            notifications.showNotification({
                title: 'Success',
                message: "Image Successfully Deleted",
                autoClose: 3000,
                color: 'blue',
              });
        }else{
            notifications.showNotification({
                title: 'Error',
                message: "There was an issue",
                autoClose: 3000,
                color: 'red',
              });
        }
    }

  return (
    <div onMouseEnter={()=>setShowOptions(true)} onMouseLeave={()=>setShowOptions(false)}>
        <Image  src={image.url}layout="intrinsic" width={250} height={250} alt="uploaded"  />
        {showOptions && <div style={{position: 'relative',zIndex: 100, bottom: "50px", textAlign: "center"}}>
            <Button style={{marginRight:"0.5em"}} onClick={()=>setShowModal(true)}>
                View
            </Button>
            <Button color="red" onClick={onDeleteButtonClicked}>
                Delete
            </Button>
        </div>}

        <Modal
         opened={showModal}
         onClose={() => setShowModal(false)}
         title="View Image">
        <Image  src={image.url} layout="intrinsic" width={500} height={500} alt="uploaded"  />

        </Modal>
    </div>

  )
}

export default GalleryImage