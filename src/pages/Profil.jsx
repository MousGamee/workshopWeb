import React, { useContext, useEffect, useState } from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { FirebaseContext } from '../firebase'

const Profil = (props) => {
    const firebase = useContext(FirebaseContext)
    const [ userSession, setUserSession ] = useState(null)

    const handleClick = () => {
        firebase.logOutUser()
    }
    useEffect(() => {
        let listner = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        return () => {
            listner()
        }
    }, [])
    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <button className="btn btn-danger" onClick={handleClick}> deconnection</button>
        </div>
    )
}

export default Profil
