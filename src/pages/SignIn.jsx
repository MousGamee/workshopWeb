import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <>
            <div>
                <Navbar />
                <MobileNavbar />
                <div className="container paddingNavbar">
                    <div className="row d-flex justify-content-center mt-4">
                        <form className="col-lg-6">
                            <h2> Connexion </h2>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" placeholder="email@mail.com"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mot de passe</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-primary flex-fill"> Se connecter </button> <br/>
                            <Link to="/Mot-de-passe-oublie"className="d-block mt-3 mb-3"> Mot de passe oublié ?</Link>
                            <p>Vous n'avez pas de compte ? <Link to="/Inscritpion">Inscription</Link></p>
                        </form>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default SignIn
