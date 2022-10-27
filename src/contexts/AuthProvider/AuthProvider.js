import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    },[])


    return (
        <AuthContext.Provider value={{user, createUser, logIn, providerLogin, logOut, updateInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;