import MenuOption from '../../components/UI/MenuOption';
import { Navbar } from '@mantine/core';
import {MdOutlineDirectionsRun, MdOutlineHome, MdOutlineArticle, MdImage, MdOutlineLibraryBooks, MdOutlineHouse} from "react-icons/md";
import { logOutOfFireBase } from '../../utilities/firebase/auth';

const MainNavBar = ({opened, page}) => {
  return (
    <Navbar
        width={{ sm: 150, lg: 250 }} 
        style={{marginTop:"20px", paddingRight:"10px"}}
        hiddenBreakpoint="sm"          
        hidden={!opened}
        >
          <MenuOption color="grape" icon={<MdOutlineHome />} label="home" to="/admin" selected={page && page == 'home'} />
          <MenuOption color="violet" icon={<MdOutlineHouse />} label="Villas" to="/admin/posts" selected={page && page == 'posts'} />
          <MenuOption color="teal" icon={<MdImage />} label="Gallery" to="/admin/gallery" selected={page && page == 'gallery'} />
          <MenuOption color="orange" icon={<MdOutlineLibraryBooks />} label="Brochure Requests" to="/admin/brochures" selected={page && page == 'brochure'} />
          <MenuOption color="red" icon={<MdOutlineDirectionsRun />} label="Log out" onClick={logOutOfFireBase} />
    </Navbar>
  )
}

export default MainNavBar