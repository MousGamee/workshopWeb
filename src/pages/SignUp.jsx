import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
        <div>
            <Navbar />
            <MobileNavbar />
            <div className="container paddingNavbar">
                <div className="row d-flex justify-content-center mt-4">
                    <form className="col-lg-6">
                        <h2> Inscription </h2>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="email@mail.com"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mot de passe</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmez le mot de passe</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary flex-fill"> S'inscrire </button> <br/>
                        <p className="mt-3">Déja un compte ? <Link to="/Connection">Se connecter</Link></p>
                    </form>
                </div> 
            </div>
        </div>
        </>
    )
}

export default SignUp
