import firebaseInitialize from "../Pages/Login/firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
   const auth = getAuth();

    const registerUser = (email, password) => {
       
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user)
                // ...
            })
            .catch((error) => {

                setError(error.message);
                // ..
            })
              
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (ur) => {
            if (ur) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
    
              setUser(ur)
                 
              // ...
            } else {
              // User is signed out
              setUser({})
              // ...
            }
          });
    },[])

    const loginUser = (email, password) => {
       
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })  
    }
    const logOut = () => {
       
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        })  
    }


    return {
        user,
        registerUser,
        error,
        logOut,
        loginUser,
      
    }
}

export default useFirebase;