import  { createContext } from "react";

import { useState} from "react";

import { useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value i want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null, 
});

export const UserProvider = ({ children }) => {
  const [currentUser,setCurrentUser] = useState(null);
  const value = {currentUser , setCurrentUser};

  useEffect(()=>{
   const unsubcribe = onAuthStateChangedListener((user)=>{
     if(user) {
      createUserDocumentFromAuth(user);   
    }
     setCurrentUser(user);
  });

    return unsubcribe;
},[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}  