// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {

 const user = {displayName: 'Sadia Prova'}

    return (
       <AuthContext.Provider value={user}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;