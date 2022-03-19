import React from 'react'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utilities/firebase/firebase';
import { useRouter } from 'next/router';
import { Loader } from '@mantine/core';
import AdminSkeleton from './AdminSkeleton';

const AdminLayout = (props) => {
    const [user, setUser]= useState(true);
    const router = useRouter();

    onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user);
        console.log("Inside Admin Layout. user has signed In");
    } else {
        setUser(0);
        console.log("Inside Admin Layout. user has signed out");
    }});

    useEffect(()=>{
        if(user === 0){
            router.replace('/login');
        }
    },[user]);
  return (
    <>
    {!user &&  <div className='fullWidthDiv'><Loader size="xl" /></div>}
    {user && <AdminSkeleton page={props.page}>{props.children}</AdminSkeleton>}
    </>
  )
}

export default AdminLayout