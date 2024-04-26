import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"; 
import auth from "../firebase/firebase.config"; 

 

 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user,setUser] =useState(null)
    const [loader,setLoader] = useState()


    const createGithub = ()=> {
        return signInWithPopup(auth,githubProvider)
    }

    const createGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const createRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    


    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user set ' ,currentUser)
            setUser(currentUser)
        })
        return() =>{
            UnSubscribe()
        }
    },[])



    const authInfo = {
        user,
        loader,
        createRegister,
        createLogin,
        createGoogle,
        createGithub,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;