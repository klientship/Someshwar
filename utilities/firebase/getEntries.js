import { collection, getDocs, orderBy, query, where, limit, doc, getDoc} from "firebase/firestore"; 
import {db} from './firebase';

export const firebaseGetAllPosts = async()=>{
    const entriesRef = collection(db, "villas");
    const querySnapshot = await getDocs(entriesRef);
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    return myEntries;
}

export const firebasePostsForHome = async()=>{
    const entriesRef = collection(db, "villas");
    const querySnapshot = await getDocs(entriesRef);
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    return myEntries;
}

export const getSingleEntry = async(id)=>{
    const docRef = doc(db,"villas", id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return {id: docSnap.id, ...docSnap.data()}
    }else{
        return null;
    }
}