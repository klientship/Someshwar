import { storage } from "./firebase";
import { listAll, ref } from "firebase/storage";

export const firebaseGetAllGalleryImages = async()=>{
    console.log("process started");
    const imagePaths = [];
    const listRef = ref(storage, 'galleryImages/');
    try{
        const res = await listAll(listRef);
        res.items.forEach((itemRef)=>{
            imagePaths.push(itemRef.fullPath);
        });
        console.log("IMAGE PATHS IS:", imagePaths);
    }catch(error){
        console.log(error);
    }
}