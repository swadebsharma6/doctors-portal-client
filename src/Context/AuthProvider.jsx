import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create 
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
      // google
      const provider = new GoogleAuthProvider;
      const googleLogin = ()=>{
          setLoading(true);
          return signInWithPopup(auth, provider);
      }

      // logout
      const logOutUser =()=>{
        setLoading(true);
        return signOut(auth)
    }

     // reset Password
     const resetPass =(email)=>{
        setLoading(true);
      return sendPasswordResetEmail(auth, email);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser);
               console.log('observer', currentUser);
               setLoading(false)
           });
           return ()=>{
               unSubscribe();
           }
       }, []);

    const authInfo ={
        user,
        loading,
        createUser,
        signUser,
        logOutUser,
        googleLogin,
        resetPass,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;