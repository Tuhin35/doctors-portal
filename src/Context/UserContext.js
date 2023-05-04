
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) =>{
        return updateProfile(user,userInfo)
    }

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            // console.log("current user inside the state change", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])
    const authInfo = { user,
         loading,
          createUser,
           signIn, 
           logOut,
           updateUser,
           providerLogin

         }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );


}
export default UserContext;