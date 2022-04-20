import { Button, PasswordInput, TextInput, Text } from '@mantine/core';
import styles from '../../styles/Form.module.css';
import { useRouter } from 'next/router';
import ErrorMessage from '../UI/ErrorMessage';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { logIntoFireBase } from '../../utilities/firebase/auth';

const LoginForm = () => {
  const [error, setError]= useState(null);
  const [loading, setLoading] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const router= useRouter();

  useEffect(()=>{
    setError(null);
  },[emailVal, passwordVal]);


  const loginHandler = async(event)=>{
    event.preventDefault();
    setError(null);
    console.log("Clicked");
    if(!emailVal || !emailVal.includes('@') || !emailVal.includes('.')){
      setError({
        status: false,
        source: "EMAIL",
        message: "Invalid Email"
      });
      return;
    }
    if(!passwordVal || passwordVal.length < 6){
      setError({
          status: false,
          source: "PASSWORD",
          message: "Password must be atleast 6 characters"
      });
      return;
    }
    setLoading(true);
    console.log("Success");
    const res = await logIntoFireBase(emailVal, passwordVal);
    if(res && res.status){
      router.replace('/admin');
    }else{
      setError(res);
    }
    setLoading(false);
  }



  return (
    <form className={styles.form} onSubmit={loginHandler}>
      <Image src="/img/yamuna logo.png" height="70%" width="140px" />
        <h3 className={styles.heading}>Welcome To Yamuna Asha City Dashboard Login</h3>
        {error && !error.status && error.source === "OTHER" && (
            <ErrorMessage message={error.message} />
        )}
        <TextInput 
                value={emailVal} 
                onChange={(event) => setEmailVal(event.currentTarget.value)}
                className={styles['form-control']}
                placeholder="name@gmail.com"
                label="Your Email Address"
                required 
                size="md"
                error={
                  error && !error.status && error.source === "EMAIL"
                    ? error.message
                    : false
              }
            />
            <PasswordInput
                className={styles['form-control']}
                placeholder='Secret'
                onChange={(event) => setPasswordVal(event.currentTarget.value)}
                value={passwordVal} 
                label="Password"
                required
                size="md"
                error={
                  error && !error.status && error.source === "PASSWORD"
                    ? error.message
                    : false
              }
            />
            <Button
              type="submit"
              className={styles['action-button']} 
              variant="light" 
              color="teal" 
              size="md" 
              uppercase
              loading={loading}
              >
                Log In
            </Button>

            
    </form>
  )
}

export default LoginForm