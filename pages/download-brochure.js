import { Button, TextInput } from '@mantine/core';
import {useRef, useState} from 'react'
import WebLayout  from '../components/layout/WebLayout';
import { firebaseCreateBrochure } from '../utilities/firebase/brochures';
import { useRouter } from 'next/router';
const DownloadBrochure = () => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const [error, setError]= useState({});
    const router = useRouter();

    const onSubmitHandler = async(e)=>{
        console.log("clicked")

        e.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;
        const phone = phoneInputRef.current.value;
        if(!name){
            setError({
                source:"NAME_FIELD",
                message: "Name is invalid"
            });
            return;
        }
        if(name.length < 2){
            setError({
                source:"NAME_FIELD",
                message: "Name is Too Short"
            });
            return;
        }
        if(!email || !email.includes('@') || !email.includes('.')){
            setError({
                source:"EMAIL_FIELD",
                message: "Invalid Email"
            });
            return;
        }
        if(!phone && phone.length < 7){
            setError({
                source:"PHONE_FIELD",
                message: "Invalid Phone"
            });
            return;
        }
        if(name && email && phone && email.includes('@') && email.includes('.')){
           const res = await firebaseCreateBrochure({name, email, phone});
           if(res){
                nameInputRef.current.value = '';
                emailInputRef.current.value = '';
                phoneInputRef.current.value='';
                window.open("/static/files/Brochure.pdf",'_blank');
           }
        }
    }
  return (
    <WebLayout>
        <div style={{ width:"50%", margin:"100px auto"}}>
            <h2>Fill The Form To Download The Brochure</h2>
            <form onSubmit={onSubmitHandler}>
                <TextInput 
                    ref={nameInputRef}
                    error={error && error.source && error.source === "NAME_FIELD" ? error.message : false}  
                    style={{marginTop:"10px"}} 
                    label="Name" 
                    placeholder='Your Name' 
                    size='md' />
                <TextInput  
                    ref={emailInputRef}
                    error={error && error.source && error.source === "EMAIL_FIELD" ? error.message : false}  
                    style={{marginTop:"10px"}} 
                    label="Email" 
                    placeholder='Your Email' 
                    size='md' />
                <TextInput 
                    ref={phoneInputRef}
                    error={error && error.source && error.source === "PHONE_FIELD" ? error.message : false}  
                    type='number' 
                    style={{marginTop:"10px"}} 
                    label="Contact Number" 
                    placeholder='Phone Number' 
                    size='md' />
                <Button type='submit' style={{marginTop:"10px"}}>Submit</Button>
            </form>
        </div>
    </WebLayout>
  )
}

export default DownloadBrochure