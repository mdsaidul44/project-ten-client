import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"; 
import auth from "../firebase/firebase.config"; 

 

 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const [user,setUser] =useState(null)
    const [loader,setLoader] = useState(true)


    const createGithub = ()=> {
        setLoader(true)
        return signInWithPopup(auth,githubProvider)
    }

    const createGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createRegister = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogin = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }
    


    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user set ' ,currentUser)
            setUser(currentUser)
            setLoader(false)
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