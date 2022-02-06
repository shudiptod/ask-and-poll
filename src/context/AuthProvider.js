import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();
    return (
        <AuthProvider.Provider value={allContexts}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;