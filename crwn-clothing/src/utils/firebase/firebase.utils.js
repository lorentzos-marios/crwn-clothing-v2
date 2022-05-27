import { initializeApp } from "firebase/app";
import { 
getAuth , 
signInWithRedirect , 
signInWithPopup , 
GoogleAuthProvider,
 } from "firebase/auth";

import{
   getFirestore,
   doc,
   getDoc,
   setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr68kuNkzXrGQasAAQ0pOebM704e0KwEc",
  authDomain: "crwn-clothing-db-5d71f.firebaseapp.com",
  projectId: "crwn-clothing-db-5d71f",
  storageBucket: "crwn-clothing-db-5d71f.appspot.com",
  messagingSenderId: "14355161504",
  appId: "1:14355161504:web:79e9a4e1483b9dc17304c5"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   promt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
  signInWithPopup(auth,googleProvider); 
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth,googleProvider);

export const db = getFirestore();  

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,"users",userAuth.uid);
 
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);


   if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
     
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
   });
 } catch (error) {
    console.log("error creating the user ",error.message);
   }

 }
  return userDocRef;
};