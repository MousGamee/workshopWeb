import React, { createContext, useState } from 'react'

export const WorkshopContext = createContext()

const WorkshopContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({})
    const [userSession, setUserSession] = useState(null)

    return(
        <WorkshopContext.Provider value={{
            userData, setUserData, userSession, setUserSession
        }}>
            { children }
        </WorkshopContext.Provider>
    )
}

export default WorkshopContextProvider