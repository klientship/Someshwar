import Image from "next/image";
import { Modal } from "@mantine/core";
import { useState } from "react";
const PostImageView = (props) => {
    const [opened, setOpened] = useState(false);
  return (
    <div>
        <Modal
            size="90%"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Villa Image"
        >
            <Image src={props.src}  width="100%" height="100%" layout="responsive" objectFit="contain" alt="Villa Image" />
        </Modal>
        <Image onClick={()=>setOpened(true)} src={props.src} width="500px" height="500px" objectFit="cover"  alt="Villa Image" />
        
    </div>
  )
}

export default PostImageView