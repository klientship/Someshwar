import { Header, MediaQuery, Burger } from '@mantine/core';
// import config from '../../config';
import Image from 'next/image';
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

            <Image src="/static/img/yamuna logo.png" height="70%" width="140px" /> 
            <h3 style={{marginLeft:"20px"}}>Website Management Dashboard</h3>
        </div>
    </Header>
  )
}

export default MainHeader