import firebaseInitialize from "../Pages/Login/firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
   const auth = getAuth();

    const registerUser = (name,email, password) => {
       
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('');
                const newUser = {
                    displayName: name,
                    email: email,
                    admin: 'No'
                }
                saveUserDB(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name

                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                  setUser(newUser)
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
              setError('')
                 
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
                setError('')
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })  
    }
    //save user  in database
    const saveUserDB = (user) =>{
        fetch('https://serene-reaches-93418.herokuapp.com/addUser',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user) 
        }).then(res => res.json)
        .then(data => console.log(data))
    }
    const logOut = () => {
       
        signOut(auth).then(() => {
            // Sign-out successful.
        setError('')
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