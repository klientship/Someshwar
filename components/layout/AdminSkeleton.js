import { AppShell, Navbar, Header, MediaQuery, Burger } from '@mantine/core';
import { useState } from 'react';

import MainHeader from '../UI/MainHeader';
import MainNavBar from '../UI/MainNavBar';

const AdminSkeleton = (props) => {
    const [opened, setOpened] = useState(false);

  return (
    <AppShell
    navbarOffsetBreakpoint="sm"
    fixed
    padding="md"
    navbar={<MainNavBar page={props.page} opened={opened} />}
    header={<MainHeader opened={opened} setOpened={setOpened}/>}
    >
    {props.children}
    </AppShell>    
  )
}

export default AdminSkeleton