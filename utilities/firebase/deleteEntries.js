import { doc, deleteDoc } from "firebase/firestore";
import {db} from "./firebase";

const deleteSingleDoc = async(id)=>{
    const document = doc(db, "villas",id)
    await deleteDoc(document);
}

export default deleteSingleDoc;