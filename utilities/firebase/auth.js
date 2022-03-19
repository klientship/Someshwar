import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const logIntoFireBase = async (email, password) => {
    console.log("Login Started");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Success from firebase");

      return {
        status: true
      };
    }catch(error){
        console.log("Login Failed: ", error.message);
      if(error.code === "auth/wrong-password"){
        return {
                  status: false,
                  source:"PASSWORD",
                  message: "Password Mismatch! Please Check Again"
              };
      }
      if(error.code === "auth/user-not-found"){
        return {
                  status: false,
                  source:"EMAIL",
                  message: "Password Mismatch! Please Check Again"
              };
      }
      return {
                status: false,
                source:"UNKNOWN",
                message: error.message
            };
    }   
};


export const logOutOfFireBase = async()=>{
  try{
    await signOut(auth);
  }catch(error){
    console.log(error);
  }
}

