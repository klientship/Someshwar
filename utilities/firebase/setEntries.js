import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import {db} from "./firebase";

export const firebaseCreatePost = async(post)=>{
    try {
        const docRef = await addDoc(collection(db, "villas"), post);
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}

export const firebaseUpdatePost = async(id, post)=>{
    const snippet = generateSnippet(post.body);
    const slug = generateSlug(post.title);

    const finalPost = {
        ...post,
        snippet,
        slug
    }

    await setDoc(doc(db, "villas", id), finalPost);
    return 1;
}

//* LOCAL METHOD: CREATE A Slug
const generateSlug= title =>{
    const cleanTitle=title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    const newText=cleanTitle.replace(/ /g,'-');
    const randomNo=Math.floor(Math.random()*10000)+1;
    return newText+'-'+String(randomNo);
}

//* LOCAL METHOD: CREATE A SNIPPET
const generateSnippet = body =>{
    let cleanBody = body.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanBody.slice(0,100);
}

