import React from 'react';
import { Dropzone } from "@mantine/dropzone";
import { Text } from '@mantine/core';
import useStorage from '../../hooks/use-storage';
import { useState, useEffect } from 'react';
import { useNotifications } from "@mantine/notifications";
import {  Button } from '@mantine/core';
import Image from 'next/image';

const ImageUploader = (props) => {
  const imageTypes = ['image/png', 'image/jpeg', 'image/sgv+xml', 'image/gif'];
  const {progress, url, error, uploadImage, deleteImage, setUrl} = useStorage();
  const [file, setFile]= useState(null);
  const notifications = useNotifications();

  useEffect(() => {
    if(url){
        props.setUrl(url);
    }
  }, [url]);

  const propsImageUrl = props.url;

  useEffect(()=>{
    if(propsImageUrl){
        setUrl(propsImageUrl);
    }
  },[propsImageUrl, setUrl]);

  useEffect(()=>{
    if(error){
      notifications.showNotification({
        title: 'Ah Crap!',
        message: error,
        autoClose: 3000,
        color: 'red',
      });
    }
  }, [error, notifications]);

  const fileInputChangeHandler=(files)=>{
    if(files && files.length > 0){
      let selectedFile = files[0];
      if(selectedFile){
        setFile(selectedFile);
        console.log("Got File: ", selectedFile);
        uploadImage(selectedFile);
      }
    }
  }

  const fileSelectErrorHandler =(files)=>{
    let errMessage = "That File Format Is Not Supported! Please upload a image";
    if(files && files.length > 0){
      let selectedFile = files[0];
      if(selectedFile){
        errMessage = "You can't upload a " + selectedFile.file.type + " file! Please upload a image";
      }
    }
    notifications.showNotification({
      title: 'Hmm No!',
      message: errMessage,
      autoClose: 3000,
      color: 'red',
    });
  }

  const imageDeleteHandler = ()=>{
    deleteImage(file,propsImageUrl);
    setFile(null);
    props.setUrl(null);
}

  return (
    <>
    {!url &&  
    <Dropzone
        onDrop={fileInputChangeHandler}
        onReject={fileSelectErrorHandler}
        maxSize={3 * 1024 ** 2}
        accept={imageTypes}
        loading={progress && progress>0 && progress<100}
    >
        {(status) => (
        <Text>Drag image here or click to select a image</Text>
        )}
    </Dropzone>}
    {url &&  
    <div className="imageBox">
      <div>
        <img src={url} style={{objectFit:'cover'}} width={100} height={100} alt="uploaded" /> 
      </div>
      <div>
        <Button variant="light" color="red" onClick={imageDeleteHandler}>
            Remove
        </Button>
      </div>
    </div>
  }
    </>
  )
}

export default ImageUploader