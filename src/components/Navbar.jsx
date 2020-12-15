import React from 'react'
import './Navbar.css'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    return (
    <>
        <nav className="d-none d-md-block">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a href="#" className="logo">
                    <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="" style={{width : 70}}/>
                </a>
                <div className="searchBar">
                    <input type="text" name="" id=""/>
                </div>
                <div className="menu">
                    <ul className=" d-flex">
                        <li><a href="#" className="mr-4">Connection</a></li>
                        <li><a href="#">Inscritpion</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="d-block d-md-none">
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
