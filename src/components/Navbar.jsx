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
    const [menuIsOpen, setMenuIsOpen] = useState(false)

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
            <nav className="d-none d-lg-block navbar  pt-2 shadow-sm position-fixed navbarWeb bg-white">
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
                                    <ul className="navbar-nav">
                                       <li className="nav-item dropdown" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                                           <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                           <AccountCircleIcon className=""  style={{ fontSize: 40, color: 'lightgrey' }} />
                                           </p>
                                            <ul className="dropdown-menu hidden-menu p-1" aria-labelledby="navbarDropdown" style={{display : menuIsOpen ? 'block' : 'none'}}>
                                                <li className="d-flex flex-column">
                                                    <p className="dropdow-item p-1 d-block mb-2 h6">Bonjour {userData.name} !</p>
                                                    <Link to="/Profil" className="dropdow-item p-1 d-block mb-2">Mon profil</Link>
                                                    <Link to="/Favoris" className="dropdow-item p-1 d-block mb-2">Favoris</Link>
                                                    <button className="btn btn-danger dropdow-item" onClick={handleClick}>deconnection</button> 
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
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
