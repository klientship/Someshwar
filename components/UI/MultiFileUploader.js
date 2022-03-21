import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useNotifications } from "@mantine/notifications";
import { firebaseUploadImage } from "../../utilities/firebase/gallery";
import { useState, useEffect } from "react";

const MultiFileUploader = (props) => {
    const [successCount, setSuccessCount] = useState(0);  
    const [failureCount, setFailureCount] = useState(0);  
    const [fileCount, setFileCount] = useState(0);  
    const [loading, setLoading]=useState(false);
    const notifications = useNotifications();

    useEffect(()=>{
        if(!loading && fileCount!=0 && successCount+failureCount === fileCount ){
            notifications.showNotification({
                    title: 'Process Complete',
                    message: `${successCount} files successfully imported. ${failureCount} files failed to import.`,
                    autoClose: 3000,
                    color: 'blue',
                  });
                  setLoading(false);
                  setSuccessCount(0);
                  setFailureCount(0);
                  setFileCount(0);
        }
    },[ successCount, failureCount, loading]);


    const fileInputChangeHandler=(files)=>{
        if(files && files.length > 0){
            setFileCount(files.length);
            setLoading(true);
            files.forEach(async(file) => {
                const ref = await firebaseUploadImage(file);
                if(ref){
                    setSuccessCount((prevCount)=>prevCount+1);
                    props.onFileUploadSuccess(ref);
                }else{
                    setFailureCount((prevCount)=>prevCount+1);
                }
          });
          setLoading(false);
        }
    }
    
      const fileSelectErrorHandler =(files)=>{
        notifications.showNotification({
            title: 'Error',
            message: "Unsupported Image File Format Found!",
            autoClose: 3000,
            color: 'red',
          });
      }

      return (
          <>
             <Dropzone
                style={{ margin:"0 4em 1em 4em"}}
                onDrop={fileInputChangeHandler}
                onReject={fileSelectErrorHandler}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                loading={loading}
            >
                {(status) => (
                    <h4>Drop images here or click here to select images</h4>
                )}
            </Dropzone>
          </>
 
  )
}

export default MultiFileUploader