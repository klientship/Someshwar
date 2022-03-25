import {IoEyeOutline, IoTrashOutline, IoPencilSharp} from "react-icons/io5";
import { Menu } from '@mantine/core';
import {useState} from 'react';
import ConfirmationDialog from '../UI/ConfirmationDialog';
import {useRouter} from 'next/router';
import moment from 'moment';
const PostRow = ({post, deleteClickHandler}) => {
    const [opened, setOpened]= useState(false);
    const router = useRouter();

    const editPageHandler = ()=>{
        router.push(`/admin/posts/edit/${post.slug}`)
    }

  return (
    <tr>
    <td>{post.bhk}</td>
    <td>{post.sqfeet}</td>
    <td>{post.landSize}</td>
    <td>{post.price}</td>
    <td>
        <Menu>
            <Menu.Item 
            onClick={editPageHandler}
                icon={<IoPencilSharp />}>
                    Edit
            </Menu.Item>
            <Menu.Item 
                icon={<IoEyeOutline />}>
                    View
            </Menu.Item>
            <Menu.Item 
                onClick={()=>{setOpened(true)}} 
                icon={<IoTrashOutline />} 
                color="red">
                    Delete
            </Menu.Item>
        </Menu>
    </td>
    <ConfirmationDialog 
        opened={opened} 
        message="Are you sure you wish to delete this post? This cannot be undone."
        onCloseClicked={()=>{setOpened(false)}} 
        onSubmitClicked={()=>{deleteClickHandler(post.id)}} />
    </tr>
  )
}

export default PostRow