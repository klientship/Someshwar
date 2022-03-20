import { storage } from "./firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";

export const firebaseGetAllGalleryImages = async()=>{
    console.log("process started");
    const imagePaths = [];
    const listRef = ref(storage, 'galleryImages/');
    try{
        const res = await listAll(listRef);
        res.items.forEach(async(itemRef)=>{
            const url = await getDownloadURL(itemRef);
            imagePaths.push(url);
        });
         console.log("IMAGE PATHS IS:", imagePaths);
        return imagePaths;
    }catch(error){
        console.log(error);
    }
}

const getImageUrl = async()=>{

}