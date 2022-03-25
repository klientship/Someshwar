import React from 'react'
import { ThemeIcon, UnstyledButton, Group, Text, Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMantineTheme } from '@mantine/core';

const MenuOption = ({color, label, icon, to, onClick, selected}) => {
    const router = useRouter();
    const appTheme = useMantineTheme();
    let buttonColor = appTheme.colorScheme === 'dark' ? appTheme.colors.dark[6] : appTheme.colors.blue[5];
    const hoverColor = appTheme.colorScheme === 'dark' ? appTheme.colors.dark[6] : appTheme.colors.blue[9];

    if(selected){
        buttonColor = hoverColor;
    }

    const onClickHandler = (e)=>{
        e.preventDefault();
        if(to){
            router.push(to);
        }else{
            onClick();
        }
    }

  return (
    <UnstyledButton
        onClick={onClickHandler}
        sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: "0px 10px 10px 0px",
        color: theme.colorScheme === 'dark' ? theme.colors.white[0] : theme.white,
        marginTop:'10px',
        marginRight:'20px',
        backgroundColor: buttonColor,
        '&:hover': {
            backgroundColor: hoverColor,
        },
        })}
    >
        <Group>
            <ThemeIcon color={color} variant="light" size="xl">
                {icon}
            </ThemeIcon>
            <Text transform="capitalize" size="md">{label}</Text>
        </Group>
    </UnstyledButton>
  )
}

export default MenuOption;