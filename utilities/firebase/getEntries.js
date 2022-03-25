import { collection, getDocs, orderBy, query, where, limit} from "firebase/firestore"; 
import {db} from './firebase';

export const firebaseGetAllPosts = async()=>{
    const entriesRef = collection(db, "villas");
    const querySnapshot = await getDocs(query(entriesRef,orderBy("date", "desc")));
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    return myEntries;
}

export const firebasePostsForHome = async()=>{
    const entriesRef = collection(db, "villas");
    const querySnapshot = await getDocs(query(entriesRef,orderBy("date", "desc"),limit(3)));
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    return myEntries;
}

export const getSingleEntry = async(slug)=>{
    const result = query(collection(db,"villas"), where("slug", "==", slug));
    const querySnapshot = await getDocs(result);
    const myArray = [];
    querySnapshot.forEach((doc) => {
        myArray.push({id: doc.id, ...doc.data()});
    });
    if(myArray.length > 0)
        return myArray[0]
    else
        return null;
}