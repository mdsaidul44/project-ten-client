import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"; 
import auth from "../firebase/firebase.config";

 

 export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loader,setLoader] = useState()

    const createRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const createLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }




    const authInfo = {
        user,
        loader,
        createRegister,
        createLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;