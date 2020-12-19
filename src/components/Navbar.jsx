import React from 'react'
import './Navbar.css'
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom'
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        <>
            {/* navigation web */}
            <nav className="d-none d-md-block pt-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="logo">
                        <img src="img/logo-2.png" alt="" style={{ width: 150 }} />
                    </Link>
                    <div className="searchBar">
                        <Searchbar />
                    </div>
                    <div className="menu">
                        <ul className=" d-flex">
                            <li><Link to="/Connection" className="btn btn-primary">Connection</Link></li>
                            <li><Link to="/Inscritpion" className="btn btn-secondary" style={{ marginLeft: 15 }}>Inscritpion</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <MobileNavbar />
        </>
    )
}

export default Navbar
