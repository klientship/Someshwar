import { useState } from "react";
import { storage } from "../utilities/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

const useStorage = () => {
    const [progress, setProgress]= useState(0);
    const [error, setError]= useState(null);
    const [url, setUrl] = useState(null);


    const uploadImage =(file)=>{
        console.log("started process");
      const rand = Math.floor(Math.random() * 100) + 1;
      const storageRef = ref(storage,`postImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',(snap)=>{
        let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
        setProgress(percentage);
        console.log("upload going on");

      }, (err)=>{
          console.log(err);
          setError(err);
      },async()=>{
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("INSIDE Hook. The URL IS:  ", url);
        setUrl(url);
      });
    }

    const deleteImage=(file, url)=>{
      let storageRef=null;
      if(file){
        storageRef = ref(storage,`postImages/${file.name}`);
      }else{
        storageRef = ref(storage,url);
      }
      deleteObject(storageRef).then(() => {
        setUrl(null);
      }).catch((error) => {
         setError(error);
      });
    }

    return {progress, url, error, uploadImage, deleteImage, setUrl}
}

export default useStorage;
