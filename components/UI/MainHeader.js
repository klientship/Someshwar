import { Header, MediaQuery, Burger, ThemeIcon } from '@mantine/core';
// import config from '../../config';
import {MdDashboard} from "react-icons/md";

const MainHeader = ({opened,setOpened}) => {
  return (
    <Header height={60} p="xs">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
            />
            </MediaQuery>

            <ThemeIcon variant="light" radius="xl" size="xl" color="teal">
                <MdDashboard />
            </ThemeIcon><h3 style={{marginLeft:"20px"}}>Yamuna Asha City</h3>
        </div>
    </Header>
  )
}

export default MainHeader