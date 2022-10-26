import React from 'react';
import { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {displayName: 'S.M.SUJAN'}
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;