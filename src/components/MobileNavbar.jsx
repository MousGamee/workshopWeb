import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../firebase';

const MobileNavbar = () => {
    const firebase = useContext(FirebaseContext)
    const [userSession, setUserSession] = useState(null)

    const handleClick = () => {
        firebase.logOutUser()
    }

    useEffect(() => {
        let listner = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : setUserSession(null)
        })

        return () => {
            listner()
        }
    }, [])

    return (
        <>
            {/* mobile bottom tab */}
            <nav className="d-block d-lg-none mobileBottomTab">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <ul className="d-flex justify-content-center bottomTab">
                        <li><Link to="/" className="d-flex flex-column justify-content-center align-items-center"><SearchIcon style={{ fontSize: 30, color: 'lightgrey' }} /><p>Recherche</p></Link></li>
                        <li><Link to="/Favoris" className="d-flex flex-column justify-content-center align-items-center"><FavoriteBorderIcon style={{ fontSize: 30, color: 'lightgrey' }} /><p>Favoris</p></Link></li>
                        {
                            userSession ? (
                                <>
                                    <li><Link to="/Profil" className="d-flex flex-column justify-content-center align-items-center"><PersonIcon style={{ fontSize: 30, color: 'lightgrey' }} /><p>Profil</p></Link></li>
                                </>
                            ) : (
                                    <>
                                        <li><Link to="/Connection" className="d-flex flex-column justify-content-center align-items-center"><PersonIcon style={{ fontSize: 30, color: 'lightgrey' }} /><p>Connection</p></Link></li>
                                    </>
                                )
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MobileNavbar
