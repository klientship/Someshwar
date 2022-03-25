import { collection, getDocs, orderBy, query, addDoc} from "firebase/firestore"; 
import {db} from './firebase';

export const firebaseGetAllBrochures = async()=>{
    const entriesRef = collection(db, "brochures");
    const querySnapshot = await getDocs(entriesRef);
    const myEntries = [];
    querySnapshot.forEach((doc) => {
        myEntries.push({id: doc.id, ...doc.data()});
    });
    return myEntries;
}


export const firebaseCreateBrochure = async(entry)=>{
    try {
        const docRef = await addDoc(collection(db, "brochures"), entry);
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}