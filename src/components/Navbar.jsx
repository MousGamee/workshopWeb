import React, { useState, useContext, useEffect } from 'react'
import './Navbar.css'
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FirebaseContext } from '../firebase';


const Navbar = (props) => {

    const firebase = useContext(FirebaseContext)
    const [userSession, setUserSession] = useState(null)
    const [userData, setUserData] = useState({})

    const handleClick = () => {
        firebase.logOutUser()
    }

    useEffect(() => {
        let listner = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : setUserSession(null)
        })

        if(!!userSession ){
            firebase.user(userSession.uid)
            .get()
            .then(doc => {
                if(doc && doc.exists){
                    const myData = doc.data()
                    setUserData(myData)
                    console.log('userData => ', userData)
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
       
        return () => {
            listner()
        }
    }, [userSession])

    return (
        <>
            {/* navigation web */}
            <nav className="d-none d-lg-block pt-2 shadow-sm position-fixed navbarWeb bg-white">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="logo">
                        <img src="img/logo-2.png" alt="" style={{ width: 150 }} />
                    </Link>
                    <div className="searchBar">
                        <Searchbar />
                    </div>
                    <div className="menu">
                        <ul className=" d-flex">
                            {
                                userSession ? (
                                    <>
                                        <div class="dropdown ">
                                            <AccountCircleIcon style={{ fontSize: 40, color: 'lightgrey' }} />
                                            {/* <p>bonjour {userData.name} !</p>
                                            <button className="btn btn-danger" onClick={handleClick}>deconnection</button> */}
                                        </div>
                                    </>
                                )
                                    :
                                    (<>
                                        <li><Link to="/Connection" className="btn btn-primary">Connection</Link></li>
                                        <li><Link to="/Inscritpion" className="btn btn-secondary" style={{ marginLeft: 15 }}>Inscritpion</Link></li>
                                    </>)
                            }

                        </ul>
                    </div>
                </div>
            </nav>

            <MobileNavbar />
        </>
    )
}

export default Navbar
