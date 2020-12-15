import React from 'react'
import './Navbar.css'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        {/* navigation web */}
        <nav className="d-none d-md-block">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/" className="logo">
                    <img src="img/logo.png" alt="" style={{width : 150}}/>
                </Link>
                <div className="searchBar">
                    <Searchbar />
                </div>
                <div className="menu">
                    <ul className=" d-flex">
                        <li><Link to="/Connection" className="mr-4">Connection</Link></li>
                        <li><Link to="/Inscritpion">Inscritpion</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* mobile searchBar */}
        <div className="mobileSearch d-flex d-md-none justify-content-center align-items-center">
            <Searchbar />
        </div>

        {/* mobile bottom tab */}
        <nav className="d-block d-md-none mobileBottomTab">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <ul className="d-flex justify-content-center bottomTab">
                    <li><SearchIcon style={{fontSize : 30}}/><p>Recherche</p></li>
                    <li><FavoriteBorderIcon style={{fontSize : 30}}/><p>Favoris</p></li>
                    <li><PersonIcon style={{fontSize : 30}}/><p>Connection</p></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar
