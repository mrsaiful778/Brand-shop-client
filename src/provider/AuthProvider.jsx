import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, createUser => {
            console.log('user in the auth sate change', createUser);
            setUser(createUser);
        });
        return () => {
            unSubscribe();
        }

    },[])
    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;