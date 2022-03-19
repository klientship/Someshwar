import { collection, getDocs, orderBy, query, where} from "firebase/firestore"; 
import {db} from './firebase';

export const firebaseGetAllPosts = async()=>{
    console.log("Stared get");
    const entriesRef = collection(db, "posts");
    const querySnapshot = await getDocs(query(entriesRef,orderBy("date", "desc")));
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    console.log(myEntries);
    return myEntries;
}

export const getSingleEntry = async(slug)=>{
    console.log("sindei single entry: ",slug);
    const result = query(collection(db,"posts"), where("slug", "==", slug));
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