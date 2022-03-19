import React from 'react'
import LoginForm from '../components/login/LoginForm'
import styles from '../styles/Auth.module.css';
const Login = () => {
  return (
    <div  className={styles.layout}>
        <div className={styles['form-section']}>
            <LoginForm />
        </div>
        <div className={styles['banner-section']}>
            
        </div>
    </div>
  )
}

export default Login