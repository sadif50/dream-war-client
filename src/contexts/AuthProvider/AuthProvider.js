import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    // Create User with email and password
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log in with email and password
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Provider Log in for google and github login
    const providerLogin = provider => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    // Log out User function
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    // Set User Name and Photo Url
    const updateInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // get currently signed in user data
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })

        return () => {
            unsubscribe();
        }
    },[])


    return (
        <AuthContext.Provider value={{user, loader, createUser, logIn, providerLogin, logOut, updateInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;