import React, { createContext, useState } from 'react'
import { genres } from '../data'

export const WorkshopContext = createContext()

const WorkshopContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({})
    const [userSession, setUserSession] = useState(null)
    const [isSearch, setIsSearch] = useState(false)
    const [query, setQuery] = useState('')

    return(
        <WorkshopContext.Provider value={{
            userData, setUserData, userSession, setUserSession, isSearch, setIsSearch, query, setQuery, genres
        }}>
            { children }
        </WorkshopContext.Provider>
    )
}

export default WorkshopContextProvider