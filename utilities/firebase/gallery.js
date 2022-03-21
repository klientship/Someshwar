import { storage } from "./firebase";
import { listAll, ref, getDownloadURL , uploadBytesResumable, deleteObject} from "firebase/storage";

export const firebaseGetAllGalleryImages = async()=>{
    const listRef = ref(storage, 'galleryImages/');
    try{
        const res = await listAll(listRef);
        return res.items;
    }catch(error){
        console.log(error);
    }
}

export const firebaseGetGalleryImagesForHome = async()=>{
    const listRef = ref(storage, 'galleryImages/');
    try{
        const res = await listAll(listRef);
        return res.items.slice(0,8);
    }catch(error){
        console.log(error);
    }
}

export const getImageUrl = async(path)=>{
    try{
        const url = await getDownloadURL(ref(storage, path));
        return {
            status:true,
            url: url
        };
    }catch(err){
        return {
            status:false,
            message: err.code
        };
    }

}

export const firebaseUploadImage = async (file)=>{
    console.log("started process");
    //const rand = Math.floor(Math.random() * 100) + 1;
    const storageRef = ref(storage,`galleryImages/${file.name}`);
    const snapshot = await uploadBytesResumable(storageRef, file);
    return snapshot.ref;
}

export const firebaseDeleteImage=async (url)=>{
    const storageRef = ref(storage,url);
    try{
        await deleteObject(storageRef);
        return true;
    }catch(error){
        return false;
    }
}
