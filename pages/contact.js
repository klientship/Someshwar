import { Grid, TextInput, Textarea, Button } from '@mantine/core';
import WebLayout  from '../components/layout/WebLayout';
import  {useRef} from 'react';

import {getHomepageSettings} from '../utilities/api';

const Contact = (props) => {
    
    const settings  =  JSON.parse(props.settings);
    const nameInputRef =  useRef();
    const phoneInputRef =  useRef();
    const emailInputRef =  useRef();
    const messageInputRef =  useRef();

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        const nameVal = nameInputRef.current.value;
        const emailVal = emailInputRef.current.value;
        const messageVal = messageInputRef.current.value;
        const phoneVal = phoneInputRef.current.value;
        if(nameVal && phoneVal){
            const message = `Hello, <p>A new message was Sent from the contact form of Yamuna Asha City Website. <br /><div>${nameVal} sent a message:</div> <p>${messageVal}</p>. <strong>Email:  ${emailVal}</strong><strong>Phone:  ${phoneVal}</strong></p>`;
            const data = await fetch('/api/contact/email',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    message: message
                })
            });
           
            if(data.ok){
                const output = await data.json();
                console.log(output);
                alert("Sent Successfully");
            }else{
                console.log("Data not okay. check console")
                alert("Failed");

            }
        }
    }   
  return (
      <WebLayout settings={settings}>
        <div style={{ width:"80%", margin:"100px auto"}}>
       <div className='text-center' style={{marginBottom:"3em", fontWeight:"bold"}}>
        <h2 style={{color:'#9F292B', margin:"0.5em"}}>Contact Us</h2>
            <p style={{fontWeight:"bold"}}>
            {settings.address_line_1} {settings.address_line_2}
                <div>
                {settings.contact_number}
                </div>
                <div>
                {props.settings.email}
                </div>
        </p>
       </div>
        <Grid justify="center">
            <Grid.Col lg={6} sm={12}>
                   
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124387.95430458021!2d74.72756725951596!3d13.02780194796966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351450cb44b37%3A0x8d2579a62940aa43!2sYamuna%20Asha%20City!5e0!3m2!1sen!2sin!4v1649951244611!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{border:"3px solid #9F292B"}}
                        allowFullScreen="" 
                        loading="lazy">
                                    
                    </iframe>
            </Grid.Col>
            <Grid.Col lg={4} sm={12} >
                <form onSubmit={onSubmitHandler}>
                <TextInput
                    ref={nameInputRef}
                    placeholder="Your name"
                    label="Full name"
                    size="md"
                    required
                />
                <TextInput
                    ref={phoneInputRef}
                    style={{marginTop:"1em"}}
                    placeholder="Your Phone no"
                    label="Phone no"
                    size="md"
                    required
                />
                <TextInput
                    ref={emailInputRef}
                    style={{marginTop:"1em"}}
                    placeholder="Your Email"
                    label="Email Address"
                    size="md"
                    // required
                />
                  <Textarea
                    ref={messageInputRef}
                    style={{marginTop:"1em"}}
                    placeholder="Your Message"
                    label="Message"
                    size="md"
                    // required
                />
                <Button type='submit' leftIcon={<i className="fa fa-paper-plane"></i>} size="md"  style={{marginTop:"1em"}}>
                    Send Message
                </Button>
                </form>
            </Grid.Col>
        </Grid>
        </div>
      </WebLayout>
  )
}


export async function getServerSideProps (context){
  const settings = await getHomepageSettings();

    const props = {
        images:[],
        settings:[],
      };
      
      if(settings){
        props.settings = JSON.stringify(settings.data[0]);
      }
      return {
        props
      }
}
  


export default Contact