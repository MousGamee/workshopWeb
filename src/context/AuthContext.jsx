import React, { createContext } from 'react'
import Firebase from '../firebase/firebase'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
